import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

// Define our background images and videos
const backgrounds = [
  "/img/background3.mp4",  // Video
  "/img/background1.png", // Image
  "/img/background2.png", // Image
];

const slogans = [
  "Run Further!",
  "Stand Taller!",
  "Learn More!",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  // Function to handle cycling through backgrounds and slogans
  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let erasingInterval: NodeJS.Timeout;
    let waitTimeout: NodeJS.Timeout;
    let nextSlideTimeout: NodeJS.Timeout;

    // Function to handle the complete animation cycle for one slogan
    const runAnimationCycle = () => {
      const currentSlogan = slogans[currentIndex];
      
      // Type out the text letter by letter
      let typingIndex = 0;
      typingInterval = setInterval(() => {
        if (typingIndex <= currentSlogan.length) {
          setDisplayText(currentSlogan.substring(0, typingIndex));
          typingIndex++;
        } else {
          clearInterval(typingInterval);
          
          // After typing is complete, wait for 7 seconds before erasing
          waitTimeout = setTimeout(() => {
            // Erase text letter by letter
            let erasingIndex = currentSlogan.length;
            erasingInterval = setInterval(() => {
              if (erasingIndex >= 0) {
                setDisplayText(currentSlogan.substring(0, erasingIndex));
                erasingIndex--;
              } else {
                clearInterval(erasingInterval);
                
                // After erasing is complete, move to the next slide
                nextSlideTimeout = setTimeout(() => {
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
                }, 500);
              }
            }, 50); // Speed of erasing
          }, 5000); // Wait 7 seconds before starting to erase
        }
      }, 100); // Speed of typing
    };

    // Start the animation cycle when the component mounts or index changes
    runAnimationCycle();
    
    // Clear any remaining intervals when component unmounts or index changes
    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (erasingInterval) clearInterval(erasingInterval);
      if (waitTimeout) clearTimeout(waitTimeout);
      if (nextSlideTimeout) clearTimeout(nextSlideTimeout);
    };
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Current background with fade transition */}
      {backgrounds.map((bg, index) => (
        bg.endsWith(".mp4") ? (
          <video
            key={index}
            className="hero-background transition-opacity duration-1000 absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: currentIndex === index ? 1 : 0,
              zIndex: 0
            }}
            autoPlay
            loop
            muted
          >
            <source src={bg} type="video/mp4" />
          </video>
        ) : (
          <div
            key={index}
            className="hero-background transition-opacity duration-1000 absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: currentIndex === index ? 1 : 0,
              zIndex: 0
            }}
          ></div>
        )
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-2"></div>

      {/* Hero content */}
      <div className="hero-content h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 relative">
        <div className="max-w-xl mt-20 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            BetterBack
          </h1>
          
          {/* Animated slogan with typing effect */}
          <div className="slogan-container mb-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              <span className="typing-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </h2>
          </div>
          
          <p className="text-white/80 mb-8 max-w-md">
            Get back on track with a stronger, healthier back. 
            Reclaim your freedom from pain and take the first 
            step toward lasting back health today.
          </p>
          
          <Button className="bg-white text-black hover:bg-white/90 font-medium flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;