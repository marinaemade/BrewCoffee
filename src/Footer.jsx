import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-footerBg p-10 bg-no-repeat bg-cover grid sm:grid-cols-3 text-lg">
      <aside>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
          <line x1="6" y1="2" x2="6" y2="4"></line>
          <line x1="10" y1="2" x2="10" y2="4"></line>
          <line x1="14" y1="2" x2="14" y2="4"></line>
        </svg>
        <p>
          Made By: Marina Emad
          <br />
          @2026 all rights preserved
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/about" className="link link-hover">About Us</Link>
        <Link to="/menu" className="link link-hover">Menu</Link>
        <Link to="/contact" className="link link-hover">Contact Us</Link>
      </nav>

      <nav>
        <h6 className="footer-title">Social Media</h6>
        <div className="grid grid-flow-col gap-4">

          {/* Facebook */}
          <Link
            to={{ pathname: "https://facebook.com" }}
            target="_blank"
            className="hover:text-[#1877F2] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            to={{ pathname: "https://instagram.com" }}
            target="_blank"
            className="hover:text-[#E4405F] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17" cy="7" r="1"></circle>
            </svg>
          </Link>

          {/* TikTok */}
          <Link
            to={{ pathname: "https://tiktok.com" }}
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
              <path d="M12.5 2v14.5a3.5 3.5 0 1 1-3-3.465v2.02a1.5 1.5 0 1 0 1 1.445V2h2zM15 2c.2 1.8 1.8 3.2 3.5 3.5v2c-1.3-.1-2.6-.6-3.5-1.4V2z"/>
            </svg>
          </Link>

          {/* YouTube */}
          <Link
            to={{ pathname: "https://youtube.com" }}
            target="_blank"
            className="hover:text-[#FF0000] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
              <path d="M23 7s-.2-1.7-.8-2.5c-.7-.9-1.5-.9-1.9-1C17.5 3 12 3 12 3s-5.5 0-8.3.5c-.4.1-1.2.1-1.9 1C1.2 5.3 1 7 1 7S1 8.7 1 10.4v1.2C1 13.3 1 15 1 15s.2 1.7.8 2.5c.7.9 1.7.9 2.1 1 1.5.1 6.1.5 6.1.5s5.5 0 8.3-.5c.4-.1 1.2-.1 1.9-1 .6-.8.8-2.5.8-2.5s0-1.7 0-3.4v-1.2C23 8.7 23 7 23 7zM10 14V8l5 3-5 3z"/>
            </svg>
          </Link>

        </div>
      </nav>
    </footer>
  );
};

export default Footer;