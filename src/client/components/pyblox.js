import React from "react";
import { Code, Play, BookOpen, Download } from "lucide-react";

export default function PyBloxPage() {
  const features = [
    "Create NetsBlox projects using Python",
    "Access to all NetsBlox blocks and RPCs",
    "Easy integration with other Python libraries",
    "Suitable for both beginners and advanced users",
  ];

  const benefits = [
    "Combine the power of Python with NetsBlox",
    "Automate NetsBlox project creation",
    "Perfect for data science and AI projects",
    "Expand your coding skills",
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                PyBlox
              </h1>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-8">
              <p className="text-lg text-center text-slate-600 dark:text-slate-300">
                PyBlox is a Python library that allows you to create NetsBlox
                projects programmatically.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Features</h2>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-slate-600 dark:text-slate-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="text-slate-600 dark:text-slate-300"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-12">
              <h2 className="text-xl font-bold text-center mb-4">
                PyBlox in Action
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    Python Tools for Snap
                  </h3>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/your-video-id-1"
                      title="Python Tools for Snap"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    PyBlox Teaser with Snap
                  </h3>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/your-video-id-2"
                      title="PyBlox Teaser with Snap"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Play className="h-4 w-4" />
                Try PyBlox
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BookOpen className="h-4 w-4" />
                Documentation
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
