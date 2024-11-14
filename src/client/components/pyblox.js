import React from 'react';
import {Code, Zap, Puzzle, Share2, Laptop } from 'lucide-react';
import { FeatureCard } from './feature_card.js';

const PyBloxPage = () => {

    const features = [
        {
            title: "Python Integration",
            icon: Code,
            description: "Use the power of Python within NetsBlox! Write Python code and seamlessly integrate it with your NetsBlox projects.",
            color: "from-blue-400 to-cyan-500"
        },
        {
            title: "Advanced Capabilities",
            icon: Zap,
            description: "Unlock advanced features and libraries in Python to create more complex and powerful projects in NetsBlox.",
            color: "from-purple-400 to-pink-500"
        },
        {
            title: "Easy to Learn",
            icon: Puzzle,
            description: "PyBlox makes it simple to transition from block-based programming to text-based Python coding, perfect for learners of all levels.",
            color: "from-green-400 to-emerald-500"
        },
        {
            title: "Collaborative Coding",
            icon: Share2,
            description: "Work on Python projects together in real-time, sharing code and ideas with classmates and friends.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            title: "Cross-Platform",
            icon: Laptop,
            description: "Use PyBlox on any device with a web browser, making it easy to code at school, home, or on the go.",
            color: "from-red-400 to-rose-500"
        }
    ];

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">

                <main className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
                            PyBlox: Unleash the Power of Python in NetsBlox!
                        </h1>

                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-12">
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                Welcome to PyBlox, the exciting new feature that brings Python programming to NetsBlox! With PyBlox, you can combine the ease of block-based programming with the power and flexibility of Python. Whether you're a beginner or an experienced coder, PyBlox opens up a world of possibilities for your projects!
                            </p>
                            <button className="w-full md:w-auto text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
                                Start Coding with PyBlox!
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg mb-12">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/your-pyblox-video-id"
                                title="Introduction to PyBlox"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="border-0"
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-white">Ready to Start Your Python Adventure?</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                Join the PyBlox community and start creating amazing projects with Python in NetsBlox today!
                            </p>
                            <button className="text-lg px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
                                Get Started with PyBlox
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PyBloxPage;