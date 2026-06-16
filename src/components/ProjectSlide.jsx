import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card.jsx";

function ProjectSlide() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden w-full mx-auto rounded-xl" ref={emblaRef}>
      <div className="flex gap-3">
        <Card className="flex-none w-1/2 h-50 shadow-none hover:scale-100 border-none"></Card>
        <Card className="flex-none w-1/2 h-50 shadow-none hover:scale-100 border-none"></Card>
        <Card className="flex-none w-1/2 h-50 shadow-none hover:scale-100 border-none"></Card>
      </div>
    </div>
  );
}

export default ProjectSlide;
