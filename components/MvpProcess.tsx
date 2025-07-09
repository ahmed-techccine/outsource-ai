import React from 'react';

// Icon components for tech logos
const FigmaIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6372789152be206081bac0bc_figma.webp" alt="Figma" className="w-full h-full object-contain" />;
const PhotoshopIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63727890b27f6382b9a1cd89_adobe-photoshop.webp" alt="Photoshop" className="w-full h-full object-contain" />;
const ReactIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/637d35ca0bed669b2a390257_react.webp" alt="React" className="w-full h-full object-contain" />;
const PythonIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/637278915e54a8355b3e1d52_python.webp" alt="Python" className="w-full h-full object-contain" />;
const TSIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6449230fe4eda25b488f3b98_typescript-transparent.webp" alt="TypeScript" className="w-full h-full object-contain" />;
const AWSIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6449230f1bac8890bc96bf2f_aws-white.webp" alt="AWS" className="w-full h-full object-contain" />;
const MetabaseIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6449230f88370d221ab2a240_mixpanel-transparent.webp" alt="Metabase" className="w-full h-full object-contain" />;

// Using i tags for simple icons from FontAwesome
const SlackIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6372789176682a27a67807ae_slack.webp" alt="Figma" className="w-full h-full object-contain"/>; 
const MiroIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6372789127848f8dcf3eeabd_miro.webp" alt="Miro" className="w-full h-full object-contain"/>;
const FigmaSimpleIcon = () => <img src="https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6372789152be206081bac0bc_figma.webp" alt="Figma" className="w-full h-full object-contain" />;

const stepsData = [
  {
    title: 'PROJECT DISCOVERY',
    icons: [
      { component: <SlackIcon />, color: 'bg-indigo-900/50' },
      { component: <FigmaSimpleIcon />, color: 'bg-pink-900/50' },
      { component: <MiroIcon />, color: 'bg-yellow-900/50' },
    ],
    deliverables: [
      'Project roadmap',
      'Product specification',
      'Tech stack definition',
      'Solution architecture',
      ''
    ]
  },
  {
    title: 'DESIGN AND PROTOTYPING',
    icons: [
      { component: <PhotoshopIcon />, color: 'bg-blue-800/50 p-1' },
      { component: <FigmaIcon />, color: 'bg-purple-800/50 p-1' },
    ],
    deliverables: [
      'Wireframes & User Flows',
      'High-Fidelity UI/UX Design',
      'Interactive Prototypes',
      'Design System',
      ''
    ]
  },
  {
    title: 'MVP DEVELOPMENT',
    icons: [
      { component: <ReactIcon />, color: 'bg-sky-800/50 p-1' },
      { component: <TSIcon />, color: 'bg-blue-800/50 p-1' },
      { component: <PythonIcon />, color: 'bg-yellow-800/50 p-1' },
    ],
    deliverables: [
      'Functional MVP',
      'Backend Development',
      'API Integration',
      'QA & Testing',
      ''
    ]
  },
  {
    title: 'PRODUCT LAUNCH',
    icons: [
      { component: <AWSIcon />, color: 'bg-orange-800/50 p-1' },
      { component: <MetabaseIcon />, color: 'bg-teal-800/50 p-1' },
    ],
    deliverables: [
      'Deployment to Production',
      'Performance Monitoring',
      'Launch Support',
      'Analytics Setup',
      ''
    ]
  },
];

const solutionsList = [
  'Web applications',
  'Mobile applications',
  'SaaS applications',
  'Marketplaces',
  'Browser extensions',
  'Data visualizations',
  'Slack bots',
];

const MvpProcess: React.FC = () => {
  return (
    <section className="bg-[#1D1D1D] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase">
            PRODUCT DEVELOPMENT SERVICES TO MARKET-TEST YOUR IDEAS
          </h2>
          <p className="mt-6 max-w-3xl text-gray-400">
            Want to know if your business concept will work in the real world? Building an MVP is the way to do it. At Upsilon, we offer specialized services to help startups bring their ideas to life, test them out in the market, and conquer first clients without budget overruns.
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px -mt-6 hidden lg:block" style={{ top: 'calc(50% - 24px)' }}>
            <svg width="100%" height="2" className="hidden lg:block">
              <line x1="12.5%" y1="1" x2="87.5%" y2="1" stroke="#444" strokeWidth="2" strokeDasharray="8, 8" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {stepsData.map((step, index) => (
              <div key={index} className="relative group">
                {step.deliverables && (
                  <div className="absolute bottom-[42%] left-1 right-1 sm:w-[96%] w-[80%] mx-auto bg-white text-black p-4 rounded-t-lg shadow-2xl z-0 translate-y-2 opacity-90 rotate-[-3deg] scale-[0.98] transition-all duration-1000 ease-in-out delay-0 group-hover:bottom-full group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 group-hover:delay-[200ms]">
                    <h4 className="font-bold text-sm">Deliverables</h4>
                    <ul className="list-disc list-inside mt-2 text-xs space-y-1 text-gray-700">
                      {step.deliverables.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                )}

                {/* Main Card */}
                <div className="relative w-full max-w-xs mx-auto transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:rotate-[1deg]">
                  <div className="absolute -top-[28px] left-0 w-32 h-7 bg-[#2a2a2a] rounded-t-xl border-t border-l border-r border-gray-700/50 z-10"></div>
                  <div className="relative h-48 bg-[#2a2a2a] rounded-b-xl rounded-tr-xl border border-gray-700/50 overflow-visible z-20">
                    <div className="relative h-full flex flex-col justify-between z-30 p-4">
                      <h3 className="font-mono font-bold text-lg pt-2">{step.title}</h3>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center space-x-2">
                          {step.icons.map((icon, i) => (
                            <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-xl">
                              {icon.component}
                            </div>
                          ))}
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center font-mono text-lg">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 flex items-center justify-center space-x-4">
          <span className="text-2xl" role="img" aria-label="waving hand">👋</span>
          <p className="font-semibold text-gray-300">Get your MVP in 3 months</p>
        </div>

        <div className="border-t border-gray-800 my-20"></div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold uppercase">
              SET THE STAGE FOR SUCCESS WITH AN MVP
            </h2>
            <p className="mt-6 text-gray-400">
              Every world-famous product was once an MVP. Over the past 10 years, we've launched dozens of MVPs, more than 30 of which have turned into market-disrupting products with millions of users. Check out our solution portfolio, and let's create the next success story together.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {solutionsList.map(item => (
                <li key={item} className="text-gray-300 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:bg-[#d17700] before:rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpProcess;
