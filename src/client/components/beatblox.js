import React from "react";
import {
  Headphones,
  Music,
  PlayCircle,
  Share2,
  Users,
  PenTool,
  Layers,
} from "lucide-react";

const IntroCard = ({ card }) => (
  <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-md">
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <card.icon className="h-6 w-6 text-blue-500" />
        <h3 className="text-lg font-bold">{card.title}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300">{card.content}</p>
    </div>
  </div>
);

const VideoDemo = ({ section }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2">
      <section.icon className="h-6 w-6 text-blue-500" />
      {section.title}
    </h3>
    <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${section.videoId}`}
        title={section.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border-0"
        style={{ aspectRatio: "16 / 9" }}
      />
    </div>
    <div className="text-center">
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
        {section.description}
      </p>
      <a href={section.projectUrl}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded">
          Open Project
        </button>
      </a>
    </div>
  </div>
);

const BeatBlox = () => {
  const introCards = [
    {
      title: "Engaging Students Through Music and Computing",
      content:
        "BeatBlox integrates music with computing to make learning more appealing, aiming to engage students who may feel excluded from computer science.",
      icon: Users,
    },
    {
      title: "Music Creation and Customization",
      content:
        "It allows students to compose music using simulated digital instruments, add special effects, and incorporate public domain tunes, making it versatile and accessible for creative expression.",
      icon: PenTool,
    },
    {
      title: "Collaboration and Integration with Other Media",
      content:
        "BeatBlox's networking feature enables students to collaborate in a digital orchestra and combine music with visualizations or sound effects for games and animations.",
      icon: Layers,
    },
  ];

  const demoSections = [
    {
      title: "Basic Music",
      icon: Music,
      videoId: "YVK3ysKePc8",
      description:
        "Introduction to BeatBlox showcasing a simple block-based musical effect.",
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=beepblox&editMode&noRun",
    },
    {
      title: "Multi-Instrument",
      icon: Headphones,
      videoId: "_-9BKaLxeQw",
      description:
        'Beethoven\'s "Ode to Joy" with multiple instruments and score visualization.',
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=code-to-joy&editMode&noRun",
    },
    {
      title: "Real-Time Graphics",
      icon: PlayCircle,
      videoId: "t6NO8M-WykQ",
      description: "Various visualizations accompanying musical compositions.",
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=circle-viz&editMode&noRun",
    },
    {
      title: "Distributed Projects",
      icon: Share2,
      videoId: "eqd-MeSWxfI",
      description:
        "A four-piece band first on a single computer and then by four individual BeatBlox users being played back synchronously.",
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=sprite-orchestra&editMode&noRun",
    },
    {
      title: "Networked Effects And Graphics",
      icon: Layers,
      videoId: "m38ea6as4s0",
      description:
        "Helicopter flyby on a single computer first, then in three separate browser tabs, and finally, using distributed audiovisual animation across three computers showing a helicopter moving both visually and acoustically between individually running programs.",
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=helicopter&editMode&noRun",
    },
    {
      title: "External Device Access",
      icon: PenTool,
      videoId: "HXxqptj6w0Q",
      description:
        "Musical compositions demonstrating ease of access to external devices, such as MIDI keyboards and mobile phones. To try maracas on your phone, you need to install the PhoneIoT mobile app from the app store and then scan the QR code as shown in the video.",
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%2C%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBetterShare%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=phoneiot-maraca&editMode&noRun",
    },
    {
      title: "Augmented Reality",
      icon: Music,
      videoId: "ymLOQZyKuWc",
      description:
        "Two hardware-free instrument implementations allowing users to experiment with playing music without requiring physical hardware or instruments using a webcam only.",
      projectUrl:
        "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FAugmentedReality%2Findex.js%22%2C%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%2C%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FHandGestures%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=theremin&editMode&noRun",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img
                  src="/images/beatblox.png"
                  alt="BeatBlox Logo"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-4xl font-bold mb-6 text-maroon dark:text-white">
                BeatBlox
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                BeatBlox is the latest extension to the{" "}
                <a href="/" className="text-blue-500 hover:text-blue-600">
                  NetsBlox
                </a>{" "}
                block-based programming environment, designed to teach
                cutting-edge computing concepts through music. NetsBlox was
                built on top of the open-source codebase of Snap! from UC
                Berkeley and was specifically designed to teach cutting edge
                computing concepts such as distributed computing, the Internet
                of Things, and cybersecurity to novices. It opens the internet
                to student projects, making computing more relevant to their
                lives and more engaging. A modular, full year, high school
                curriculum called{" "}
                <a
                  className="text-blue-500 hover:text-blue-600"
                  href="https://csfrontiers.org/"
                >
                  Computer Science Frontiers (CSF)
                </a>{" "}
                utilizes NetsBlox and is freely available to teachers to bring
                these capabilities to their classrooms. A{" "}
                <a
                  className="text-blue-500 hover:text-blue-600"
                  href="https://www.coursera.org/learn/programming-for-a-networked-world/"
                >
                  new online course
                </a>{" "}
                can help both students and teachers learn NetsBlox from the
                ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {introCards.map((card, index) => (
                <IntroCard key={index} card={card} />
              ))}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-12">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Each demo is summarized in a brief video, and a link is provided
                to open the corresponding project in BeatBlox for tinkering. For
                best compatibility, use Google Chrome on a computer. To run a
                project, click the green flag in the BeatBlox interface. For HD
                playback, set YouTube quality to 1080p.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {demoSections.map((section, index) => (
                <VideoDemo key={index} section={section} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BeatBlox;
