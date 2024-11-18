import React from "react";

export const FeatureCard = ({ feature }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="space-y-4">
      <div
        className={`rounded-full p-3 bg-gradient-to-br ${feature.color} w-12 h-12 flex items-center justify-center`}
      >
        <feature.icon className="h-6 w-6 text-white" />
      </div>
      <h2 className="text-xl font-bold text-blue-600 dark:text-white">
        {feature.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>
    </div>
  </div>
);
