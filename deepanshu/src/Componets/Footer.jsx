import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
        fontSize: "14px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Newsletter Signup */}
        <div style={{ flex: "1 1 300px", padding: "10px" }}>
          <h4 style={{ fontSize: "18px", marginBottom: "15px" }}>
            BE THE FIRST TO KNOW
          </h4>
          <p style={{ marginBottom: "15px" }}>
            Sign up for updates from mettä muse.
          </p>
          <form style={{ display: "flex", gap: "10px" }}>
            <input
              type="email"
              placeholder="Enter your email..."
              style={{
                padding: "12px",
                flex: "1",
                border: "none",
                borderRadius: "5px",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={{ flex: "1 1 200px", padding: "10px" }}>
          <h4 style={{ fontSize: "18px", marginBottom: "15px" }}>CONTACT US</h4>
          <p style={{ marginBottom: "8px" }}>+44 221 133 5360</p>
          <p style={{ marginBottom: "8px" }}>
            <a
              href="mailto:customercare@mettamuse.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              customercare@mettamuse.com
            </a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>CURRENCY</strong>: USD
          </p>
          <p style={{ fontSize: "12px", color: "#ccc" }}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>

        {/* About Section */}
        <div style={{ flex: "1 1 200px", padding: "10px" }}>
          <h4 style={{ fontSize: "18px", marginBottom: "15px" }}>mettä muse</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Artisans
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Boutiques
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px", padding: "10px" }}>
          <h4 style={{ fontSize: "18px", marginBottom: "15px" }}>QUICK LINKS</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Orders & Shipping
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Payment & Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Payment */}
        <div
          style={{
            flex: "1 1 300px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h4 style={{ fontSize: "18px", marginBottom: "15px" }}>FOLLOW US</h4>
          <p>
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}
            >
              Instagram
            </a>
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "12px",
          color: "#ccc",
        }}
      >
        Copyright ©️ 2023 mettä muse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;