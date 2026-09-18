import heroImage from "./assets/hero.jpg";

function Hero() {
  return (
    <div
      className="relative min-h-[80vh] bg-cover bg-center flex flex-col items-start justify-center px-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          NEW COLLECTION
        </h1>

        <p className="mt-4 text-lg text-white">
          Discover your style
        </p>

        <p className="mt-4 text-lg text-gray-300">
          Latest fashion for everyday life
        </p>

        <button className="bg-white text-black px-8 py-3 my-5 rounded-full font-semibold hover:bg-black hover:text-white border border-white transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;