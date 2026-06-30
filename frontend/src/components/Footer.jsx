function Footer() {
  return (
    <footer className="footer"
      style={{
        background: "#1e293b",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h3 style={{ color: "white"}}><i class="fa-solid fa-city" style={{marginRight:"0.75rem"}}></i>Smart City Reporter</h3>

      <p style={{ marginTop: "10px" }}>
        Building cleaner, safer, and smarter communities together.
      </p>

      <p style={{ marginTop: "10px" }}>
        &copy; 2026 Smart City Issue Reporting System
      </p>
    </footer>
  );
}

export default Footer;