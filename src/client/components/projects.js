import React from "react";

const featuredProjects = [
  {
    title: "ThingSpeak",
    src: "https://editor.netsblox.org/?action=example&ProjectName=Thingspeak&appMode=true&embedMode=true&noRun",
    description: "Data visualization and analysis platform",
    href: "https://editor.netsblox.org/?action=example&ProjectName=Thingspeak",
  },
  {
    title: "NASA",
    src: "https://editor.netsblox.org/?action=example&ProjectName=NASA&appMode=true&embedMode=true&noRun",
    description: "Space exploration and astronomical data",
    href: "https://editor.netsblox.org/?action=example&ProjectName=NASA",
  },
  {
    title: "CastShow",
    src: "https://editor.netsblox.org/?action=example&ProjectName=CastShow&appMode=true&embedMode=true&noRun",
    description: "Interactive media presentation platform",
    href: "https://editor.netsblox.org/?action=example&ProjectName=CastShow",
  },
];

const mapProjects = [
  {
    title: "QuickQuake",
    src: "https://editor.netsblox.org/?action=example&ProjectName=QuickQuake&appMode=true&embedMode=true&noRun",
    description: "Real-time earthquake visualization",
    href: "https://editor.netsblox.org/?action=example&ProjectName=QuickQuake",
  },
  {
    title: "Traffic",
    src: "https://editor.netsblox.org/?action=example&ProjectName=Traffic&appMode=true&embedMode=true&noRun",
    description: "Real-time traffic monitoring",
    href: "https://editor.netsblox.org/?action=example&ProjectName=Traffic",
  },
  {
    title: "COVID19Daily",
    src: "https://editor.netsblox.org/?action=example&ProjectName=COVID-19Daily&appMode=true&embedMode=true&noRun",
    description: "COVID-19 case tracking and visualization",
    href: "https://editor.netsblox.org/?action=example&ProjectName=COVID-19Daily",
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
            <p className="text-lg text-slate-600 dark:text-slate-300 p-4">
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
            <div className="flex flex-wrap gap-6 justify-center rounded-lg columns-2">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg items-center bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl overflow-hidden min-w-[300px] max-w-[400px] flex-1"
                >
                  <iframe
                    src={project.src}
                    title={project.title}
                    className="w-full h-64"
                    allowFullScreen
                  ></iframe>
                  <a href={project.href}>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-white">
              Projects using Google Maps
            </h2>
            <div className="flex flex-wrap gap-6 justify-center rounded-lg  columns-2">
              {mapProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl overflow-hidden min-w-[300px] max-w-[400px] flex-1"
                >
                  <iframe
                    src={project.src}
                    title={project.title}
                    className="w-full h-64"
                    allowFullScreen
                  ></iframe>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
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
