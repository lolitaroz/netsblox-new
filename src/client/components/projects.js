import React, { useState } from "react";

const featuredProjects = [
  {
    title: "ThingSpeak",
    image: "/placeholder.svg?height=400&width=600",
    description: "Data visualization and analysis platform",
  },
  {
    title: "NASA",
    image: "/placeholder.svg?height=400&width=600",
    description: "Space exploration and astronomical data",
  },
  {
    title: "CastShow",
    image: "/placeholder.svg?height=400&width=600",
    description: "Interactive media presentation platform",
  },
  {
    title: "MyStarMap",
    image: "/placeholder.svg?height=400&width=600",
    description: "Interactive astronomical mapping",
  },
];

const mapProjects = [
  {
    title: "QuickQuake",
    image: "/placeholder.svg?height=400&width=600",
    description: "Real-time earthquake visualization",
  },
  {
    title: "WeatherMap",
    image: "/placeholder.svg?height=400&width=600",
    description: "Interactive weather mapping system",
  },
  {
    title: "Traffic",
    image: "/placeholder.svg?height=400&width=600",
    description: "Real-time traffic monitoring",
  },
  {
    title: "COVID19Daily",
    image: "/placeholder.svg?height=400&width=600",
    description: "COVID-19 case tracking and visualization",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-white">
            Projects
          </h1>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Our projects offer collaborative editing in a cloud-based
              environment, allowing novice programmers to create networked
              programs like multiplayer games. NetsBlox enables real-world data
              integration, such as Google Maps, and offers data sources like the
              Open Movie Database and Sloan Digital Sky Server. Browse through
              published projects below.
            </p>
            <button className="text-lg px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110">
              Explore Projects Below!
            </button>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-white">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="p-0">
                    <div className="relative h-48 w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>
                    </div>
                    <button className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 rounded-full opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Let's Play!
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-white">
              Projects using Google Maps
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mapProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="p-0">
                    <div className="relative h-48 w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>
                    </div>
                    <button className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
