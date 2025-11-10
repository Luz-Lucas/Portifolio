import { Code2, Terminal, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "C++",
      level: "Basics",
      description: "Strong foundation in object-oriented programming and data structures",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Terminal,
      title: "Python",
      level: "Basics",
      description: "Proficient in scripting, automation, and problem-solving",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Layers,
      title: "React",
      level: "Intermediate",
      description: "Building modern, responsive web applications with React and TypeScript",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-glow`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {skill.title}
              </h3>
              
              <p className="text-primary font-semibold mb-3">
                {skill.level}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
