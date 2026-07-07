# Weak-Spot & Honesty Playbook

> How to turn Archit's riskiest repos into credibility instead of traps. Two rules run through all of it: **(1) name the flaw before the interviewer does** — pre-empting a weakness reads as senior; getting caught reads as junior. **(2) Never say "I built" for code you didn't author** — a 20-second GitHub `git blame` can contradict you, and that one contradiction poisons everything else you claimed. Generated 2026-07-06.

---

## Part A — Technical flaws to own (in projects you *will* discuss)

These are on real projects worth talking about. The move is the same each time: state the flaw plainly, explain *why* it happened, then show the fix. That sequence is what distinguishes "I understand my own code" from "I got a number and stopped."

### A1. `pneumonia-detection` — the evaluation-leakage bug

**The flaw (verifiable):** `pneumonia.ipynb` line 209 does `val = np.concatenate((val, test))` — the test set is merged into the validation set. Every training decision that watches validation (`ModelCheckpoint` saving best `val_accuracy`, `ReduceLROnPlateau`, early stopping) is therefore *selecting on the test data*. So the headline **93.1% test accuracy / 0.97 ROC-AUC is optimistically biased** — the test set leaked into model selection; it's no longer a clean held-out estimate.

**How they'll probe it:** "Your notebook concatenates test into val — doesn't that leak?" (It's the first question the report flagged, because it's the obvious one.)

**Mature answer (first person):**
> "Yes — that's a genuine leakage bug. `val = np.concatenate((val, test))` means the test set is inside validation, so `ModelCheckpoint` and `ReduceLROnPlateau` are tuning on data I then reported as held-out. The 93% is therefore optimistic — it's really a validation number wearing a test label. The correct setup is three disjoint splits: train, a validation set for checkpointing/LR/early-stopping, and a test set touched exactly once at the very end. The Kaggle chest-X-ray split is also famously tiny and skewed (only 16 images in the original val folder), which is probably why someone concatenated in the first place — the right fix there is to re-split train into a proper stratified train/val and leave test untouched, or use cross-validation. I'd expect the honest test accuracy to drop a few points, and I'd rather report the lower true number."

**What I'd fix:** proper 3-way stratified split (or k-fold); report test once; add class-weighting and a tuned decision threshold (recall matters for a medical screen); consider transfer learning (DenseNet-121/CheXNet) for a small dataset.

**Attribution note:** this was a 4-person coursework project (you have 4/10 commits, mostly uploads + README; the model/training code was committed by teammates). So frame it as *"a project I co-authored"* — own the *understanding* of the bug completely, but don't claim you personally wrote every line, and don't throw a teammate under the bus either ("we had a leakage bug" > "they made a mistake").

### A2. `Financial-Sentiment-Analysis-` — unfinished pipeline, weak signal, train/serve skew

**The flaws (verifiable):**
- **No evaluation.** The notebook stops at the `IterativeImputer` step — there is **no RMSE, R², or directional-accuracy** recorded anywhere. There's no evidence the XGBoost model beats a naive baseline.
- **The signal is weak.** Every feature-vs-`Next_Day_Return` correlation is near zero (Pearson ≤ 0.07, Spearman ≤ 0.09) — a real, honest indication that next-day return is barely predictable from these inputs.
- **Train/serve schema skew (a real bug).** `utils/model_utils.py` `prepare_features(date, rsi, roc, volume)` feeds the model **only 3 features — `{RSI, ROC, Volume}`** — via `model.predict(np.array([list(features.values())]))`, but the notebook trained XGBoost on ~14 features. Serving 3 columns in dict-insertion order to a 14-feature model is undefined behavior: wrong-shape error at best, silent garbage predictions at worst.
- Single ~501-row, TSLA-heavy CSV; pickle-based model loading; sentiment scored offline and never refreshed in the app.

**How they'll probe it:** "What was your accuracy?" or "The app only sends 3 features — how does that match your training data?"

**Mature answer (first person):**
> "I'll be straight: this one is an honest negative result more than a finished model. When I ran the correlations, every feature-to-next-day-return correlation came back under 0.1 — which is the market telling you next-day return is close to a random walk from these signals. The right scientific response was *not* to cherry-pick a metric that looked good; it's to say the signal isn't there and design the evaluation that would prove it — directional accuracy against a coin-flip baseline, walk-forward validation instead of a random split, RMSE vs a 'predict-yesterday' baseline. The pipeline also has a real train/serve bug I'd fix first: the Streamlit app only passes RSI, ROC, and Volume, but the model was trained on ~14 features, so the served feature vector doesn't match the training schema. You'd pin a single feature contract — same columns, same order — shared by training and serving, ideally via a saved preprocessing pipeline rather than a hand-built dict."

**What I'd fix:** shared feature schema (sklearn `Pipeline`/`ColumnTransformer` pickled *with* the model), walk-forward evaluation + directional-accuracy vs baseline, reframe as classification (up/down) since regression on tiny returns is near-hopeless, and honest reporting that the signal is weak. *This is a good project to demonstrate scientific integrity — "I didn't fake a number" is a strong thing to be able to say.*

### A3. `EEG-Emotion-Recognition-RL` — modest cross-subject accuracy

