import { cn } from "@/lib/utils";
const iconSize = 13;
const iconStroke = 1.5;

export default function SkillImpact({ className, skill, Icon, impact }) {
  return (
    <div className={cn("flex flex-col gap-1 mb-2", className)}>
      <div className="flex gap-1 items-center">
        <Icon size={iconSize} strokeWidth={iconStroke} />
        <p className="text-xs">{skill}</p>
        <p className="text-xs ml-auto">{impact}</p>
      </div>
      <div className=" h-1 bg-accent/10 rounded-full">
        <div
          className="h-1 bg-accent2 rounded-full"
          style={{ width: impact }}
        ></div>
      </div>
    </div>
  );
}
