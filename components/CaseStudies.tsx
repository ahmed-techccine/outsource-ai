
import React from 'react';

interface CaseStudy {
  title: string;
  imageUrl: string;
  bgColor: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    title: 'AI-Driven Marketplace for Art Buying and Selling',
    imageUrl: 'https://i.imgur.com/uN6XI28.png',
    bgColor: 'bg-violet-100',
  },
  {
    title: 'AI-Backed Tool for Data Transcription and User Research',
    imageUrl: 'https://i.imgur.com/QkY0m7s.png',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'AI-Powered Platform for Employee Engagement and Management',
    imageUrl: 'https://i.imgur.com/HqLz3k2.png',
    bgColor: 'bg-fuchsia-100',
  },
  {
    title: 'AI Task Manager and Tracker for Slack-First Teams',
    imageUrl: 'https://i.imgur.com/uWdE9u1.png',
    bgColor: 'bg-emerald-100',
  },
];

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <div className="group">
        <div className={`rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 ${study.bgColor}`}>
            <img src={study.imageUrl} alt={study.title} className="w-full h-auto rounded-lg object-cover shadow-lg" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-black">{study.title}</h3>
    </div>
)

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black uppercase font-mono">Gen AI Projects Driving Change: Our Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {caseStudiesData.map((study, index) => (
                <CaseStudyCard key={index} study={study} />
            ))}
        </div>
        <div className="text-center mt-16">
            <a href="#" className="bg-yellow-300 text-black px-8 py-3 font-semibold rounded-md border border-black hover:bg-yellow-400 transition text-lg">
                View all
            </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
