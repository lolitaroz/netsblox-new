import React from "react";
import { Bot, Shield, Cpu, Car, ExternalLink } from "lucide-react";

export default function RoboScapeCurriculum() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                RoboScape Curriculum
              </h1>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-8 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5" />
                <h2 className="text-xl font-bold text-blue-600 dark:text-white">
                  Cybersecurity Focus
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                The main curriculum for RoboScape focuses on using RoboScape's
                unique distributed design to make cybersecurity concepts
                accessible to middle and high school age students. Participants
                will learn about encryption, denial of service attacks, brute
                force attacks, sequence numbers, and more, in a fun setting
                where they are able to apply what they learn in hands-on
                activities including competitions where they can see how well
                their cyber attacks and defenses hold up.
              </p>
              <a
                href="/roboscape/curriculum/cybersecurity"
                className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Click here for more information about the Cybersecurity
                curriculum
              </a>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-8 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-5 w-5" />
                <h2 className="text-xl font-bold text-blue-600 dark:text-white">
                  Autonomous Robotics
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                While RoboScape inherently lends itself towards lessons in
                general robotics, the new inclusion of RoboScape Online has
                allowed for new lessons including autonomous driving and other
                sensor-based tasks. By using simulation, including these
                activities in your classroom comes at no additional cost, even
                if the real-world versions of these devices would be out of
                reach for many classrooms.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                See the ROCCEM page for more information on this initiative
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg flex items-center gap-4">
                <div className="rounded-full p-3 bg-gradient-to-br from-blue-400 to-cyan-500">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  Hands-on robotics activities with physical and virtual robots
                </div>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg flex items-center gap-4">
                <div className="rounded-full p-3 bg-gradient-to-br from-purple-400 to-pink-500">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  Learn cybersecurity through practical, engaging exercises
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
