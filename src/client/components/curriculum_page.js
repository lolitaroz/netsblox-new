import React from "react";
import {
  Cpu,
  Rocket,
  GraduationCap,
  Bird,
  Sparkles,
  Users,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const FeatureColumn = ({ icon: Icon, text }) => (
  <div className="flex flex-col items-center text-center px-4">
    <Icon className="h-12 w-12 text-blue-500 mb-4" />
    <p className="text-lg text-slate-600 dark:text-slate-300">{text}</p>
  </div>
);

const CurriculumCard = ({ program }) => (
  <div className="group bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl flex flex-col rounded-2xl">
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start gap-4 mb-4">
        <div className={`rounded-full p-3 bg-gradient-to-br ${program.color}`}>
          <program.icon className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-blue-600 dark:text-white">
          {program.title}
        </h2>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
        {program.description}
      </p>
      <a href={program.href}>
        <button
          className={`text-white text-lg font-bold bg-gradient-to-r ${program.color} hover:scale-105 transition-transform duration-300 w-full rounded-2xl`}
        >
          {program.buttonText}
        </button>
      </a>
    </div>
  </div>
);

const CurriculumPage = () => {
  const curriculumPrograms = [
    {
      title: "ROCCEM",
      icon: Cpu,
      description:
        "ROCCEM provides middle school educators with accessible, focused, and engaging educational material for schools across Tennessee and beyond. Using NetsBlox, the ROCCEM curriculum introduces students to robotics, cybersecurity, and advanced computer science concepts without the text-based programming hurdle.",
      color: "from-purple-400 to-pink-500",
      href: "/roccem",
      buttonText: "Explore ROCCEM",
    },
    {
      title: "Robotics and Cybersecurity",
      icon: Rocket,
      description:
        "With RoboScape and RoboScape Online, students can write NetsBlox programs that remotely control physical or virtual robots. Learn about encryption, cipher-breaking, and hack other robots in exciting challenges!",
      color: "from-blue-400 to-cyan-500",
      href: "/roboscape",
      buttonText: "Start Robotics Adventure",
    },
    {
      title: "CS Frontiers",
      icon: GraduationCap,
      description: (
        <>
          "A Tennessee-approved, year-long high school curriculum covering
          advanced topics like
          <a href="https://csfrontiers.org/distributed-computing.html">
            distributed computing
          </a>
          ,
          <a href="https://csfrontiers.org/iot-and-cybersecurity.html">
            IoT and Cybersecurity
          </a>
          ,
          <a href="https://csfrontiers.org/ai-and-machine-learning.html">
            AI and Machine Learning
          </a>
          , and{" "}
          <a href="https://csfrontiers.org/software-engineering.html">
            software engineering
          </a>
          ."
        </>
      ),
      color: "from-yellow-400 to-orange-500",
      href: "https://csfrontiers.org/curriculum.html",
      buttonText: "Discover CS Frontiers",
    },
    {
      title: "Wildlife Conservation",
      icon: Bird,
      description:
        "Create exciting projects using real-world wildlife databases! Learn how technology can help solve conservation problems through hands-on, project-based learning.",
      color: "from-purple-400 to-pink-500",
      href: "/wildlife",
      buttonText: "Explore Wildlife Tech",
    },
    {
      title: "AI Summer Camp",
      icon: Sparkles,
      description:
        "Dive into the fascinating world of AI! Create your own AI agents, solve puzzles, and learn about everything from classical AI algorithms to the latest advances in modern AI.",
      color: "from-blue-400 to-cyan-500",
      href: "/aicamp",
      buttonText: "Join AI Adventure",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-white">
              Explore Our Fun Learning Programs!
            </h1>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x divide-blue-200 dark:divide-slate-600">
                <FeatureColumn
                  icon={Users}
                  text="For various educational levels and skillsets"
                />
                <FeatureColumn
                  icon={BookOpen}
                  text="Curated tutorials, projects, and lesson ideas"
                />
                <FeatureColumn
                  icon={Lightbulb}
                  text="Engaging and interactive education experiences"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculumPrograms.map((program, index) => (
                <CurriculumCard key={index} program={program} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CurriculumPage;
