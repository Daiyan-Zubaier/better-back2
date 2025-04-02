import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-4 sm:px-10 md:px-16 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/img/vertebrae.png" 
            alt="BetterBack Spine Logo" 
            className="h-8 w-auto"
           />
          <span className="font-bold text-white text-xl tracking-tight">BetterBack</span>
        </div>
      </div>
      <div>
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Download App</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
