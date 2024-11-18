import React from "react";
import {
  Brain,
  Bot,
  Gamepad,
  MessageSquare,
  Book,
  Code,
  Blocks,
  FileCode,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
        <project.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-lg font-bold">{project.title}</h3>
    </div>
    <p className="text-slate-600 dark:text-slate-300 mb-4">
      {project.description}
    </p>
    <div className="flex gap-2">
      {project.starterUrl && (
        <a
          href={project.starterUrl}
          className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1"
        >
          <Code className="h-4 w-4" />
          Starter Project
        </a>
      )}
      {project.completedUrl && (
        <a
          href={project.completedUrl}
          className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1"
        >
          <FileCode className="h-4 w-4" />
          Completed Project
        </a>
      )}
    </div>
  </div>
);

const AICamp = () => {
  const projects = [
    {
      title: "Ball-Balancing Reinforcement Learning Agent",
      description:
        'In this project, we provide students a starter project that implements a reinforcement learning (RL) agent tasked with balancing a ball on a beam without letting it roll off either side. Students are challenged to come up with a "reward function" that quickly/efficiently teaches the RL agent what kinds of behaviors are good/bad in order to learn.',
      icon: Brain,
      starterUrl: "#",
      completedUrl: "#",
    },
    {
      title: "Minecraft Maze Reinforcement Learning Agent",
      description:
        "In this (more difficult) RL project, students must come up with a reward function that can teach a 2D character how to explore a maze and find diamonds. Students are encouraged to create reward functions that do not assume anything about the maze (i.e., the reward function should not include the distance to diamonds or any other information that a player should not be able to know).",
      icon: Gamepad,
      starterUrl: "#",
      completedUrl: "#",
    },
    {
      title: "Turing Test Activity",
      description:
        "In this project, students join a NetsBlox distributed chatroom and are randomly paired either with another student or with an instance of ChatGPT. Students are then put into a time- and round-based back and forth dialog and are tasked with determining whether the other person is a human or a computer.",
      icon: MessageSquare,
      starterUrl: "#",
      completedUrl: "#",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bot className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                AI Camp Curriculum
              </h1>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                This page provides resources for our NetsBlox-based AI summer
                camp curriculum. Over the course of this module, students are
                introduced to some of the earliest history of AI, a few
                "classical" AI algorithms, and finally some of the most recent
                breakthroughs in AI, such as the Large Language Models that
                power ChatGPT. However, we won't only be learning these topics:
                we'll be building many of them in NetsBlox!
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Book className="h-5 w-5" />
                <h2 className="text-xl font-bold">Materials</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Syllabus
                  </a>
                  and
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Lesson Plan
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Blocks className="h-4 w-4 text-purple-600" />
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    NetsBlox Extensions
                  </a>
                </div>
                <div>
                  Slides for{" "}
                  {[1, 2, 3, 4].map((day, i) => (
                    <span key={day}>
                      <a href="#" className="text-blue-500 hover:text-blue-600">
                        Day {day}
                      </a>
                      {i < 3 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-white">
                Projects
              </h2>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg mb-8">
              <p className="text-yellow-800 dark:text-yellow-200">
                Note: Whoever runs the server will need to have an OpenAI API
                key in order to use the OpenAI blocks provided by the extension.
                To add your key, use the puzzle-shaped Extensions menu near the
                top right of the NetsBlox editor. The API key is saved in local
                storage, so only do this on your personal computer!
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5" />
                <h2 className="text-xl font-bold">AI Topic Exploration</h2>
              </div>
              <div className="grid gap-2">
                {[
                  "But what is a neural network?",
                  "Gradient descent, how neural networks learn",
                  "What is backpropagation really doing?",
                  "Backpropagation calculus",
                  "But what is a GPT? Visual intro to transformers",
                  "Attention in transformers, visually explained",
                ].map((topic, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {topic}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5" />
                <h2 className="text-xl font-bold">AI Coding in Python</h2>
              </div>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Q-Learning in Python
              </a>
              <span className="text-sm text-slate-500 dark:text-slate-400 italic">
                (this is the algorithm we implemented for you in our RL
                projects)
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AICamp;
