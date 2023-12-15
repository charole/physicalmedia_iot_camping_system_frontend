export function TextAlert({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <div className="px-4 w-full fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700">
      <div className="bg-white p-4 shadow w-full">{text}</div>
    </div>
  );
}
