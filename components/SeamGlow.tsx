/**
 * Soft crimson blooms at a section's top and bottom edges. Placed in every
 * section, adjacent sections' blooms overlap at the seam so the boundary reads
 * as a gradient color-blend rather than a flat edge or a divider line.
 */
export default function SeamGlow({
  top = true,
  bottom = true,
}: {
  top?: boolean;
  bottom?: boolean;
}) {
  return (
    <>
      {top && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-[radial-gradient(65%_100%_at_50%_0%,rgba(155,27,48,0.09),transparent_72%)]" />
      )}
      {bottom && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 bg-[radial-gradient(65%_100%_at_50%_100%,rgba(155,27,48,0.09),transparent_72%)]" />
      )}
    </>
  );
}
