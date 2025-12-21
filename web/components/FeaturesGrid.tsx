import { Zap, Lock, Layers } from 'lucide-react';

export const FeaturesGrid = () => {
    const features = [
        {
            title: "Zero Latency Tier 0",
            description: "Symbolic & Regex checks execute in <1ms. Block deterministic threats instantly without LLM overhead.",
            icon: <Zap className="w-8 h-8 text-aroviq-cyan" />,
            color: "border-aroviq-cyan/20 hover:border-aroviq-cyan/50"
        },
        {
            title: "Drop-in @guard",
            description: "Add a single decorator to your Python functions. Protecting your agent takes exactly one line of code.",
            icon: <Lock className="w-8 h-8 text-aroviq-purple" />,
            color: "border-aroviq-purple/20 hover:border-aroviq-purple/50"
        },
        {
            title: "Hybrid Engine",
            description: "Seamlessly cascades from fast rules to deep semantic LLM evaluation only when necessary.",
            icon: <Layers className="w-8 h-8 text-white" />,
            color: "border-gray-700 hover:border-gray-500"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
            {features.map((feature, idx) => (
                <div key={idx} className={`p-6 bg-gray-900/50 backdrop-blur rounded-2xl border ${feature.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
                    <div className="mb-4 bg-gray-800/50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-700">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-100">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};
