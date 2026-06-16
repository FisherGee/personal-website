export default function ResumeGrid({ children }) {
  return (
    <main
      className="
            grid grid-cols-12 
            gap-5 w-full
            md:w-1/2
        "
    >
      {children}
    </main>
  );
}
