#!/usr/bin/env bash
# refresh_check.sh — drift check for the Archit career intelligence report.
# READ-ONLY: uses `gh api` only. Detects (1) NEW repos and (2) CHANGED repos since
# the last snapshot recorded in archit_career_context.md → Section 5.
# Requires: gh (authenticated). Run:  bash refresh_check.sh
#
# When it flags repos, re-analyze ONLY those (see the report's Section 5 "How to refresh").

set -uo pipefail
ARCHIT_EMAIL="architsavaliya175@gmail.com"

# ── Ledger manifest (from report Section 5): owner/name  branch  analyzed_sha  last_commit ──
MANIFEST=$(cat <<'EOF'
Archit-175/career-passport-v4 main aa2bb6d0dd 2026-06-18
Archit-175/careerpassport main c24a88ef60 2026-06-08
Archit-175/cpv2 main aac2ce3430 2026-06-11
Archit-175/cpv3 main c876b8a67f 2026-06-12
Archit-175/Kore main e24b103923 2026-06-30
Archit-175/EEG-Emotion-Recognition-RL main 51118d3bed 2026-05-18
Archit-175/KidneyTumorSegmentation-ARUGD main 8aed46794d 2026-05-19
Archit-175/Financial-Sentiment-Analysis- main 47094622cf 2025-02-09
Archit-175/pneumonia-detection main 4aa4540529 2026-05-13
Archit-175/Convolve main 745acd21ae 2026-05-17
Archit-175/archit-portfolio main 7033ad42a0 2026-05-21
Archit-175/archit-sl main db33c8cb49 2026-05-24
Archit-175/bright-bird main f34549e21d 2026-05-31
Archit-175/plantree_server main 6a92de5b29 2024-10-29
Archit-175/Consultancy-Project- frontend 271b096505 2024-10-28
Archit-175/Crawlers main b1320ea37a 2026-05-17
Archit-175/Deep-Learning main 66f44db577 2026-04-10
Archit-175/NLP-LAB main 09338721a0 2025-12-03
Archit-175/Odoo main 21f1668279 2026-05-17
Archit-175/Puzzle-Tracker- main a90e7a49c3 2026-07-01
Archit-175/SQL-TRACKER main a7cfcfedb4 2026-07-05
Archit-175/GoogleColab main 94c125f870 2025-11-18
Archit-175/job main de24875900 2024-08-20
Archit-175/jobApplicatoin main 0ccb13428f 2024-08-20
jeet0407/sampark-backend main 9c911aeda6 2026-06-22
jeet0407/sampark-frontend main 38f92ba32a 2026-04-21
smprk-svnit/smprk-backend main 07e5f985f2 2026-07-03
smprk-svnit/smprk-frontend main 38f92ba32a 2026-04-21
jeet0407/Parallel-Search-Tool-OpenMP-MPI- main 8ce6a2a216 2026-05-12
Nilangbhuva/Convolve main 745acd21ae 2026-05-17
ttanishh/Consultancy-Project- frontend 271b096505 2024-10-28
divyajaisansaria/DATA-SCIENCE-GROUP-ACTIVITY main 55445d0e12 2025-09-17
Diya5772/pneumonia-detection main 4aa4540529 2026-05-13
jaindevshrut/Odoo main 21f1668279 2026-05-17
Omramanuj/archit-sl main db33c8cb49 2026-05-24
Archit-175/Archit-175 main b69e3171e4 2026-05-19
EOF
)

command -v gh >/dev/null || { echo "ERROR: gh CLI not found."; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "ERROR: gh not authenticated. Run: gh auth login"; exit 1; }

echo "══════════════════════════════════════════════════════════════"
echo " Career-report drift check   (baseline: report Section 5 ledger)"
echo "══════════════════════════════════════════════════════════════"

known=$(printf '%s\n' "$MANIFEST" | awk '{print $1}' | sort -u)

# Owners to scan for NEW repos. Archit's own account is where new AUTHORED work lands.
# Other owners in the ledger only host specific shared/fork repos — we track CHANGES to
# those (section 2), but scanning their whole account for "new repos" is just noise.
SCAN_OWNERS="Archit-175"

# ── 1. NEW repos (under Archit's own account) ────────────────────────
echo
echo "▶ NEW repos under: $SCAN_OWNERS (not in the ledger):"
new_found=0
for o in $SCAN_OWNERS; do
  while IFS= read -r nwo; do
    [ -z "$nwo" ] && continue
    if ! grep -qxF "$nwo" <<<"$known"; then
      echo "   + $nwo   ← NEW, add to the report"
      new_found=1
    fi
  done < <(gh repo list "$o" --limit 200 --json nameWithOwner --jq '.[].nameWithOwner' 2>/dev/null)
done
[ "$new_found" -eq 0 ] && echo "   (none — no new repos under $SCAN_OWNERS)"
echo "   Note: new collaborations under OTHER owners aren't auto-scanned — if you join a"
echo "   teammate's/org's new repo, add it to SCAN_OWNERS or the manifest by hand."

# ── 2. CHANGED repos (HEAD moved since analyzed_sha) ─────────────────
echo
echo "▶ CHANGED repos (moved since last analysis):"
changed=0; gone=0; unchanged=0
while read -r repo branch sha lastc; do
  [ -z "${repo:-}" ] && continue
  cur=$(gh api "repos/$repo/commits/$branch" --jq '.sha' 2>/dev/null)
  if [ -z "$cur" ]; then
    echo "   ?? $repo  — no access or branch/repo gone (was $sha)"; gone=$((gone+1)); continue
  fi
  if [ "${cur:0:10}" = "$sha" ]; then
    unchanged=$((unchanged+1))
  else
    ahead=$(gh api "repos/$repo/compare/$sha...$branch" --jq '.ahead_by' 2>/dev/null)
    architc=$(gh api "repos/$repo/compare/$sha...$branch" \
      --jq "[.commits[]|select(.commit.author.email==\"$ARCHIT_EMAIL\")]|length" 2>/dev/null)
    ahead=${ahead:-?}; architc=${architc:-0}
    flag=""; [ "$architc" != "0" ] && flag="  ★ Archit authored $architc — PRIORITY re-analyze"
    echo "   ~ $repo  +${ahead} new commit(s), now ${cur:0:10}${flag}"
    changed=$((changed+1))
  fi
done <<<"$MANIFEST"
[ "$changed" -eq 0 ] && echo "   (none — every ledger repo is at its analyzed commit)"

# ── Summary ──────────────────────────────────────────────────────────
echo
echo "──────────────────────────────────────────────────────────────"
echo " Summary:  changed=$changed   unchanged=$unchanged   inaccessible=$gone   new=$([ $new_found -eq 1 ] && echo yes || echo no)"
if [ "$changed" -gt 0 ] || [ "$new_found" -eq 1 ]; then
  echo " → Re-analyze only the flagged repos, then update Section 1 + the Section 5 ledger."
  echo "   For a changed repo:  git clone --filter=blob:none https://github.com/<owner>/<name> \\"
  echo "                        && git -C <name> log <analyzed_sha>..HEAD --oneline --stat"
else
  echo " → Report is current. Nothing to refresh."
fi
echo "──────────────────────────────────────────────────────────────"
