export default function InteractiveImage() {
  return (
    <div className="w-full h-[900px] z-10 pt-20 relative bg-cover bg-center" style={{ backgroundImage: `url(images/maunga-hero.jpeg)` }}>
      <h1 className="text-6xl font-bold text-center">THE MOUNTAIN</h1>

      <div className="absolute w-6 h-6 rounded-full bg-red-400 top-[20rem] left-2/3 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-6 h-6 rounded-full bg-red-400 top-[29rem] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-6 h-6 rounded-full bg-red-400 top-[27rem] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-6 h-6 rounded-full bg-red-400 top-[40rem] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}