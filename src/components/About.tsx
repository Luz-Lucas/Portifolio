import profileImage from "@/assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <img 
              src={profileImage} 
              alt="Profile" 
              className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl border border-border/50"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">20-year-old Software Engineering student</span> currently 
              in my 3rd year, passionate about creating innovative solutions through code.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in <span className="text-primary font-semibold">C++</span> and{" "}
              <span className="text-primary font-semibold">Python</span>, and intermediate expertise in{" "}
              <span className="text-primary font-semibold">React</span>, I'm constantly expanding my 
              skill set and taking on new challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in clean code, continuous learning, and building projects that make a difference. 
              Always eager to collaborate on exciting projects and contribute to the developer community.
            </p>
            
            <div className="flex gap-4 pt-4 flex-wrap">
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="text-xl font-bold text-foreground">3rd</p>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="text-xl font-bold text-foreground">20</p>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Major</p>
                <p className="text-xl font-bold text-foreground">Software Eng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
