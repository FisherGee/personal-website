export default function ResumeGrid({ children }) {
  return (
    <main
      className="
            grid grid-cols-12
            gap-2 p-4 w-full
            md:w-1/2 md:p-0 md:gap-5
        "
    >
      {children}
    </main>
  );
}
