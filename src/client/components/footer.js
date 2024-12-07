import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
              About NetsBlox
            </h3>
            <p>
              NetsBlox is a project of the Institute for Software Integrated
              Systems at Vanderbilt University.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/learn"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/learn"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/netsblox"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/netsblox"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Institute for Software Integrated Systems / Vanderbilt University / School of Engineering</p>
        </div>
      </div>
    </footer>
  );
};
