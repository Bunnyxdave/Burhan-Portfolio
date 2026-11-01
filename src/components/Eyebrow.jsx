export default function Eyebrow({ children, dot = true }) {
  return (
    <p className="eyebrow">
      {dot && <span className="eyebrow-dot" />}
      {children}
    </p>
  );
}
