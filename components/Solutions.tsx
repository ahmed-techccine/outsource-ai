
import React, { useState } from 'react';

const solutionsData = [
  {
    title: 'AI for Data Reporting and Dashboards',
    icon: '📊',
    details: [
        'Real-time data reporting',
        'Anomaly detection tools',
        'Data visualization',
        'Automated dashboard creation',
    ],
    isOpenDefault: true,
  },
  {
    title: 'AI for Marketing and Data Analytics',
    icon: '📈',
    details: [
      'Target audience determination and segmentation',
      'Customer behavior monitoring',
      'Rephrasing, content optimization and summarization',
      'Advertising management and automation',
      'Predictive data analytics',
      'Marketing workflow automation',
    ],
    isOpenDefault: false,
  },
  {
    title: 'AI for Content Management',
    icon: '📝',
    details: [],
    isOpenDefault: false,
  },
  {
    title: 'AI for HR and Recruitment Process Enhancement',
    icon: '🙋',
    details: [],
    isOpenDefault: false,
  },
   {
    title: 'AI for Customer Support',
    icon: '🎧',
    details: [],
    isOpenDefault: false,
  },
  {
    title: 'AI for Team Collaboration',
    icon: '🍀',
    details: [],
    isOpenDefault: false,
  },
];

const AccordionItem: React.FC<{
  item: typeof solutionsData[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-black"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="flex items-center text-lg">
            <span className="mr-4 text-2xl">{item.icon}</span>
            {item.title}
          </span>
          <div className="w-6 h-6 text-xl">{isOpen ? '−' : '+'}</div>
        </button>
      </h2>
      <div className={`${isOpen ? 'block' : 'hidden'} px-5 pb-5`}>
        {item.details.length > 0 ? (
          <ul className="pl-5 text-gray-600 list-disc space-y-2 marker:text-gray-400">
            {item.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        ) : (
             <p className="text-gray-500 pl-5">Details for this section are coming soon. Stay tuned!</p>
        )}
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const defaultOpenIndex = solutionsData.findIndex(item => item.isOpenDefault);
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex !== -1 ? defaultOpenIndex : null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F7F7] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black uppercase font-mono">Generative AI Solutions: Unlock your perfect match</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              AI isn’t just hype anymore—it’s transforming how businesses operate, from customer experiences to internal processes. Explore the possibilities of generative AI and let us help propel your startup forward.
            </p>
        </div>
        <div className="mt-12 bg-white rounded-xl shadow-sm overflow-hidden">
            {solutionsData.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
        <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">These are our core focus areas—but AI can do so much more. We're always excited to tackle fresh challenges and create something amazing.</p>
             <a href="#" className="bg-[#F5FE34] text-black px-8 py-4 font-semibold rounded-md border border-black hover:bg-yellow-400 transition text-lg">
                Get a quote
            </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
