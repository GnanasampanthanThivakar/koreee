import { 
  Instagram, 
  Facebook, 
  Music2, 
  MapPin, 
  Mail, 
  Phone, 
  Send 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <a href="#home" className="nav-logo">
                KORE<span>.</span>
              </a>
              <p className="footer-tagline">
                Whether you&apos;re training seriously or playing casually with friends, 
                we make every match feel effortless and enjoyable.
              </p>
              
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin size={18} />
                  <span>45, Sir Marcus Fernando Mawatha, Colombo 7, Sri Lanka</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={18} />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={18} />
                  <span>hello@kore.lk</span>
                </div>
              </div>
            </div>

            {/* Other Pages */}
            <div>
              <h4 className="footer-col-title">Other Pages</h4>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#programs">Classes</a>
                <a href="#pricing">Membership</a>
                <a href="#contact">Contact Us</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Term Of Service</a>
                <a href="#">Disclaimer</a>
                <a href="#">Credits</a>
                <a href="#">FAQ</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4 className="footer-col-title">Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Email Address" className="newsletter-input" />
                <button className="newsletter-btn" aria-label="Subscribe">
                  <Send size={18} />
                </button>
              </div>
              <p className="newsletter-text">Get the latest news & updates</p>
              
              <div className="footer-social-circles">
                <a href="#" className="social-circle" aria-label="Facebook">
                  <Facebook size={18} fill="currentColor" />
                </a>
                <a href="#" className="social-circle" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="social-circle" aria-label="TikTok">
                  <Music2 size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-credit">
            Kore Sports Club & Training Academy 
          </p>
          <p className="footer-copyright">
            Copyright © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
