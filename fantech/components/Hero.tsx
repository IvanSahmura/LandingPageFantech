function Hero() {
    return (
      <div className="relative bg-gradient-to-b from-black to-[#8B0000] mb-8 pt-28 md:pt-0">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
          <div className="mb-8 md:mb-0 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Best Gear</h1>
            <p className="text-lg md:text-xl text-white mb-2">Summer Sale Discounts</p>
            <p className="text-2xl md:text-2xl font-bold text-white mb-4">GET 40% OFF!</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  