import React from "react";
import { Cpu, Globe, Book } from "lucide-react";

const FeatureCard = ({ feature }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-white flex items-center justify-self-center">
        <feature.icon className="mr-2 h-6 w-6" /> {feature.title}
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
        {feature.description}
      </p>
      <div className="justify-self-center">
        <a href={feature.href}>
          <button
            className={`w-full md:w-auto text-lg px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105`}
          >
            {feature.buttonText}
          </button>
        </a>
      </div>
    </div>
  </div>
);

const RoboScapePage = () => {
  const features = [
    {
      title: "RoboScape Adventures",
      icon: Cpu,
      description:
        "Get ready for super cool robotics fun with RoboScape! It's just like your favorite NetsBlox activities, but now you can control robots and learn about cybersecurity. It's easy, exciting, and perfect for beginners!",
      buttonText: "Discover RoboScape Magic!",
      color:
        "from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400",
      href: "/roboscape/info",
    },
    {
      title: "RoboScape Online",
      icon: Globe,
      description:
        "Imagine controlling robots in a virtual world! With RoboScape Online, you can team up with friends, solve puzzles, and create amazing robot adventures – all from your computer. It's like having a robot playground right at your fingertips!",
      buttonText: "Explore Virtual Robots!",
      color:
        "from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400",
      href: "/roboscape/online",
    },
    {
      title: "RoboScape Learning Journey",
      icon: Book,
      description:
        "Ready to become a robot master? Our RoboScape curriculum is packed with fun challenges, cool projects, and awesome competitions. Learn how to make robots dance, solve mazes, and even battle each other – all while learning important coding skills!",
      buttonText: "Start Your Robot Adventure!",
      color:
        "from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400",
      href: "/roboscape/curriculum",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-white">
              RoboScape: Your Gateway to Awesome Robotics!
            </h1>

            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/UtcMZVPvnUs"
                title="Teaching Cybersecurity with Networked Robots"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoboScapePage;
