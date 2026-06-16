function EdLine() {
  return (
    <div className="flex justify-start items-center gap">
      <StatusDot isFilled={true}></StatusDot>
    </div>
  );
}

function StatusDot({ isFilled }) {
  return isFilled ? (
    <div className="rounded-full h-3 w-3 bg-accent"></div>
  ) : (
    <div className="rounded-full h-2 w-2 border border-white/30"></div>
  );
}

export default EdLine;
