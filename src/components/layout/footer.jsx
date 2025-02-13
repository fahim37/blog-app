"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", { email, firstName });
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-teal-300 text-sm font-semibold mb-4">
              NEWSLETTER
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white text-slate-900 w-full"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-slate-900 w-full"
              />
              <Button
                type="submit"
                className="w-full bg-teal-300 hover:bg-teal-400 text-slate-900"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Disclaimer Section */}
          <div>
            <h3 className="text-teal-300 text-sm font-semibold mb-4">
              DISCLAIMER
            </h3>
            <p className="text-sm text-gray-300">
              The views, thoughts, and opinions expressed on this site belong
              solely to the author of the article, and not necessarily to the
              author's school, employer, organisation, committee or any other
              group or individual, including the members, editors or
              administrators of the site.
            </p>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-teal-300 text-sm font-semibold mb-4">
              RECENT POSTS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-300">
                  Jeremy Clarkson: Diddly Squat for the Environment?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300">
                  The Environmental Impact of War
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300">
                  Common Land in the UK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300">
                  The Paris Olympics: How Sustainable Were They?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300">
                  Why Nuclear Power Hasn't Taken Over the Energy Industry...
                  Yet.
                </a>
              </li>
            </ul>
          </div>

          {/* Meta Section */}
          <div>
            <h3 className="text-teal-300 text-sm font-semibold mb-4">META</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-300">
                  Log in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300">
                  Eton College
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="mt-12 pt-8 border-t border-slate-700">
          <ul className="flex justify-center space-x-8 mb-4">
            <li>
              <a href="#" className="hover:text-teal-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">
                ARTICLES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">
                CONTACT US
              </a>
            </li>
          </ul>
          <p className="text-center text-sm text-gray-400">
            Copyright © 2024 | The Florentina
          </p>
        </nav>
      </div>
    </footer>
  );
}
