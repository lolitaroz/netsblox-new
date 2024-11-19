import React from "react";
import { Users, Play, UserPlus, Flag } from "lucide-react";

const StepCard = ({ step, index }) => (
  <div className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl rounded-lg">
    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className={`rounded-full p-3 bg-gradient-to-br ${step.color}`}>
          <step.icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-white">
            {index + 1}. {step.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            {step.content}{" "}
            {step.link && (
              <a
                href={step.link}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                {step.linkText}
              </a>
            )}
          </p>
          {step.subContent && (
            <p className="text-slate-600 dark:text-slate-300 mt-4">
              {step.subContent}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const MultiplayerPage = () => {
  const steps = [
    {
      icon: Users,
      title: "Sign in",
      content:
        "Before playing multiplayer games, all the players need to be signed up and logged in. Detailed sign up information can be found",
      link: "https://editor.netsblox.org/docs/fundamentals/howto.html#signing-up-in",
      linkText: "here",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Play,
      title: "Find & open a game",
      content:
        "You can go through the list of our examples and user created apps on NetsBlox home page, or have a friend share his own creation with you.",
      link: "/",
      linkText: "NetsBlox home page",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: UserPlus,
      title: "Get the participants in the game room",
      content:
        "If you are the first one opening the game (owner), to invite your opponents/teammates, go to the room tab you will see an overview of the current room and available roles. Each player occupies one role. To invite players, click on a role choose invite users and search for your friend's username and press ok to ask them to join your game.",
      subContent:
        "If you are being invited to a game, make sure you have editor.netsblox.org open in your browser and that you are signed in. After you are invited, you will get a dialog asking you if you want to join the game.",
      link: "https://editor.netsblox.org",
      linkText: "editor.netsblox.org",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Flag,
      title: "Start the game",
      content:
        "Make sure all the players are in by looking at the room view, if there is someone missing go back to the third step. Now that you are all set, the main role can start the game by clicking on the green flag at the top right corner. You can maximize the stage (playground) by clicking on the icon.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-white">
              Playing Multiplayer Games
            </h1>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-12">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                NetsBlox makes it easy to create multiplayer games. After going
                through these steps, you will learn about a few different
                techniques to make games that you can play with your friends
                worldwide. Before we start with creating games, let's see how
                you can play one that is already created by our users.
              </p>

              <div className="rounded-xl overflow-hidden shadow-lg mb-8 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/h5q8M-N25uI"
                  title="How to Play Multiplayer Games on NetsBlox"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: "16 / 9" }}
                  className="border-0"
                />
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <StepCard key={index} step={step} index={index} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Pro tip:</span> To test
                  multiplayer games, you can invite yourself to play by opening
                  a new browser tab, going to the netsblox editor and invite
                  "myself" as a player.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MultiplayerPage;
