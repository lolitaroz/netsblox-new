import React, { useState } from 'react';
import { Moon, Sun, Shield, Bot, Wifi, Chrome, ExternalLink } from 'lucide-react';


const Card = ({ children, className }) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`pt-6 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="mb-4">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold mb-4">
    {children}
  </h2>
);

export default function RoboScapeCyberSec() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                Cybersecurity Education with RoboScape
              </h1>
            </div>

            {/* Introduction */}
            <Card className="mb-8">
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  RoboScape is a collaborative, networked robotics environment that makes key ideas in computer science accessible to groups of learners in informal learning spaces and K-12 classrooms. RoboScape is built on top of NetsBlox, an open-source, networked, visual programming environment based on Snap! that is specifically designed to introduce students to distributed computation and computer networking.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  RoboScape provides a twist on the state of the art of robotics learning platforms. First, a user's program controlling the robot runs in the browser and not on the robot. There is no need to download the program to the robot and hence, development and debugging become much easier. Second, the wireless communication between a student's program and the robot can be overheard by the programs of the other students. This makes cybersecurity an immediate need that students realize and can work to address.
                </p>
              </CardContent>
            </Card>

            {/* Video Section */}
            <Card className="mb-8">
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/UtcMZVPvnUs"
                    title="Teaching Cybersecurity with Networked Robots"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Curriculum Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Overview of the Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  The curriculum does not assume any prior programming knowledge and targets high schoolers. It starts off by teaching basic programming in the NetsBlox and teaches new cybersecurity concepts, common and fundamental attacks, and ways to defend against them. At the end of each day the students put what they have learned so far to participate in robotics challenges while defending against cybersecurity attacks from their classmates.
                </p>
                <h3 className="font-semibold text-lg mb-4">Units</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">1. NetsBlox Programming:</a> Getting familiar with visual block-based programming. Learn about RPCs and message passing.
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">2. General Robotics with RoboScape:</a> Robot programming with Roboscape.
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">3. Attacks & Attack Detection:</a> Examples of attacks in real world and in Roboscape and how to detect them.
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">4. Denial of Service:</a> Dealing with an unresponsive robot under attack with a lot of illegitimate or legitimate requests.
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">5. Encryption (Plain Text Issue):</a> The problem with having no authentication and plain text communication.
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">6. Key Cracking (Brute Force Attack):</a> Weak versus strong encryption and potential problems.
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">7. Insecure Key Exchange:</a> Challenges of transmitting a shared key for encryption
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">8. Replay Attack</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Required Tools */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Required Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">The minimum requirements for running this camp:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Chrome className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-slate-600 dark:text-slate-300">
                      Computers capable of running an up-to-date chromium based browser such as Chromium or Google Chrome for students. These include but are not limited to: Chromebooks, MacBooks, laptops, and personal computers running Mac OS, Windows, or Linux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bot className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-slate-600 dark:text-slate-300">
                      RoboScape supported robots: Parallax ActivityBot 360 (
                      <a href="https://docs.google.com/document/d/1wudv0uNGX6zZxWaxV_bao0XyJYQgYNlu1Z-zYzvuRPA/edit?usp=sharing" className="text-blue-500 hover:text-blue-600">
                        Assembly Instructions
                      </a>
                      )
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wifi className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-slate-600 dark:text-slate-300">
                      A wireless access point (WiFi) with functional Internet connection or for more advanced setups a local NetsBlox server.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* References */}
            <Card>
              <CardHeader>
                <CardTitle>References</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a href="https://netsblox.org/roboscape/cybersecurity#:~:text=SIGCSE%20%2D%20ACM%202019-,link,-%22A%20visual%20programming" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      "Teaching Cybersecurity with Networked Robots", SIGCSE - ACM 2019
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sciencedirect.com/science/article/pii/S0743731518300996" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      "A visual programming environment for introducing distributed computing to secondary education", JPDC - Elsevier 2018
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  All the lesson plans and other material associated with the camp can be downloaded{" "}
                  <a href="#" className="text-blue-500 hover:text-blue-600">here</a>. Please{" "}
                  <a href="mailto:akos.ledeczi@vanderbilt.edu" className="text-blue-500 hover:text-blue-600">email us</a> to get access to camp materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}