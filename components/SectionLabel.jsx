const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: "0.65rem",
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "var(--accent-400)",
      fontWeight: 700,
      marginBottom: "0.75rem",
    }}
  >
    {children}
  </p>
);

export default SectionLabel;
