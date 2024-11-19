import React from "react";
import { BotIcon as Robot, Shield, Cpu, Zap } from "lucide-react";

const ModuleCard = ({ module }) => (
  <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
        <module.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <span className="text-sm text-blue-600 dark:text-blue-400">
          Module {module.number}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {module.title}
        </h3>
      </div>
    </div>
    <p className="text-slate-600 dark:text-slate-300">{module.description}</p>
  </div>
);

export default function Roccem() {
  const modules = [
    {
      number: 1,
      title: "Introduction to Distributed Programming",
      description:
        "This module introduces students to fundamental computer science concepts (e.g., variables, lists, etc.). Additionally, this module introduces distributed programming concepts, such as RPC's (Remote Procedure Calls). In this module, students learn imperative programming, APIs (RPCs), abstraction, and data and control structures. Hints of cybersecurity are provided: for instance, by introducing lists in the context of allow/deny lists.",
      icon: Cpu,
    },
    {
      number: 2,
      title: "Networking and Cybersecurity",
      description:
        "This module introduces students to networking using the message passing abstraction of NetsBlox. A chatroom and simulated peer-to-peer networking projects are used to illustrate the human-human communications challenges. This module serves as an introduction of fundamental cybersecurity concepts related to confidentiality and integrity, including encryption.",
      icon: Shield,
    },
    {
      number: 3,
      title: "Robotics and Encryption",
      description:
        "Introduction to cybersecurity concepts in the context of autonomous vehicles using RoboScape Online (RO). Students first complete straightforward driving tasks focusing on direct sensor measurements and motor actuation. We maintain the 'social' strategy of introducing key cybersecurity issues and vulnerabilities through human-human scenarios. Once the threat is clear, we apply it to students' autonomous vehicle projects, as they modify their solutions to defend their robots (while other classmates play as adversaries).",
      icon: Robot,
    },
    {
      number: 4,
      title: "Automation and Defensive Strategies",
      description:
        "Students will complete cooperative challenge activities in RO. These scenarios increase in technical complexity and address the CIA triad (confidentiality, integrity, availability). Each scenario is accompanied by a common cyber-attack strategy and it's respective defence. This module grounds students' understanding in 'social' scenarios.",
      icon: Zap,
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-white">
                ROCCEM
              </h1>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  <span className="font-semibold">"Bringing </span>
                  <span className="text-red-500 font-semibold">R</span>obotics,
                  <span className="text-blue-500 font-semibold"> C</span>
                  ybersecurity and
                  <span className="text-green-500 font-semibold"> C</span>
                  omputer Science to the
                  <span className="text-purple-500 font-semibold"> M</span>iddle
                  School classroom" (
                  <span className="text-blue-600 font-semibold">ROCCEM</span>)
                  is an educational development effort funded by the National
                  Science Foundation.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  The aim of ROCCEM is to provide middle school educators with
                  accessible, focused, and engaging educational material for
                  schools across Tennessee and beyond. Using NetsBlox, a
                  block-based programming environment, the ROCCEM curriculum
                  introduces students to robotics, cybersecurity, and advanced
                  computer science concepts without the text-based programming
                  hurdle. The work is based on a previous effort targeting high
                  school students using physical robots as described in
                  <a
                    className="text-blue-500 hover:text-blue-600"
                    href="https://dl.acm.org/doi/pdf/10.1145/3287324.3287450"
                  >
                    {" "}
                    this paper
                  </a>
                  . To avoid dependence on physical hardware, we use a 3D
                  robotic simulation environment, called RoboScape Online (RO).
                  An overview is provided in
                  <a
                    className="text-blue-500 hover:text-blue-600"
                    href="https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.1031572/full"
                  >
                    {" "}
                    this paper
                  </a>
                  . The intuitive design and public accessibility of NetsBlox
                  and RO enable educators to utilize the curriculum with
                  virtually no hurdles. The 9-week long ROCCEM curriculum is
                  divided into four modules:
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {modules.map((module) => (
                <ModuleCard key={module.number} module={module} />
              ))}
            </div>

            <div className="mt-12 text-center text-slate-600 dark:text-slate-300">
              <p className="mb-2">For more information, contact:</p>
              <p>
                Akos Ledeczi at{" "}
                <a
                  href="mailto:akos.ledeczi@vanderbilt.edu"
                  className="text-blue-500 hover:text-blue-600"
                >
                  akos.ledeczi@vanderbilt.edu
                </a>
                , or Saman Kittani at{" "}
                <a
                  href="mailto:saman.r.kittani@vanderbilt.edu"
                  className="text-blue-500 hover:text-blue-600"
                >
                  saman.r.kittani@vanderbilt.edu
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
