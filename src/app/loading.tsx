export default function Loading() {
  return (
    <div className="grow max-w-2xl container mx-auto">
      <div className="flex items-center justify-center w-min gap-2 p-5 font-[family-name:var(--font-roboto-mono)] text-4xl">
        <div className="animate-spin h-6 w-6 border-[2px] border-black border-t-transparent rounded-full"></div>
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
