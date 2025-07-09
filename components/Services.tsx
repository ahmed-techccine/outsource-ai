
import React from 'react';

interface ServicePhase {
  title: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
}

const phases: ServicePhase[] = [
  {
    title: 'Proof-of-Concept for the Generative AI Idea',
    description: 'An idea validation phase aimed at confirming that the project is worth implementing. This crucial step helps to identify potential challenges and opportunities early on, ensuring that resources are invested in a viable generative AI concept.',
    tags: ['Problem identification', 'In-depth business analysis', 'Research'],
    icon: <span className="text-2xl">*</span>
  },
  {
    title: 'Discovery Phase of the Generative AI Project',
    description: 'A two-week discovery phase focuses on preparing optimally for generative AI solution development. This helps turn initial ideas into a solid plan that prevents budget overruns and keeps the project on track.',
    tags: ['Feature prioritization', 'Architecture and tech stack selection', 'Project scoping', 'Wireframing and design', 'Building the AI system prototype', 'Project execution plan']
  },
  {
    title: 'MVP Development for AI Projects',
    description: 'Bringing the gen AI minimum viable product version to life, which could take around 3 months based on team composition and solution complexity. This phase focuses on developing core functionalities that demonstrate the product\'s value proposition and gather user feedback for further iterations.',
    tags: ['Training preparation', 'Data testing for AI pipelines', 'Statistical analysis', 'Solution development', 'QA testing and launch']
  },
  {
    title: 'Generative AI Solution Improvements',
    description: 'Consequent post-launch gen AI solution enhancement to refine and optimize the product based on real-world usage and feedback. This ongoing process ensures that the solution remains cutting-edge, addresses user needs effectively, and stays competitive in the rapidly evolving AI landscape.',
    tags: ['Model fine-tuning', 'AI performance improvement', 'AI pipeline time and cost optimization']
  }
];

const ServiceCard: React.FC<{ phase: ServicePhase }> = ({ phase }) => (
  <div className="bg-white rounded-2xl p-6 text-black border border-gray-200">
    <h3 className="text-xl font-bold mb-3 flex items-center">{phase.icon && <span className="mr-3 text-[#d17700] bg-black rounded-full w-8 h-8 flex items-center justify-center font-mono">{phase.icon}</span>}{phase.title}</h3>
    <p className="text-gray-600 mb-4 text-sm">{phase.description}</p>
    <div className="flex flex-wrap gap-2">
      {phase.tags.map(tag => (
        <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1 lg:sticky lg:top-28 h-fit">
              <h2 className="text-3xl md:text-4xl font-bold text-black uppercase font-mono">Generative AI Development Services We Provide</h2>
              <p className="mt-4 text-gray-500">
                Dreaming of a seamless journey from your idea to a cutting-edge AI solution, turning tech trends into tangible business benefits? Think Outsource Origin.
              </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="bg-[#d17700] p-4 sm:p-8 rounded-3xl">
              <div className="space-y-8">
                {phases.map((phase, index) => (
                  <ServiceCard key={index} phase={phase} />
                ))}
                 <div className="bg-white rounded-2xl p-6 text-black border border-gray-200 text-left relative">
                    <h3 className="text-xl font-bold mb-3 max-w-sm">We are here to turn your AI needs into breakthroughs. Just let us know what's on your mind.</h3>
                    <div className="relative mt-6 inline-block">
                      <a href="#" className="inline-block bg-[#d17700] text-black px-6 py-3 font-semibold rounded-md border border-black hover:bg-yellow-400 transition">
                          Let's talk
                      </a>
                      <div className="absolute -bottom-2 -right-24 hidden md:block">
                        <svg className="w-24 h-12 text-yellow-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 48">
                          <path d="M1.3335 46.0001C25.3335 32.0001 54.8335 15.1668 76.3335 15.5001C97.8335 15.8335 102.333 26.5001 103.333 29.5001" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round"/>
                          <path d="M96.3335 33.5001L103.333 29.5001L104.333 22.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
