import Card from "./components/Card.jsx";
import ProjectSlide from "./components/ProjectSlide.jsx";
import PersonalMedia from "./sections/PersonalMedia.jsx";
import Skills from "./sections/Skills.jsx";
import ResumeGrid from "./layout/ResumeGrid.jsx";
import Education from "./sections/Education.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ResumeGrid>
        <Card className="col-span-12">
          <PersonalMedia />
        </Card>
        <Card className="col-span-12 md:col-span-6">
          Work Experience
          <WorkExperience />
        </Card>

        <SidePanel />
        <Card className="col-span-12">
          <h2 className="text-text mb-4">Projects</h2>
          <ProjectSlide></ProjectSlide>
        </Card>
      </ResumeGrid>
    </div>
  );
}

function SidePanel() {
  return (
    <div className="col-span-12 flex flex-col gap-2 md:col-span-6 md:gap-5">
      <Card className="flex flex-col col-span-6">
        <Skills />
      </Card>
      <Card className="col-span-6">
        <h2 className="text-text mb-4">Education</h2>
        <Education />
      </Card>
    </div>
  );
}

export default App;
