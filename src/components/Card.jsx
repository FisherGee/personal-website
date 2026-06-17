import { cn } from "../lib/utils";

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "bg-white/4 text-text backdrop-blur-md border-card-border rounded-xl overflow-hidden shadow-glow p-6 hover:border-1 border-accent2/50 hover:scale-105 active:border-accent2/50 active:scale-105 transition-transform duration-400",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
