import useEmblaCarousel from "embla-carousel-react";

function ProjectSlide() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="w-full mx-auto rounded-xl h-64" ref={emblaRef}>
      <div className="flex gap-5 h-full">
        <div className="h-full w-full overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
          <img
            src="/src/assets/reef.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
          <img
            src="/src/assets/nft.svg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;
