
import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Purple Gradient Orb */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-purple-light/20 blur-[80px] -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-md mx-auto text-center">
          <p className="font-mono text-highlight mb-2">04. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Get In Touch</h2>
          
          <p className="text-slate mb-10">
            Although I'm not currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          
          <Button className="bg-transparent hover:bg-purple-light/10 border border-purple-light text-purple-light hover:border-purple hover:text-purple rounded-full px-8 py-6 transition-colors duration-300">
            <a href="mailto:gdixit359@gmail.com">Say Hello</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
