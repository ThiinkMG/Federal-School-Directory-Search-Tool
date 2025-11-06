import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mcf-footer">
      <div className="mcf-footer-content">
        <div className="mcf-footer-brand">
          <img
            src="https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png"
            alt="My College Finance Logo"
            className="mcf-logo"
          />
          <h2 className="mcf-footer-title">MY COLLEGE FINANCE</h2>
          <p className="mcf-footer-description">
            Empowering students with financial education and smart tools for a brighter future.
          </p>
        </div>
        <div className="mcf-footer-links">
          <a
            href="https://www.mycollegefinance.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mcf-footer-link"
          >
            Main Website
          </a>
          <span className="mcf-footer-separator">•</span>
          <a
            href="https://www.mycollegefinance.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="mcf-footer-link"
          >
            Privacy Policy
          </a>
          <span className="mcf-footer-separator">•</span>
          <a
            href="https://www.mycollegefinance.com/terms-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="mcf-footer-link"
          >
            Terms of Service
          </a>
          <span className="mcf-footer-separator">•</span>
          <a
            href="https://linktr.ee/mycollegefinance"
            target="_blank"
            rel="noopener noreferrer"
            className="mcf-footer-link"
          >
            Social Media
          </a>
        </div>
        <p className="mcf-footer-tagline">EDUCATE • MOTIVATE • ELEVATE</p>
        <p className="mcf-footer-copyright">
          © 2025 My College Finance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
