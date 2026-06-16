import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import SkillImpact from "../components/SkillImpact.jsx";
import { Cpu, Flag, ShieldHalf, ChartColumn } from "lucide-react";
import experiences from "./WorkExperienceConfig.json";
import { useState } from "react";

const iconMap = {
  cpu: Cpu,
  flag: Flag,
  chart: ChartColumn,
  shield: ShieldHalf,
};

function displayExperienceSkill(skillsimpact) {
  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="self-start text-s">Skill Impact</div>
      {skillsimpact.map((skill) => (
        <SkillImpact
          className="w-full"
          skill={skill.skill}
          impact={skill.impact}
          Icon={iconMap[skill.icon]}
        />
      ))}
    </div>
  );
}
function displayExperienceData(experience) {
  return (
    <div className="flex flex-col items-start w-1/2">
      <p className="text-sm">{experience.time}</p>
      <p className="text-sm font-light italic">{experience.location}</p>
      <p className="text-xs text-accent/80 font-light whitespace-pre-line">
        {experience.body}
      </p>
    </div>
  );
}

export default function WorkExperience() {
  const [experience, setExperiences] = useState("None");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <ExperienceCombobox setValue={setExperiences} />
        <div className="flex gap-5 hover:scale-105 transition-transform duration-400">
          {experience == "None" ? (
            <h1 className="mx-auto mt-15 text-accent2 text-center">
              Select a company...
            </h1>
          ) : (
            <>
              {displayExperienceData(experiences[experience])}
              {displayExperienceSkill(experiences[experience].skills_impact)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const frameworks = ["Tucows", "ePIC Blockchain", "The ReefCraft Network"];
function ExperienceCombobox({ setValue }) {
  return (
    <Combobox
      items={frameworks}
      className="text-white"
      onValueChange={(value) => setValue(value)}
    >
      <ComboboxInput
        className="border-accent w-1/2 mt-2"
        placeholder="Select a company"
      />
      <ComboboxContent className="bg-bg">
        <ComboboxList>
          {(item) => (
            <ComboboxItem className="text-accent2" key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
