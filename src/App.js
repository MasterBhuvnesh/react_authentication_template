"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import icon from "./images/icon.png";

const navigation = [
  { name: "Portfolio", href: "https://masterbhuvnesh.github.io/portfolio/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bhuvneshverma/" },
  { name: "Github", href: "https://github.com/MasterBhuvnesh" },
  {
    name: "Code",
    href: "https://github.com/MasterBhuvnesh/react_authentication_template",
  },
];
const navigateToPage = (url) => {
  window.location.href = url;
};
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth0();
  return (
    <div className="bg-white font-poppins">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <span className="sr-only">Auth0 - Template</span>
            <img
              alt="Auth0 - Authentication"
              src={icon}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="h-6 w-6"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="text-sm font-semibold leading-6 text-gray-900 font-poppins">
              <LoginButton />
              <LogoutButton />
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span className="sr-only">Auth0 - Template</span>
              <img
                alt="Auth0 - Authentication"
                src={icon}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50 font-poppins"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50 font-poppins">
                    <LoginButton />
                    <LogoutButton />
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {isAuthenticated ? (
        <Profile />
      ) : (
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-poppins py-1 font">
                Quick Start Guide to Auth0 Authentication in React
              </h1>
              <p className="mt-6 text-small leading-8 text-gray-900 font-poppins">
                🚀 Simplify authentication with a free Auth0 login and Google
                sign-in! Quickly get started with the template and code on my
                GitHub. This React and Auth0 template makes integration easy. ✨
                To begin, create an Auth0 account, copy your Domain and Client
                ID, and replace mine. You're all set!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => navigateToPage("https://auth0.com/")}
                  className="font-poppins rounded-md bg-indigo-600 px-8 py-4 text-sm font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Autho
                </button>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
