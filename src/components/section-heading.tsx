export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <div
        className={
          align === "center"
            ? "mx-auto mt-4 h-px w-16 bg-gradient-to-r from-neon-pink to-neon-cyan"
            : "mt-4 h-px w-16 bg-gradient-to-r from-neon-pink to-neon-cyan"
        }
      />
    </div>
  );
}
