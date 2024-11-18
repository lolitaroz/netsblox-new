import React from "react";
import {
  Bird,
  Camera,
  Map,
  Trees,
  PresentationIcon,
  ExternalLink,
  Gamepad,
} from "lucide-react";

const Button = ({ variant, size, className, children, ...props }) => (
  <button
    className={`btn ${variant === "ghost" ? "btn-ghost" : ""} ${size === "icon" ? "btn-icon" : ""} ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ className, children }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent = ({ className, children }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }) => (
  <div className={`card-header ${className}`}>{children}</div>
);

const CardTitle = ({ className, children }) => (
  <h2 className={`card-title ${className}`}>{children}</h2>
);

const CardFooter = ({ className, children }) => (
  <div className={`card-footer ${className}`}>{children}</div>
);

const ProjectCard = ({ project }) => (
  <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
          <project.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        {project.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        {project.description}
      </p>
    </CardContent>
    <CardFooter className="flex gap-2">
      {project.completedUrl && (
        <a href={project.completedUrl}>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Completed Project
          </Button>
        </a>
      )}
      {project.templateUrl && (
        <a href={project.templateUrl}>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Starter Template
          </Button>
        </a>
      )}
    </CardFooter>
  </Card>
);

const WildlifePage = () => {
  const projects = [
    {
      title: "Wildcam Camera Plotter",
      description:
        'This project has students create a program that accesses the "Wildcam" NetsBlox service in order to view random images from camera traps placed out in the wild.',
      icon: Camera,
      completedUrl: "#",
    },
    {
      title: "Movebank Animal Tracker",
      description:
        'This project uses the "Movebank" NetsBlox service to access real-world location data from animal-borne tracking collars/tags. Students take this raw location data and combine it with features from the "GoogleMaps" NetsBlox service in order to plot the animals\' paths on a map.',
      icon: Map,
      completedUrl: "#",
    },
    {
      title: "Tree of Life",
      description:
        "This project gets students to write code that searches the GBIF online taxonomical database for animals. Students use this data and write code that visually displays information and images about any animal.",
      icon: Trees,
      completedUrl: "#",
      templateUrl: "#",
    },
    {
      title: "Species Guessing Game",
      description:
        'This project has students use the "Wildcam" NetsBlox to look up images of specific species. Students then use this data to create a guessing game where players are presented two images and have to decide whether they are images of the same species or not.',
      icon: Gamepad,
      completedUrl: "#",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bird className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white">
                Wildlife Conservation
              </h1>
            </div>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-8">
              <CardContent className="p-6">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  This resource hub showcases educational projects that leverage
                  the power of NetsBlox to teach students about wildlife
                  conservation. By integrating real-world data and interactive
                  programming, these projects provide hands-on learning
                  experiences that highlight the importance of protecting our
                  planet's biodiversity. NetsBlox's unique capabilities enable
                  students to create simulations, visualizations, and networked
                  applications that illustrate key concepts in wildlife
                  conservation, from tracking animal migrations to analyzing
                  environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-white flex items-center gap-2">
                  <PresentationIcon className="h-5 w-5" />
                  Module Structure
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  This module is designed to fill five 3-hour sessions with a
                  target demographic of early high school students. Importantly,
                  no prior programming experience is required. Materials and
                  projects for each day are provided below. Note that the final
                  day is intended to cover student-chosen personal or group
                  projects.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">
                Projects
              </h2>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mt-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-white">
                  Acknowledgements
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  This curriculum was created as part of a larger project
                  sponsored by the National Science Foundation (Award #2312391)
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WildlifePage;
