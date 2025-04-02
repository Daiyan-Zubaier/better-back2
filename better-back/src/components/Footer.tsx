import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 px-6 py-4 sm:px-10 md:px-16 flex justify-between items-center text-sm text-white/80 z-10">
      <div>
        <p>© 2025 Scoli Inc. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <a href="https://scoli.app/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
        <a href="https://scoli.app/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</a>
        <a href="https://scoli.app/disclaimer/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Disclaimer</a>
        <a href="mailto:support@scoli.app" rel="noopener noreferrer" className="hover:text-white transition-colors">Support</a>
      </div>
    </footer>
  );
};

export default Footer;