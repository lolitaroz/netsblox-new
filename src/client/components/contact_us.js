import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white mb-12">
              Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-600 dark:text-slate-300">
                      contact@netsblox.org
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-600 dark:text-slate-300">
                      (123) 456-7890
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-600 dark:text-slate-300">
                      123 NetsBlox St, Codeville, TX 12345
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your Name"
                      className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message here..."
                      className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
              <h2 className="text-xl font-bold mb-4">Additional Information</h2>
              <p className="text-slate-600 dark:text-slate-300">
                NetsBlox is an open-source project developed at Vanderbilt
                University. We welcome contributions, feedback, and
                collaborations from the community. If you have any questions
                about using NetsBlox, want to report a bug, or are interested in
                contributing to the project, please don't hesitate to reach out
                to us.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/NetsBlox/NetsBlox"
                  className="text-blue-600 hover:underline"
                >
                  Visit our GitHub repository
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
