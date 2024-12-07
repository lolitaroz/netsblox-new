import React from "react";
import { Globe, BookOpen, ExternalLink, Laptop2, Lock } from "lucide-react";

export default function RoboScapeOnline() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                RoboScape Online
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-300">
                    While RoboScape robots can bring many exciting new
                    activities to your classroom, we understand that physical
                    robots are not feasible or accessible for everyone. Although
                    physical robots offer certain advantages, they also come
                    with significant costs—upfront expenses for purchasing,
                    ongoing maintenance, and the need for dedicated storage and
                    activity space. Experimenting with robots in a classroom
                    requires a significant investment, which may be out of reach
                    for many educators.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg space-y-4">
                  <div className="flex items-start gap-3">
                    <Laptop2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-slate-600 dark:text-slate-300">
                      To help get educational robotics into more classrooms, we
                      have introduced RoboScape Online, a robotics simulator
                      specifically for RoboScape robots. Simulated robots are
                      free, take up no space, and enable new experiences beyond
                      what is possible in a physical classroom.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-slate-600 dark:text-slate-300">
                      Students can now take a robot home with no risk of losing
                      school property, and they can also interact with the same
                      shared virtual space regardless of the physical distance
                      between them.
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-300">
                    RoboScape Online runs in the browser, inside the same
                    NetsBlox interface used to program robots. Not only that,
                    but all RoboScape Online scenarios are made in NetsBlox
                    itself! This adds an additional level of possible project to
                    educational robotics, allowing students to create and share
                    their own interactive environments, further enriching the
                    educational robotics experience.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/roboscapeonlinecybersec.png"
                    alt="RoboScape Online Simulator Interface"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/roboscape_transparent.png"
                    alt="Virtual Robot on Computer"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
              <p className="text-slate-600 dark:text-slate-300">
                For information on getting started with RoboScape Online, see{" "}
                <a
                  href="https://docs.google.com/presentation/d/1iaUKDoqclTCwOBEVEZ7TKQ_ihas08rta2DIUaMPWPok/edit?usp=sharing"
                  className="text-blue-500 hover:text-blue-600"
                >
                  this presentation
                </a>
                .
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-xl font-bold text-blue-600 dark:text-white">
                  RoboScape Online Publications
                </h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/documents/RoboScape_Online_VLHCC_2021.pdf"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Enabling Collaborative Distance Robotics Education for
                    Novice Programmers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.1031572/full"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Browser-based simulation for novice-friendly classroom
                    robotics
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/9ldd-Gcqv1s"
                title="SIGCSE 2022 Demo: Shared Virtual Worlds for Accessible Classroom Robotics"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
                style={{ aspectRatio: "16 / 9" }}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
