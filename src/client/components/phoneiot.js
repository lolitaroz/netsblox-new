import React from "react";
import {
  Smartphone,
  Zap,
  Activity,
  Settings,
  Gamepad2,
  MapPin,
  BookOpen,
} from "lucide-react";

export default function PhoneIOT() {
  const features = [
    {
      title: "Customizable Display",
      icon: Settings,
      description: "Create custom interfaces with buttons, joysticks, and more",
    },
    {
      title: "Easy to Set Up",
      icon: Smartphone,
      description: "Simple connection process with minimal configuration",
    },
    {
      title: "Direct Requests",
      icon: Zap,
      description: "Make explicit requests using NetsBlox RPC return values",
    },
    {
      title: "Live Data Streaming",
      icon: Activity,
      description: "Real-time sensor data and event-driven communication",
    },
  ];

  const projectLinks = [
    {
      title: "Introduction to PhoneIoT",
      description:
        "Learn the basics of PhoneIoT, including how to access sensors and create custom displays",
      icon: BookOpen,
      color: "from-pink-400 to-purple-500",
      href: "https://www.youtube.com/watch?v=oRWda9jT_c8",
    },
    {
      title: "Drop Game Project",
      description:
        "Use the accelerometer to control a sprite's movement in an exciting game!",
      icon: Gamepad2,
      color: "from-green-400 to-blue-500",
      href: "https://www.youtube.com/watch?v=iyxgsvazFq0",
    },
    {
      title: "GPS Tracker",
      description:
        "Build a live GPS tracker combining sensor data, custom controls, and NetsBlox services",
      icon: MapPin,
      color: "from-yellow-400 to-orange-500",
      href: "https://www.youtube.com/watch?v=kTtO7iuRQWI",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
              IoT Education with PhoneIoT
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
              Transform your phone into a powerful IoT device with PhoneIoT, a
              free mobile app for iOS and Android that connects your device to
              NetsBlox project and access its sensors and displays. Students can
              create things like tilting controls for a game (accelerometer),
              tracking your device's position on a map (location), or creating
              an orientation-aware system like a compass (orientation), all from
              within NetsBlox.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl group p-6 text-center rounded-lg shadow-md"
                >
                  <div className="mb-4 flex justify-center">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/Or4zIiDn0m0"
                title="PhoneIoT Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>

            <div className="prose max-w-none dark:prose-invert mb-12">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">
                Getting Started
              </h2>
              <p className="text-lg mb-6">
                After installing the app on your device and pressing "Connect"
                in the app, PhoneIoT has very little setup to getting started:
                you simply need to enter the "Device ID" from the app menu into
                your project to connect to the device from NetsBlox with the
                PhoneIoT service.
              </p>

              <div className="justify-items-center">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <img
                    src="/images/phoneIOT-photo1.jpg"
                    alt="PhoneIoT Map Interface"
                    width={300}
                    height={600}
                    className="rounded-xl shadow-lg"
                  />
                  <img
                    src="/images/phoneIOT-photo2.jpg"
                    alt="PhoneIoT Controls Interface"
                    width={300}
                    height={600}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">
                Fun Projects to Try!
              </h2>
              <p className="text-lg mb-6">
                Ready to start your IoT adventure? Check out these exciting
                projects and tutorials to get you started with PhoneIoT!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {projectLinks.map((project, index) => (
                  <a
                    key={index}
                    href={project.href}
                    className="group block no-underline"
                  >
                    <div
                      className={`bg-gradient-to-br ${project.color} text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-6 text-center rounded-lg h-80 flex flex-col justify-between`}
                    >
                      <div>
                        <div className="mb-4 flex justify-center">
                          <project.icon className="h-12 w-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                      <button className="mt-auto bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 px-4 py-2 rounded-full mx-auto">
                        Let's Go!
                      </button>
                    </div>
                  </a>
                ))}
              </div>
              <div className="justify-self-center ">
                <a href="/projects">
                  <button className="text-lg px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110">
                    Explore More Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
