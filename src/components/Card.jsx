import { cn } from "../lib/utils";

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "bg-white/4 text-text backdrop-blur-md border-card-border border-1 rounded-xl shadow-glow p-6 hover:border-accent hover:scale-105 transition-transform duration-400",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
