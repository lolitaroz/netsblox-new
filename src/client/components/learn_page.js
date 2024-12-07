import React from "react";
import {
  HelpCircle,
  Book,
  Video,
  FileText,
  GraduationCap,
  Folder,
  Clock,
  Globe,
  BarChart2,
  MessageSquare,
  Gamepad,
  Bot,
  Smartphone,
  Shield,
  Laptop,
  Newspaper,
  BookOpen,
  Star,
  Map,
  Cloud,
  Zap,
  Users,
} from "lucide-react";

const ResourceLink = ({ link }) => {
  const Icon = link.icon || Star;
  return (
    <a
      href={link.url}
      className="text-blue-500 hover:text-blue-600 flex items-center gap-2 group"
    >
      <Icon className="h-4 w-4 text-blue-400 group-hover:text-blue-500" />
      <span className="flex-grow whitespace-normal">{link.title}</span>
      {link.isMultiplayer && (
        <span className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full flex items-center">
          <Gamepad className="h-3 w-3 mr-1" />
          Multiplayer
        </span>
      )}
      {link.duration && (
        <span className="flex-shrink-0 text-sm text-slate-500 dark:text-slate-400 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {link.duration}
        </span>
      )}
    </a>
  );
};

const ResourceCard = ({ section }) => (
  <div className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl flex flex-col rounded-2xl shadow-lg h-full">
    <div className="p-6 flex flex-col flex-grow items-center">
      <section.icon className="h-8 w-8 text-blue-600 dark:text-white mb-4" />
      <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">
        {section.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
        {section.description}
      </p>
      <ul className="space-y-2 mb-4 flex-grow">
        {section.links.map((link, index) => (
          <li key={index}>
            <ResourceLink link={link} />
          </li>
        ))}
      </ul>
      {section.buttonText && (
      <a href={section.buttonLink} className="w-full mt-auto">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-2xl transition-transform duration-300 transform hover:scale-105 mt-auto">
          {section.buttonText}
        </button>
      </a>)}
    </div>
  </div>
);

const LearnPage = () => {
  const sections = [
    {
      title: "How To's",
      icon: HelpCircle,
      description:
        "Guides and tutorials to help you understand and use NetsBlox.",
      links: [
        {
          title: "Rooms",
          url: "https://editor.netsblox.org/docs/fundamentals/concepts.html#rooms",
          icon: Users,
        },
        {
          title: "Messages",
          url: "https://editor.netsblox.org/docs/fundamentals/concepts.html#messages",
          icon: MessageSquare,
        },
        {
          title: "Services (RPCs)",
          url: "https://editor.netsblox.org/docs/fundamentals/concepts.html#services-rpcs",
          icon: Zap,
        },
        {
          title: "Managing rooms",
          url: "https://editor.netsblox.org/docs/fundamentals/howto.html#managing-rooms",
          icon: Users,
        },
        {
          title: "Sending and receiving messages",
          url: "https://editor.netsblox.org/docs/fundamentals/howto.html#sending-and-receiving-messages",
          icon: MessageSquare,
        },
        {
          title: "Using Services (RPCs)",
          url: "https://editor.netsblox.org/docs/fundamentals/howto.html#using-services-remote-procedure-calls",
          icon: Zap,
        },
        {
          title: "Access on small screen devices",
          url: "https://netsblox.org/mobile",
          icon: Smartphone,
        },
        {
          title: "Playing multiplayer games",
          url: "https://editor.netsblox.org/docs/fundamentals/howto.html#playing-multiplayer-games",
          icon: Gamepad,
        },
      ],
      buttonText: "More",
      buttonLink: "https://editor.netsblox.org/docs/fundamentals/concepts.html",
    },
    {
      title: "Documentation",
      icon: Book,
      description:
        "Check out the comprehensive documentation for NetsBlox including walkthroughs, documentation for all RPCs, custom deployment, and more!",
      links: [],
      buttonText: "Read More",
      buttonLink: "https://editor.netsblox.org/docs/",
    },
    {
      title: "Videos",
      icon: Video,
      description:
        "Check out walkthroughs and featured demos of Netsblox here.",
      links: [
        {
          title: "Introduction to NetsBlox",
          url: "https://www.youtube.com/watch?v=Iq86M0boVLg",
          duration: "5 min",
          icon: BookOpen,
        },
        {
          title: "Teaching Cybersecurity with Networked Robots",
          url: "https://www.youtube.com/watch?v=UtcMZVPvnUs",
          duration: "3 min",
          icon: Shield,
        },
        {
          title: "RoboScape Online Demo",
          url: "https://www.youtube.com/watch?v=KnCF3VJ0cHA",
          duration: "5 min",
          icon: Bot,
        },
        {
          title: "PhoneIoT Demo",
          url: "https://www.youtube.com/watch?v=CpWH_FiyXDc",
          duration: "10 min",
          icon: Smartphone,
        },
        {
          title: "Running Dog Demo",
          url: "https://www.youtube.com/watch?v=NRIUUiJMCmI",
          duration: "4 min",
          icon: Bot,
        },
        {
          title: "Eclipse Temperature Tracking",
          url: "https://www.youtube.com/watch?v=QGsJ4OjWCBU",
          duration: "5 min",
          icon: BarChart2,
        },
        {
          title: "PhoneIoT Overview",
          url: "https://www.youtube.com/watch?v=Or4zIiDn0m0",
          duration: "8 min",
          icon: Smartphone,
        },
        {
          title: "NetsBlox: Bringing the Full Power of the Internet to Snap!",
          url: "https://www.youtube.com/watch?v=CLd-OK00vgc",
          duration: "1 hr",
          icon: Globe,
        },
        {
          title: "Exploring Climate Change with Programming Projects",
          url: "https://www.youtube.com/watch?v=SN_DZANWJ0E",
          duration: "30 min",
          icon: Cloud,
        },
        {
          title: "Build Your Own Service",
          url: "https://www.youtube.com/watch?v=7LH3aeHYlSg",
          duration: "1 hr",
          icon: Zap,
        },
      ],
      buttonText: "View",
      buttonLink: "/tutorials", //TODO
    },
    {
      title: "Documents",
      icon: FileText,
      description: "Academic papers and research publications about NetsBlox.",
      links: [
        {
          title:
            "Removing the Walls Around Visual Educational Programming Environments",
          url: "/documents/removing_the_walls.pdf",
          icon: Laptop,
        },
        {
          title:
            "A Visual Programming Environment for Introducing Distributed Computing",
          url: "/documents/NetsBlox_JPDC.pdf",
          icon: Globe,
        },
        {
          title: "Enabling Collaborative Distance Robotics Education",
          url: "/documents/RoboScape_Online_VLHCC_2021.pdf",
          icon: Bot,
        },
        {
          title: "Your Phone as a Sensor: Making IoT Accessible",
          url: "/documents/PhoneIoT-your-phone-as-a-sensor.pdf",
          icon: Smartphone,
        },
        {
          title: "Teaching Cybersecurity with Networked Robots",
          url: "/documents/cybersec_with_networked_robots.pdf",
          icon: Shield,
        },
        {
          title: "Broadening Participation in Computing",
          url: "/documents/Ledeczi-ITEST-PI-Mtg.pdf",
          icon: Users,
        },
        {
          title: "CSTA19: Session",
          url: "/documents/CSTA-2019-Session.pptx",
          icon: Users,
        },
        {
          title: "CSTA19: Workshop",
          url: "/documents/CSTA-2019-Workshop.pptx",
          icon: Users,
        },

        {
          title: "Snap! Manual",
          url: "https://snap.berkeley.edu/snap/help/SnapManual.pdf",
          icon: BookOpen,
        },
        {
          title: "Flyer",
          url: "/documents/NetsBloxFlyer.pdf",
          icon: Newspaper,
        },
      ],
    },
    {
      title: "For Educators",
      icon: GraduationCap,
      description: "Find NetsBlox lesson plans here in this section.",
      links: [
        {
          title: "Map and Weather",
          url: "/documents/NetsBloxLessonMapandWeather.pdf",
          icon: Globe,
        },
        {
          title: "Intro to Plotting",
          url: "/documents/NetsBloxLessonPlotting.pdf",
          icon: BarChart2,
        },
        {
          title: "Plotting Climate Change data",
          url: "/documents/NetsBloxLessonIceCore.pdf",
          icon: Cloud,
        },
        {
          title: "Plotting COVID-19 data",
          url: "/documents/NetsBloxLessonCOVID-19.pdf",
          icon: BarChart2,
        },
        {
          title: "Movies",
          url: "/documents/NetsBloxLessonListsandMovies.pdf",
          icon: Video,
        },
        {
          title: "Texting app",
          url: "/documents/NetsBloxLessonTexting.pdf",
          icon: MessageSquare,
        },
        {
          title: "Chatroom app",
          url: "/documents/NetsBloxLessonChat.pdf",
          icon: MessageSquare,
        },
        {
          title: "Multi-player game",
          url: "/documents/NetsBloxLessonMulti-PlayerGames.pdf",
          icon: Gamepad,
          isMultiplayer: true,
        },
      ],
      buttonText: "Explore Resources",
      buttonLink: "/curriculum",
    },
    {
      title: "Sample Projects",
      icon: Folder,
      description: "Explore example projects and demos created with NetsBlox.",
      links: [
        {
          title: "Quick Quake",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=QuickQuake&#",
          icon: Zap,
        },
        {
          title: "StreetView Map",
          url: "https://editor.netsblox.org/?action=example&ProjectName=StreetViewMap",
          icon: Map,
        },
        {
          title: "Cast Show",
          url: "https://editor.netsblox.org/?action=example&ProjectName=CastShow",
          icon: Video,
        },
        {
          title: "Eclipse Viz",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=EclipseViz",
          icon: BarChart2,
        },
        {
          title: "Fly Like Crows",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=FlyLikeCrows",
          icon: Cloud,
        },
        {
          title: "Quake Histogram",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=QuakeHistogram",
          icon: BarChart2,
        },
        {
          title: "Weather",
          url: "https://editor.netsblox.org/?action=example&ProjectName=Weather&editMode=true",
          icon: Cloud,
        },
        {
          title: "Star Map",
          url: "https://editor.netsblox.org/?action=example&ProjectName=Star%20Map&editMode=true",
          icon: Star,
        },
        {
          title: "Earthquake",
          url: "https://editor.netsblox.org/?action=example&ProjectName=Earthquakes&editMode=true",
          icon: Zap,
        },
        {
          title: "Semi Pong",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=SemiPongX",
          icon: Gamepad,
          isMultiplayer: true,
        },
        {
          title: "Battleship",
          url: "https://editor.netsblox.org/?action=example&ProjectName=Battleship&editMode=true",
          icon: Gamepad,
          isMultiplayer: true,
        },
        {
          title: "Shared Whiteboard",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=SharedWhiteboardx",
          icon: Users,
          isMultiplayer: true,
        },
        {
          title: "21 Pebbles",
          url: "https://editor.netsblox.org/?action=present&Username=ledeczi&ProjectName=21%20Pebble",
          icon: Gamepad,
          isMultiplayer: true,
        },
      ],
      buttonText: "Explore Projects",
      buttonLink: "/projects",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-white">
              Learn more about NetsBlox
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <ResourceCard key={index} section={section} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearnPage;
