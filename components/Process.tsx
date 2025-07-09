import React, { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    id: 1,
    title: 'Problem Definition and Business Analysis',
    content: 'At Outsource Origin, we start with defining the problem the product will solve and defining goals and objectives. We allocate a team of AI and product experts early on to identify the business needs, conduct market research, and analyze existing data.',
  },
  {
    id: 2,
    title: 'Data Collection and Preparation',
    content: "We'll help you identify and gather the right data to power your AI model. Don't have the data you need? Our team can collect it through advanced scraping techniques and make sure it is clear, properly labeled, correctly formatted, and error-free.",
  },
  {
    id: 3,
    title: 'Model Selection and Design',
    content: "Based on your unique needs, we select the right foundation models (like GPT, Claude, or Llama) and design the AI system's architecture. This includes prompt engineering and planning for seamless integration.",
  },
  {
    id: 4,
    title: 'Setting Up the Environment',
    content: 'Our team expertly sets up the development environment, handles API key creation and management, and takes care of all necessary library installations, whether in a Node.js environment or integrating other models.',
  },
  {
    id: 5,
    title: 'Iterative Development & Testing',
    content: 'We build the core AI features in rapid cycles. This iterative process involves model fine-tuning, continuous integration, and rigorous testing to ensure the solution is accurate, reliable, and performs optimally.',
  },
  {
    id: 6,
    title: 'Deployment and Optimization',
    content: 'After successful testing, we deploy the AI solution. Our commitment continues post-launch with ongoing monitoring, gathering user feedback, and further optimization to ensure the product delivers long-term value and impact.',
  },
];


const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step-id') || '1', 10);
            setActiveStep(stepId);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const currentRefs = triggerRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleStepClick = (id: number) => {
    const triggerEl = triggerRefs.current[id - 1];
    if (triggerEl) {
      window.scrollTo({
        top: triggerEl.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const activeStepData = processSteps.find(step => step.id === activeStep);

  return (
    <section className="bg-black relative" style={{ height: `${processSteps.length * 80}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col">
        <div className="pt-16 sm:pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase font-mono text-white">Our Generative AI Development Process</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We’ll guide you through every stage—from initial business analysis to successful deployment and ongoing optimization—making sure you get the most out of AI’s amazing potential.
            </p>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center relative w-full">
            <div className="max-w-xl lg:max-w-2xl w-full px-4 relative h-32">
                 {/* Tooltip */}
                <div className={`transition-opacity duration-300 w-full ${activeStepData ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-white text-black p-6 rounded-lg shadow-xl relative">
                        <h3 className="font-bold text-left text-lg">{activeStepData?.title}</h3>
                        <p className="text-sm text-gray-600 text-left mt-2">{activeStepData?.content}</p>
                    </div>
                </div>
            </div>

            {/* Stepper */}
            <div className="w-full max-w-2xl lg:max-w-4xl mx-auto px-10 sm:px-16 mt-12">
                <div className="relative">
                    {/* Dashed line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-600 -translate-y-1/2"></div>
                    
                    {/* Step buttons */}
                    <div className="relative flex items-center justify-between">
                        {processSteps.map((step) => {
                             const isActive = activeStep === step.id;
                             return (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(step.id)}
                                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 border-2 ${
                                        isActive
                                            ? 'bg-[#d17700] text-black border-[#d17700] scale-110'
                                            : 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700'
                                    }`}
                                >
                                    {step.id}
                                </button>
                             )
                        })}
                    </div>
                </div>
            </div>
        </div>
        
        <div className="pb-16 text-center">
            <a href="#" className="bg-[#d17700] text-black px-8 py-4 font-semibold rounded-md hover:bg-yellow-400 transition text-lg">
              Let's talk
            </a>
        </div>
      </div>

      {/* Invisible trigger elements for scroll detection */}
      <div className="absolute top-0 left-0 w-full">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => { triggerRefs.current[index] = el; }}
            data-step-id={step.id}
            style={{ height: '80vh' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Process;
