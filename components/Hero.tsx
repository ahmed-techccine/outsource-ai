
import React from 'react';

const SparkleIcon: React.FC = () => (
    <svg className="w-8 h-8 text-[#F5FE34] inline-block mx-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.25L13.125 5.5625L16.5 6.125L14.25 8.625L14.8125 12.0625L12 10.5L9.1875 12.0625L9.75 8.625L7.5 6.125L10.875 5.5625L12 2.25ZM5.25 8.625L6.375 11.9375L9.75 12.5L7.5 15L8.0625 18.4375L5.25 16.875L2.4375 18.4375L3 15L0.75 12.5L4.125 11.9375L5.25 8.625ZM18.75 8.625L19.875 11.9375L23.25 12.5L21 15L21.5625 18.4375L18.75 16.875L15.9375 18.4375L16.5 15L14.25 12.5L17.625 11.9375L18.75 8.625Z" />
    </svg>
);

const BrainIcon: React.FC = () => (
    <svg className="w-12 h-12 text-[#ff8fab] inline-block mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2C5.14 2 2 5.14 2 9C2 11.05 2.89 12.91 4.31 14.23C4.12 14.82 4 15.42 4 16C4 18.21 4.9 20.21 6.35 21.5C7.94 22.82 9.88 23.5 12 23.5C13.29 23.5 14.53 23.15 15.61 22.5C17.29 23.82 19.33 24.03 21.17 23.1C22.5 22.42 22.84 20.81 22.06 19.71C22.65 18.78 23 17.67 23 16.5C23 12.92 20.08 10 16.5 10C16.5 9.14 16.35 8.31 16.08 7.55C15.5 5.27 13.5 3.5 11 3.5C10.63 3.5 10.27 3.55 9.93 3.63C9.09 2.65 8.03 2 7 2C6 2 5.09 2.53 4.4 3.39C4.94 4.54 5.86 5.5 7 6.12V7C7 8.1 7.9 9 9 9H10C10.55 9 11 8.55 11 8V7.5C11 7.22 10.78 7 10.5 7H9C8.45 7 8 6.55 8 6C8 5.62 8.24 5.29 8.59 5.11C7.88 4.43 7.03 4 6 4C5.5 4 5 4.22 4.6 4.6C3.81 5.37 3.33 6.4 3.14 7.55C2.42 8.45 2 9.61 2 10.88C2 12.63 3.06 14.1 4.58 14.79C5.39 15.93 6.63 16.78 8.08 17.15C7.5 18.28 7.82 19.67 8.78 20.44C9.53 21.05 10.56 21.13 11.39 20.62C11.96 21.2 12.72 21.59 13.55 21.78C14.73 22.77 16.42 22.92 17.89 22.11C19.26 21.36 19.78 19.79 19.17 18.47C20.1 18.17 20.88 17.47 21.36 16.56C21.75 15.75 21.84 14.86 21.65 14.03C20.73 13.94 19.86 13.56 19.21 12.91C18.42 12.11 18 11.05 18 10C18 8.95 18.42 7.89 19.21 7.09C19.86 6.44 20.73 6.06 21.65 5.97C21.84 5.14 21.75 4.25 21.36 3.44C20.88 2.53 20.1 1.83 19.17 1.53C17.7 0.72 16.01 0.87 14.83 1.86C13.91 1.05 12.56 0.5 11 0.5C10.15 0.5 9.35 0.74 8.68 1.16C8.89 1.48 9 1.83 9 2Z"/>
    </svg>
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
              <a href="#" className="bg-[#F5FE34] text-black px-8 py-4 font-semibold rounded-md hover:bg-yellow-400 transition text-lg">
                Get a quote
              </a>
            </div>
          </div>
          <div className="mt-20 lg:mt-0 relative h-full flex items-center justify-center">
            <div className="relative bg-[#F5FE34] w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-[8rem] flex items-center justify-center rotate-[-15deg] scale-90 lg:scale-100">
                <div className="absolute inset-4 border-2 border-dashed border-white/50 rounded-[7rem] animate-spin-slow"></div>
                <div className="absolute inset-12 border border-dashed border-white/50 rounded-[5rem] animate-spin-slow-reverse"></div>
                
                <span className="text-black font-mono text-6xl font-bold z-10 rotate-[15deg]">AI</span>
                
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
