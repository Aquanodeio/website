export default function HorizontalDivider() {
  return (
    <div
      className="h-px w-full"
      style={{
        background:
          "radial-gradient(circle at 50% 100%, rgba(169, 163, 194, 0.24) 0%, rgba(169, 163, 194, 0) 100%)",
      }}
    />
  );
}
