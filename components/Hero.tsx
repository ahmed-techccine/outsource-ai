
import React from 'react';

const SparkleIcon: React.FC = () => (
    <img
        src="/star.webp"
        alt="Sparkle"
        className="w-14 h-12 inline-block mx-2 animate-pulse"
        style={{ filter: 'drop-shadow(0 0 5px #ff8fab)' }}  
      />
);

const BrainIcon: React.FC = () => (
    <img
        src="/brain.webp"
        alt="Brain"
        className="w-14 h-12 inline-block mx-2 animate-pulse"
        style={{ filter: 'drop-shadow(0 0 5px #ff8fab)' }}  
      />
);


const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute text-7xl md:text-9xl font-mono text-gray-700" style={{top: '10%', left: '15%', transform: 'rotate(-15deg)'}}>LEVEL UP</div>
            <div className="absolute text-7xl md:text-9xl font-mono text-gray-700" style={{top: '50%', left: '5%', transform: 'rotate(5deg)'}}>AI/ML</div>
            <div className="absolute text-7xl md:text-9xl font-mono text-gray-700" style={{top: '20%', right: '10%', transform: 'rotate(10deg)'}}>CODE</div>
            <div className="absolute text-7xl md:text-9xl font-mono text-gray-700" style={{bottom: '10%', right: '15%', transform: 'rotate(-10deg)'}}>GEN AI</div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-mono">
              Level up <SparkleIcon /> your startup with Generative AI <BrainIcon /> Development Services
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              Blend the magic of AI with your unique requirements and dataset to build not just a "trendy" product but a genuine market disruptor.
            </p>
            <div className="mt-10">
              <a href="#" className="bg-[#d17700] text-black px-8 py-4 font-semibold rounded-md hover:bg-yellow-400 transition text-lg">
                Get a quote
              </a>
            </div>
          </div>
          <div className="mt-20 lg:mt-0 relative h-full flex items-center justify-center">
            <div className="relative bg-[#d17700] w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-[8rem] flex items-center justify-center rotate-[-15deg] scale-90 lg:scale-100">
                <div className="absolute inset-4 border-2 border-dashed border-white/50 rounded-[7rem] animate-spin-slow"></div>
                <div className="absolute inset-12 border-2 border-dashed border-gray-500/50 rounded-[5rem] animate-spin-slow-reverse"></div>
                
                <img src='ai.png' className="w-60 text-black font-mono text-6xl font-bold z-10 rotate-[15deg] rounded-[4rem]"/>
                
                <img src="https://i.imgur.com/uQJT8h8.png" alt="Robot hand" className="absolute w-48 -top-12 -right-20 transform rotate-[40deg] z-20"/>
                <img src="https://i.imgur.com/uG5AWQo.png" alt="Human hand" className="absolute w-48 -bottom-16 -left-16 transform -rotate-[45deg] z-20 filter grayscale brightness-125"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
