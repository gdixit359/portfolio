import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Luvo Store",
      description: "Luvo Store is a modern Shopify-based eCommerce site specializing in premium makeup mirrors, lighting, and beauty accessories. I developed the site with a focus on clean UX, responsive design, and custom features to enhance the shopping experience. The project included advanced filtering, tailored product templates, and performance optimization for smooth navigation.",
      tags: ["Shopify", "Javascript", "Custom Theme"],
      links: {
        github: "",
        external: "https://luvostore.com.au",
      },
      image: "/assets/projects/luvostore.png",
      category: "Shopify"
    },
    {
      title: "Verve",
      description: "Verve offers wellness products like supplements and superfood powders to support energy, immunity, and overall health.",
      tags: ["Shopify", "Javascript", "Custom Theme"],
      links: {
        github: "",
        external: "https://vavaverve.com/",
      },
      image: "/assets/projects/verve.png",
      category: "Shopify"
    },
    {
      title: "UMAD",
      description: "This web app reads CSV files exported from Amazon Seller Central. It automatically creates discount codes and price adjustments based on the CSV data. The discounts are applied across multiple connected Shopify stores simultaneously.",
      tags: ["Web App", "Node.js", "React"],
      links: {
        github: "",
        external: "https://umad.netlify.app/",
      },
      image: "/assets/projects/umadnew.png",
      category: "webapp"
    },
    {
      title: "Chip's Workshop",
      description: "Chip's Workshop is an educational game that helps kids learn about basic engineering and problem-solving through fun building challenges. Players help Chip assemble simple machines and fix broken items using logical thinking and creativity. The game is designed for young children, promoting STEM skills in a safe and engaging environment.",
      tags: ["Game", "Javascript", "HTML", "CSS"],
      links: {
        github: "",
        external: "https://www.knowledgekids.ca/game/chips-workshop",
      },
      image: "/assets/projects/chipsworkshop.png",
      category: "game"
    }
  ];

  const otherProjects = [
  ];

  const [activeFilter, setActiveFilter] = React.useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredFeaturedProjects = activeFilter === "all" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  const filteredOtherProjects = activeFilter === "all"
    ? otherProjects
    : otherProjects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20">
      <div className="section-container">
        <h2 className="numbered-heading text-2xl font-semibold mb-10">
          <span className="text-highlight font-mono mr-2">02.</span> Some Things I've Built
        </h2>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-4 py-2 rounded-full border border-purple-light transition-colors ${activeFilter === "all" ? "bg-purple-light/10 text-purple-light" : "text-slate border-slate hover:text-purple-light hover:border-purple-light"}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full border border-purple-light transition-colors ${activeFilter === "web" ? "bg-purple-light/10 text-purple-light" : "text-slate border-slate hover:text-purple-light hover:border-purple-light"}`}
            onClick={() => handleFilterChange("Shopify")}
          >
            Shopify
          </button>
          <button 
            className={`px-4 py-2 rounded-full border border-purple-light transition-colors ${activeFilter === "design" ? "bg-purple-light/10 text-purple-light" : "text-slate border-slate hover:text-purple-light hover:border-purple-light"}`}
            onClick={() => handleFilterChange("webapp")}
          >
            Web App
          </button>
          <button 
            className={`px-4 py-2 rounded-full border border-purple-light transition-colors ${activeFilter === "mobile" ? "bg-purple-light/10 text-purple-light" : "text-slate border-slate hover:text-purple-light hover:border-purple-light"}`}
            onClick={() => handleFilterChange("game")}
          >
            Game
          </button>
        </div>

        {/* Featured Projects */}
        {filteredFeaturedProjects.length > 0 && (
          <div className="space-y-32 mb-32">
            {filteredFeaturedProjects.map((project, index) => (
              <div 
                key={index} 
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
                data-category={project.category}
              >
                {/* Project Image */}
                <div 
                  className={`md:col-span-6 relative rounded overflow-hidden ${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <a 
                    href={project.links.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="absolute inset-0 bg-highlight/10 hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <div className="w-full aspect-video bg-navy-light flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                    </div>
                  </a>
                </div>

                {/* Project Content */}
                <div 
                  className={`md:col-span-6 ${
                    index % 2 === 0 
                      ? 'md:order-1 md:text-left md:col-start-1 md:col-end-7' 
                      : 'md:order-2 md:text-right md:col-start-7 md:col-end-13'
                  } z-10`}
                >
                  <div className="flex flex-col h-full">
                    <p className="font-mono text-highlight mb-1">Featured Project</p>
                    <h3 className="text-foreground text-2xl font-bold mb-4">
                      <a 
                        href={project.links.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-highlight transition-colors duration-300"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <div className="bg-navy-light rounded p-6 mb-4 shadow-xl">
                      <p className="text-slate-light">
                        {project.description}
                      </p>
                    </div>

                    <ul className={`flex flex-wrap gap-3 text-sm mb-4 ${
                      index % 2 === 0 ? '' : 'md:justify-end'
                    }`}>
                      {project.tags.map((tag, tagIndex) => (
                        <li key={tagIndex} className="font-mono text-slate">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex gap-4 ${
                      index % 2 === 0 ? '' : 'md:justify-end'
                    }`}>
                    {project.links.github !== '' && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="text-foreground hover:text-highlight transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                      <a 
                        href={project.links.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="External Link"
                        className="text-foreground hover:text-highlight transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Noteworthy Projects */}
        {filteredOtherProjects.length > 0 && (
          <div>
            <h3 className="text-center text-2xl font-semibold text-foreground mb-8">
              Other Noteworthy Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOtherProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-navy-light border-navy-light hover:-translate-y-2 transition-transform duration-300"
                  data-category={project.category}
                >
                  <CardContent className="p-7">
                    <div className="flex justify-between items-start mb-5">
                      <div className="text-highlight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="text-slate hover:text-highlight transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                        <a 
                          href={project.links.external} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="External Link"
                          className="text-slate hover:text-highlight transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      <a 
                        href={project.links.external}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-highlight transition-colors duration-300"
                      >
                        {project.title}
                      </a>
                    </h3>
                    
                    <p className="text-slate mb-5">
                      {project.description}
                    </p>
                    
                    <footer>
                      <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate">
                        {project.tags.map((tag, tagIndex) => (
                          <li key={tagIndex}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button 
                asChild
                className="bg-transparent hover:bg-transparent text-highlight border border-highlight hover:border-highlight-dark rounded px-6 py-4 hover:text-highlight-dark transition-colors duration-300"
              >
                <a href="/projects.html">View More Projects</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
