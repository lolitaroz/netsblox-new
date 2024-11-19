import React from "react";
import {
  Bot,
  Wifi,
  Chrome,
  BookOpen,
  PenTool as Tool,
  ExternalLink,
} from "lucide-react";

export default function RoboScapeInfo() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bot className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                RoboScape
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  NetsBlox's robotics support is provided through RoboScape.
                  Just like your students can get a map from Google Maps or the
                  weather using NetsBlox's RPC blocks, they can also send
                  commands to a compatible robot! Currently, firmware and
                  instructions are provided for the Parallax ActivityBot 360.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  While many competing educational robotics platforms focus on
                  students writing code to run directly on a robot, we have
                  chosen a different approach. By exposing robots as just
                  another web service, students' knowledge from earlier NetsBlox
                  projects is more easily transferable, giving them both a head
                  start on learning to use the robots and helping to demonstrate
                  how programming languages are rarely limited to only one
                  domain. It also allows the robots to be used as a tool for
                  teaching concepts other than programming robots.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  With the robots as simply parts of a larger distributed
                  computing system, we can also teach lessons on cybersecurity.
                  The messages sent to and from RoboScape robots are
                  intentionally made possible to eavesdrop on in a separate
                  NetsBlox project, with robots also accepting commands from all
                  users. To protect the robots from other students, our
                  curriculum teaches encryption, rate limiting, sequence
                  numbers, and more across a series of hands-on activities and
                  competition-based learning.
                </p>
              </div>
              <div className="relative aspect-[6/3] rounded-xl overflow-hidden">
                <img
                  src="/images/roboscape_info_bot.png"
                  alt="Parallax ActivityBot 360 robots"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-8 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Tool className="h-5 w-5" />
                <h2 className="text-xl font-bold text-blue-600 dark:text-white">
                  Required Tools
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                The minimum requirements for NetsBlox robotics with RoboScape:
              </p>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <Chrome className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Computers capable of running an up-to-date Chromium-based
                    browser such as Edge or Google Chrome for students. These
                    include but are not limited to: Chromebooks, MacBooks,
                    laptops, and personal computers running macOS, Windows, or
                    Linux.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Bot className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-slate-600 dark:text-slate-300">
                    RoboScape supported robots: Parallax ActivityBot 360 (
                    <a
                      href="https://docs.google.com/document/d/1wudv0uNGX6zZxWaxV_bao0XyJYQgYNlu1Z-zYzvuRPA/edit?usp=sharing"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Assembly Instructions
                    </a>
                    )
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-slate-600 dark:text-slate-300">
                    A wireless access point (WiFi) with functional Internet
                    connection or for more advanced setups a local NetsBlox
                    server.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-xl font-bold text-blue-600 dark:text-white">
                  RoboScape Publications
                </h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/documents/cybersec_with_networked_robots.pdf"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Teaching Cybersecurity with Networked Robots
                  </a>
                </li>
                <li>
                  <a
                    href="/documents/cybersec_curriculum_robotics.pdf"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />A Hands-On Cybersecurity
                    Curriculum Using a Robotics Platform
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
