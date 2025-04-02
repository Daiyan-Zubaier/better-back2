import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 px-6 py-4 sm:px-10 md:px-16 flex justify-between items-center text-sm text-white/80 z-10">
      <div>
        <p>© 2025 Scoli Inc. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        <Link to="/support" className="hover:text-white transition-colors">Support</Link>
      </div>
    </footer>
  );
};

export default Footer;