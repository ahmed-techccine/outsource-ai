
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '10+', label: 'AI-based projects delivered' },
    { value: '5+ years', label: 'of experience working with GenAI models and LLMs' },
    { value: '3', label: 'In-house AI products released' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-5xl lg:text-6xl font-bold text-black font-mono">{stat.value}</p>
              <p className="mt-2 text-base text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