Already scripted in the **Flagship Interview Prep Pack** (project 6). One-line version: *subject-dependent ~85%, but cross-subject only 54–59% (DEAP) / 36% four-class (SEED-IV) — and that gap is the fundamental, well-documented difficulty of calibration-free EEG, not a modeling failure I'm hiding.* Also be ready that `loso_baseline.py` is a 0-byte placeholder — call it a stub you didn't finish, don't pretend it ran.

---

## Part B — The "don't-headline" repos (attribution honesty)

These show up on your GitHub, so an interviewer may click them. Most are **contribute-don't-claim** — deliver the honest one-liner without shrinking (a clear "that's a team project, here's my part" is confident, not weak).

> **Note — SMPRK/Sampark is NOT in this table.** You lead that project, so it's a Tier-1 headline (see report Section 3 and entries #27/#28). Present it as *"I lead the team and own the system/workflow design"* — and be candid you drove design & coordination rather than authoring the backend. That's a claim you can defend; the repos below are ones you should not headline.

| Repo | The truth (from git history) | What to say if it surfaces |
|---|---|---|
| `archit-sl` (Omramanuj) & your fork | `main` is **32/32 Ramanuj Om**; you have **0 commits on main**, ~7 on a side branch. | "Despite the name, that repo is Ramanuj's — the main branch is entirely his. My contribution was a learning-events / adaptive-learning telemetry layer and some Supabase/Google-auth wiring on a feature branch. I'd only mention it as 'contributed to,' never as my build." |
| `bright-bird` *(on hold / incomplete)* | **4 of 36 commits (~11%)**; the other 32 are Ramanuj's. Continuation of `archit-sl`, currently paused. | "A continuation of that same codebase — I added the learning-events infrastructure and swapped deck generation onto the Gemini API. It's on hold now. Small, real, and I'd describe it exactly that way — a contribution, not ownership." |
| `Parallel-Search-Tool-OpenMP-MPI-` | Your only commit is a **merge of an AI-generated README**. The C++/OpenMP/MPI is jeet0407's. | "I didn't write the parallel C++ there — my only commit was merging a docs PR. I can reason about OpenMP/MPI, but I won't present that repo as my HPC work." **Do not list C++/HPC as a skill off this repo.** |
| `Odoo` (ReWear) | Top committer by count (5/14) but **all five are README/docs edits** — `git blame` shows zero authored app code. | "Hackathon team project — my commits were documentation. I helped on the team, but the application code isn't mine, so it's a 'contributed to a hackathon,' not a portfolio piece." |
| `DATA-SCIENCE-GROUP-ACTIVITY` | **0 commits by you**; owned by a peer. README credits you as "Member 5: Feature Importance & Reporting." | "A group activity — per our split I did the feature-importance interpretation and write-up, but it's not committed under me. Documented role, not authored code." |
| `Consultancy-Project-` | **1 of 22 commits** (one component). Leads were amanraz2802 / Kanishk. | "Team project; I contributed one component. Minor — I wouldn't headline it." |
| `Convolve` | **3 of 17 commits**, mostly README + data uploads; Nilang led the modeling. | "A competition project Nilang led — my commits were data/docs, not the core model." |

**Golden rule for this table:** the phrase is **"I contributed to"** or **"our team built, and I did X"** — never **"I built."** If you genuinely don't remember your role on one of these, say "that was a team project — let me not overstate my part" rather than improvising a claim you can't defend.

---

## Part C — Rules of thumb & phrasing

**The pre-empt.** When you introduce a real project, land one honest caveat yourself: *"…it hits ~93%, though I'll flag there's a validation-leakage issue in that notebook I'd fix."* You control the framing and look senior. The alternative — them finding it — puts you on defense.

**Four tiers of ownership language, and when to use each:**
- **"I built / I designed / I authored"** → where `git shortlog` shows you as sole/lead author: **Kore, career-passport-v4, the CareerPassport family, SQL-TRACKER, Puzzle-Tracker, plantree_server, EEG-RL, KidneyTumorSegmentation, NLP-LAB.**
- **"I led / I coordinated the team that built"** → **SMPRK/Sampark** — you own the architecture, workflow design, and delivery; be explicit it's leadership + design, not backend authorship.
- **"I co-built / I contributed [specific part]"** → `Crawlers` (major, ~38% + the award), `Financial-Sentiment` (~42%), `pneumonia-detection`, `bright-bird` (on hold).
- **"Our team built it; my part was X"** → everything in Part B.

**The killer question — "Is this all your own code?"** Have this ready:
> "The projects I lead with — Kore, the Career Passport sites, the trackers, my ML repos — are mine end to end; you can check the commit history. Sampark/SMPRK is one I lead as a team project — I own the architecture and coordinate the team rather than writing every line, and I'm upfront about that. A few other repos are team or college projects where I contributed a piece, and I'm always explicit about which is which. Happy to walk through any of them and tell you exactly what I did."

That answer *invites* the `git blame` instead of fearing it — which is the whole game.

**GitHub hygiene (leads into Step 3):** an interviewer's first impression is your profile grid. Right now forks and not-your-work repos (`archit-sl`, `Odoo`, `Convolve`, `Consultancy`, the pneumonia fork) sit next to your real work with equal weight. Consider **unpinning/archiving the forks and pinning only authored flagships**, so the profile itself tells the true story before you say a word.
