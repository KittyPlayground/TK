import React from 'react';
import { Code2, Layout, Palette, Smartphone, Server, Database, Terminal, GitBranch } from 'lucide-react';

const techStacks = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"]
  },
  {
    title: "UI/UX",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Figma", "Tailwind CSS", "Material-UI", "Framer Motion", "SCSS"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"]
  },
  {
    title: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "Docker", "AWS", "Vercel", "VS Code", "Postman"]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12">
          <Code2 className="text-green-400 w-8 h-8" />
          <h2 className="text-4xl font-light text-white">Tech Stack</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-black to-green-400/5 border border-green-400/10 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-green-400/10 text-green-400">
                  {stack.icon}
                </div>
                <h3 className="text-xl text-white">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-green-400/5 text-green-400 rounded-full border border-green-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;