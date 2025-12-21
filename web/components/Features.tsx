import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Zap, Lock, Layers, Code, Play, Shield } from 'lucide-react';

const FEATURE_DATA = [
    {
        title: "Zero Latency Tier 0",
        description: "Symbolic checks and regex patterns execute in microseconds. The fastest firewall is the one that doesn't think.",
        icon: <Zap className="w-6 h-6 text-aroviq-cyan" />
    },
    {
        title: "Drop-in @guard",
        description: "Protect any Python function with a single decorator. Zero configuration required to start.",
        icon: <Code className="w-6 h-6 text-aroviq-purple" />
    },
    {
        title: "Hybrid Engine",
        description: "The best of both worlds. Deterministic rules for speed, LLM judges for nuance.",
        icon: <Layers className="w-6 h-6 text-white" />
    },
    {
        title: "Fail-Closed Security",
        description: "If any verifier fails or times out, the action is blocked. Default to safety.",
        icon: <Lock className="w-6 h-6 text-gray-300" />
    },
    {
        title: "Playground UI",
        description: "Visual debugger and tracing for every verification step your agent takes.",
        icon: <Play className="w-6 h-6 text-emerald-400" />
    },
    {
        title: "Universal Compat",
        description: "Works with LangChain, AutoGen, CrewAI, and raw OpenAI API calls.",
        icon: <Shield className="w-6 h-6 text-blue-400" />
    }
];

export const Features = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURE_DATA.map((feature, i) => (
                    <FeatureCard key={i} {...feature} />
                ))}
            </div>
        </div>
    );
};

function FeatureCard({ title, description, icon }: any) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative border border-white/10 bg-black rounded-xl px-8 py-10 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    {icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
}
