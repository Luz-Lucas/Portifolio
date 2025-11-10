import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript, featuring real-time data updates and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Luz-Lucas",
      demo: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Python Automation Tool",
      description: "Automation script that streamlines repetitive tasks, saving hours of manual work through intelligent data processing.",
      technologies: ["Python", "APIs", "Automation"],
      github: "https://github.com/Luz-Lucas",
      demo: null,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "C++ Algorithm Suite",
      description: "Collection of efficient algorithms and data structures implementations, optimized for performance and learning.",
      technologies: ["C++", "Algorithms", "Data Structures"],
      github: "https://github.com/Luz-Lucas",
      demo: null,
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-secondary border border-border rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-secondary flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/Luz-Lucas" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
