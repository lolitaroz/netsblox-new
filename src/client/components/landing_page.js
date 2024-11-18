import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code, Cloud, Users, Zap } from "lucide-react";

const taglines = [
  {
    text: "Beats and Music",
    image: "/images/beats.jpeg?height=600&width=1200",
    link: "/beatblox",
    buttonText: "BeatBlox Extension",
  },
  {
    text: "Robot Worlds",
    image: "/images/robot_world.jpeg?height=600&width=1200",
    link: "/roboscape",
    buttonText: "RoboScape Extension",
  },
  {
    text: "Phone Apps",
    image: "/images/apps.jpeg?height=600&width=1200",
    link: "/phoneiot",
    buttonText: "PhoneIoT Page",
  },
  {
    text: "Multi-Player Games",
    image: "/images/multi_player_games.jpeg?height=600&width=1200",
    link: "/multiplayer",
    buttonText: "Start Playing",
  },
  {
    text: "Together",
    image: "/images/together_background.jpeg?height=600&width=1200",
    link: "/editor",
    buttonText: "Start Creating: NetsBlox Editor",
  },
  {
    text: "with AI",
    image: "/images/AI.jpeg?height=600&width=1200",
    link: "/editor",
    buttonText: "Start Creating: NetsBlox Editor",
  },
  {
    text: "with Blocks or Text",
    image: "/images/block_based.jpeg?height=600&width=1200",
    link: "/pyblox",
    buttonText: "Get Started: PyBlox",
  },
  {
    text: "Online programs",
    image: "/images/robot_on_laptop.jpeg?height=600&width=1200",
    link: "/editor",
    buttonText: "Start Creating: NetsBlox Editor",
  },
];

export default function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const features = [
    {
      icon: Code,
      title: "Visual Programming",
      description: "Create projects with intuitive block-based coding.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Access your work from anywhere, anytime.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Work together on projects in real-time.",
    },
    {
      icon: Zap,
      title: "Powerful",
      description: "Build complex simulations and interactive applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <main className="container mx-auto px-4 py-16">
        <div className="h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${taglines[currentTagline].image})`,
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                Dream. Code. Create.
              </h1>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-4xl font-semibold text-blue-400 mb-8"
                >
                  {taglines[currentTagline].text}
                </motion.h2>
              </AnimatePresence>
              <a
                href={taglines[currentTagline].link}
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center shadow-lg transition-all duration-300"
              >
                {taglines[currentTagline].buttonText}
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <div className="rounded-xl overflow-hidden shadow-lg mb-8 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="How to Play Multiplayer Games on NetsBlox"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
              style={{ aspectRatio: "16 / 7" }}
            />
          </div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
          >
            NetsBlox is more than just a coding platform - it's an educational
            ecosystem designed to inspire and empower young minds. With our
            innovative tools and connected approach, students can create
            distributed programs, collaborate in real-time, and bring their
            ideas to life through code.
          </motion.p>
          <a href="/learn">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center shadow-lg transition-all duration-300"
            >
              Get Started <ChevronRight className="ml-2" />
            </motion.button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <feature.icon
                className={`w-12 h-12 mb-4 ${
                  hoveredFeature === index
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } transition-colors duration-300`}
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
