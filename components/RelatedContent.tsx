
import React from 'react';

const relatedContentData = [
  {
    category: 'AI, Building a Startup',
    title: 'Key AI Challenges Startups Face and How to Solve Them',
    date: 'July 7, 2025',
    readTime: '10 min',
    imageUrl: 'https://i.imgur.com/1G6f4Ew.png',
  },
  {
    category: 'AI',
    title: 'How to Enhance Cybersecurity in Generative AI Solutions',
    date: 'June 20, 2025',
    readTime: '12 min',
    imageUrl: 'https://i.imgur.com/1vYqKxL.png',
  },
  {
    category: 'AI, MVP',
    title: 'How to Create an MVP with AI Tools',
    date: 'June 6, 2025',
    readTime: '10 min',
    imageUrl: 'https://i.imgur.com/K1iL4fB.png',
  },
];

const RelatedContentCard: React.FC<{ content: typeof relatedContentData[0] }> = ({ content }) => (
    <div className="group">
        <div className="overflow-hidden rounded-lg">
            <img src={content.imageUrl} alt={content.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="mt-4">
            <p className="text-sm text-gray-500 uppercase">{content.category}</p>
            <h3 className="mt-2 text-xl font-bold text-black group-hover:text-yellow-500 transition-colors">{content.title}</h3>
            <p className="mt-3 text-sm text-gray-400">{content.date} • {content.readTime}</p>
        </div>
    </div>
);


const RelatedContent: React.FC = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">Related Content</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedContentData.map((content, index) => (
                        <RelatedContentCard key={index} content={content} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedContent;
