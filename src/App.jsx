import Card from "./components/Card.jsx";
import EdLine from "./components/EdLine.jsx";
import ProjectSlide from "./components/ProjectSlide.jsx";
import PersonalMedia from "./components/PersonalMedia.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-12 gap-5 p-4 md:p-8 w-full md:w-1/2">
          <Card className="col-span-12">
            <PersonalMedia></PersonalMedia>
          </Card>
          <Card className="col-span-12 md:col-span-6">Work Experience</Card>
          <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
            <Card className="col-span-6">
              <h2 className="text-text font-medium mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Node.js",
                  "CSS",
                  "Git",
                ].map((skill) => (
                  <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="col-span-6">
              <h2 className="text-text  mb-4">Education</h2>
            </Card>
          </div>
          <Card className="col-span-12">
            <h2 className="text-text mb-4">Projects</h2>
            <ProjectSlide></ProjectSlide>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
