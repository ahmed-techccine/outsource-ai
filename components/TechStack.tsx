
import React from 'react';

const techCategories = [
    {
        title: "Foundation Models",
        techs: [
            { name: "GPT", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6796632a18e0637fe5cd1c5f_gpt.webp" },
            { name: "Gemini", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6796632a99fc75590fd275ef_gemini.webp" },
            { name: "Claude", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/67966356e6df2fd990b77249_claude.webp" },
            { name: "Llama", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6796635504ae36f32de76204_liama.webp" },
            { name: "DALL-E", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6796632a8928d32d23eabdcd_dalle.webp" },
            { name: "Stable Diffusion", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/67966375bc55a498899e8b3f_stable_diffusion.webp" },
            { name: "PaLM", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/67966375e6df2fd990b78a8a_palm.webp" },
            { name: "Mistral AI", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/67966375a63c92d1e99de234_mistral.webp" },
        ]
    },
    {
        title: "AI Frameworks",
        techs: [
            { name: "LlamaIndex", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/67966355ef2c9fdb4cce2aa0_liama_index.webp" },
            { name: "Langchain", icon: "https://i.imgur.com/YjDIWbA.pnghttps://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6796639e99fc75590fd3078e_langchain.webp" },
        ]
    },
    {
        title: "ML and AI Libraries",
        techs: [
            { name: "PyTorch", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63727891d4d17683bbc11982_py-torch.webp" },
            { name: "HuggingFace", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/679663d86eb392e3e54ecdc7_hugging_face.webp" },
            { name: "TensorFlow", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/637278939601cf4af694d79f_tensor-flow.webp" },
            { name: "Scikit-Learn", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/6380e58e06df40bbdb8c972c_scikit-learn.webp" },
            { name: "PyBrain", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/679663d899fc75590fd34a54_pybrain.webp" },
            { name: "Theano", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/679663d85d555f8e2fe7b5fc_theano.webp" },
            { name: "Keras", icon: "https://cdn.prod.website-files.com/633438ac0ff91a5041d3188b/63727891633738df2523a8ba_keras.webp" },
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
