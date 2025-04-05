
import React from "react";

const SocialSidebar = () => {
  return (
    <>
      {/* Left Side - Social Links */}
      <div className="hidden md:block fixed left-5 bottom-0 z-10">
        <div className="flex flex-col items-center">
          <ul className="flex flex-col gap-6 mb-6">
           
            <li>
              <a 
                href="https://www.linkedin.com/in/gaurav-dixit-a201101a1" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate hover:text-purple-light hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
           
            <li>
              <a 
                href="https://www.instagram.com/__gaurav_dixit/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate hover:text-purple-light hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
          </ul>
          <div className="h-24 w-px bg-slate-dark"></div>
        </div>
      </div>

      {/* Right Side - Email */}
      <div className="hidden md:block fixed right-5 bottom-0 z-10">
        <div className="flex flex-col items-center">
          <a 
            href="mailto:gdixit359@gmail.com" 
            className="font-mono text-sm text-slate mb-6 [writing-mode:vertical-rl] hover:text-purple-light hover:-translate-y-1 transition-all duration-300"
          >
            gdixit359@gmail.com
          </a>
          <div className="h-24 w-px bg-slate-dark"></div>
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
