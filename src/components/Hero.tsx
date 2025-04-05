
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 relative">
      {/* Purple Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-light/20 blur-[100px] -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-highlight font-mono mb-5 opacity-0 animate-fadeIn" style={{ animationDelay: '100ms' }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            Gaurav Dixit.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-purple-light mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            Full Stack Developer | Team Lead | CRO
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-2xl mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <b>Shopify Developer & Team Lead</b> with <b>8+ years’ experience</b> in <b>high-performance eCommerce</b>. Expert in <b>Shopify themes/apps</b>, <b>Liquid</b>, <b>React</b>, <b>Node.js</b>, and <b>GraphQL</b>. Proven track record in <b>leading teams</b>, <b>code reviews</b>, <b>CRO</b>, and <b>data-driven UX</b>. Passionate about <b>clean code</b>, <b>custom storefronts</b>, and <b>Agile delivery</b> that drives results.
          </p>
          <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '500ms' }}>
            <Button className="bg-transparent hover:bg-purple-light/10 border border-purple-light text-purple-light rounded-full text-base md:text-lg px-7 py-5 hover:translate-y-[-4px] transition-all duration-300">
              Check out my work!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
