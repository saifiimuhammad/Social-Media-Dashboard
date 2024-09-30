const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-logo-container">
            <h3 className="footer-logo">Social Media Dashboard</h3>
          </div>

          <div className="footer-box">
            <ul className="footer-menu">
              <li className="footer-items">
                <a className="footer-links">Home</a>
              </li>
              <li className="footer-items">
                <a className="footer-links">Facebook</a>
              </li>
              <li className="footer-items">
                <a className="footer-links">Instagram</a>
              </li>
              <li className="footer-items">
                <a className="footer-links">Twitter</a>
              </li>
              <li className="footer-items">
                <a className="footer-links">Linkedin</a>
              </li>
            </ul>
          </div>

          <div className="newsletter-container">
            <label htmlFor="email" className="email-label">Sign Up to our Newsletter</label>
            <div className="email-box">
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Enter your email here"
            ></input>
              <button className="email-btn btn">Sign Up</button>
            </div>
          </div>
          <p className="copyright-tag">
            &copy; {new Date().getFullYear()} Muhammad Saif. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
