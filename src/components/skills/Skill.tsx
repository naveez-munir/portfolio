import { Code, Server, Cloud, Globe } from "lucide-react"; // Using lucide-react for icons

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "React.js", icon: <Code /> },
      { name: "Next.js", icon: <Globe /> },
      { name: "Tailwind CSS", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: <Server /> },
      { name: "Nest.js", icon: <Server /> },
      { name: "Express.js", icon: <Server /> },
      { name: "MongoDB", icon: <Server /> },
    ],
  },
  {
    category: "Cloud & Serverless",
    techs: [
      { name: "AWS Lambda", icon: <Cloud /> },
      { name: "DynamoDB", icon: <Cloud /> },
      { name: "S3", icon: <Cloud /> },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Skills & Technologies
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-lg bg-background shadow-lg border-border-color"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">
              {skillCategory.category}
            </h3>
            <ul className="space-y-4">
              {skillCategory.techs.map((tech, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-foreground">{tech.icon}</span>
                  <span className="text-lg text-foreground">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
