const skills = ["JavaScript", "React", "Tailwind", "Node.js", "CSS", "Git"];
const other_skills = [
  "G-Suite Products",
  "Excel",
  "Financial Statements",
  "Financial Reporting",
];
function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <h2 className="text-text">Technical Skills:</h2>
        {skills.map((skill) => (
          <span className="bg-accent/10 text-accent2 text-xs px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <h2 className="text-text">Other Skills:</h2>
        {other_skills.map((skill) => (
          <span className="bg-accent/10 text-accent2 text-xs px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
