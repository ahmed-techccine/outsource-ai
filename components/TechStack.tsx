
import React from 'react';

const techCategories = [
    {
        title: "Foundation Models",
        techs: [
            { name: "GPT", icon: "https://i.imgur.com/R2tG0QV.png" },
            { name: "Gemini", icon: "https://i.imgur.com/3yTz9E0.png" },
            { name: "Claude", icon: "https://i.imgur.com/mOaotao.png" },
            { name: "Llama", icon: "https://i.imgur.com/LDFx0oN.png" },
            { name: "DALL-E", icon: "https://i.imgur.com/5J39TTu.png" },
            { name: "Stable Diffusion", icon: "https://i.imgur.com/0iGVz5D.png" },
            { name: "PaLM", icon: "https://i.imgur.com/dAP0GfL.png" },
            { name: "Mistral AI", icon: "https://i.imgur.com/R5YgLRO.png" },
        ]
    },
    {
        title: "AI Frameworks",
        techs: [
            { name: "LlamaIndex", icon: "https://i.imgur.com/vXYp2J5.png" },
            { name: "Langchain", icon: "https://i.imgur.com/YjDIWbA.png" },
        ]
    },
    {
        title: "ML and AI Libraries",
        techs: [
            { name: "PyTorch", icon: "https://i.imgur.com/0P6yCgC.png" },
            { name: "HuggingFace", icon: "https://i.imgur.com/uB40212.png" },
            { name: "TensorFlow", icon: "https://i.imgur.com/dZ2gQdE.png" },
            { name: "Scikit-Learn", icon: "https://i.imgur.com/5uDZX3L.png" },
            { name: "PyBrain", icon: "https://i.imgur.com/J3t5M9G.png" },
            { name: "Theano", icon: "https://i.imgur.com/Jj7Y2gG.png" },
            { name: "Keras", icon: "https://i.imgur.com/9v4M3bS.png" },
        ]
    }
]

const TechStack: React.FC = () => {
    return (
        <section className="bg-[#F7F7F7] pt-16 sm:pt-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black uppercase font-mono">Generative AI Tech Stack We Use</h2>
                </div>
                <div className="space-y-12">
                    {techCategories.map(category => (
                        <div key={category.title}>
                            <h3 className="text-lg font-semibold text-gray-500 mb-6">{category.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                                {category.techs.map(tech => (
                                    <div key={tech.name} className="flex items-center space-x-3">
                                        <img src={tech.icon} alt={tech.name} className="h-6 w-6 object-contain" />
                                        <span className="text-black font-medium">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
