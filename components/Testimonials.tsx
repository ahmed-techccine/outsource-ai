
import React, { useState } from 'react';

const trustLogos = [
    { name: 'ThoughtSpot', logo: 'https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c28d2e376abb9796bb0e86_thoughtspot-black-p-500.png' },
    { name: 'LiveArt', logo: 'https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c28d2e4494320ff7980995_liveart-black.webp' },
    { name: 'CARGGO', logo: 'https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c28d2e7c21b28b7ad3201a_carggo-black.webp' },
    { name: 'COLTECTRIUM', logo: 'https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c28d2ed0c27de672c28adc_collectrium-black-p-500.png' },
];

const testimonialsData = [
    {
        quote: "They've been LiveArt's partners since our launch, growing with us from a handful of team members to over 20 cross-functional developers.",
        name: "David Letourneau",
        title: "COO at LiveArt",
        avatar: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c233f05954deaa9920a59e_paul-n.webp",
        image: "testimonials.webp",
    },
    {
        quote: "We were excited to have a partner with strong coding skills who compiled everything according to the tech specifications.",
        name: "Kenny R. Lienhard",
        title: "CTO, Medignition Inc",
        avatar: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c233f01e8f5b26d26d36c7_kenny-n.webp",
        image: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/65c297f07aaa19be527a5bbd_kenny-n-image-grey-p-500.webp",
    },
];

const ArrowButton: React.FC<{ direction: 'left' | 'right', onClick: () => void, disabled?: boolean }> = ({ direction, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black bg-white hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
        </svg>
    </button>
);

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <section className="bg-[#F7F7F7] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-2xl font-bold text-black uppercase font-mono mb-12">These companies trust upsilon</h3>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-20">
                     {trustLogos.map(company => (
                         <img key={company.name} src={company.logo} alt={company.name} className="h-6 lg:h-8 object-contain" />
                     ))}
                </div>

                <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <p className="text-6xl font-serif text-yellow-400">“</p>
                        <blockquote className="mt-2">
                            <p className="text-2xl md:text-3xl font-medium text-black">
                                {currentTestimonial.quote}
                            </p>
                        </blockquote>
                        <div className="mt-8 flex items-center">
                            <img className="h-16 w-16 rounded-full object-cover" src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                            <div className="ml-4">
                                <p className="text-lg font-bold text-black">{currentTestimonial.name}</p>
                                <p className="text-base text-gray-500">{currentTestimonial.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 relative">
                        <div className="relative p-2 bg-white rounded-3xl -rotate-3">
                           {/* <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl rotate-6"></div> */}
                           <img src={currentTestimonial.image} alt="Testimonial visual" className="rounded-2xl w-full h-auto relative z-10" />
                        </div>
                        <div className="absolute -bottom-6 right-6 flex space-x-4">
                            <ArrowButton direction="left" onClick={handlePrev} />
                            <ArrowButton direction="right" onClick={handleNext} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
