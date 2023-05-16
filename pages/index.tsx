import PrimaryButton from "@/components/primary-button";
import Head from "next/head";
import { AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import FlagUsa from "@/public/icons/flag-usa";
import FlagBrazil from "@/public/icons/flag-brazil";

import fernando3d from "../public/fernando-3d.jpg";

import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import InterfaceIcon from "@/public/icons/user-interface-svgrepo-com";
import DatabaseIcon from "@/public/icons/database-icon";
import languages from "@/languages";
import fernandoPicture from "../public/foto-perfil.jpeg";
import Draggable from "react-draggable";
const showEasterEggTimer = 25 * 1000;
const statusCodes = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 401, 405, 411, 599,
];

export default function Home() {
  const [language, setLanguage] =
    useState<keyof ReturnType<typeof languages>>("pt");
  const [darkMode, setDarkMode] = useState(true);
  const [myPicture, setMyPicture] = useState(fernando3d);
  const [showRealEasterEgg, setShowRealEasterEgg] = useState(false);
  const firstRenderRef = useRef(true);

  const elements = useRef<HTMLElement[]>([]);

  const randomStatusCode = statusCodes.at(
    statusCodes.length * Math.random() || 0
  );

  useEffect(() => {
    setDarkMode(localStorage.getItem("theme") === "dark");
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-contentIn");
        } else {
          entry.target.classList.remove("animate-contentIn");
        }
      })
    );

    if (elements.current.length)
      elements.current.forEach(
        (element) => element && observer.observe(element)
      );
    () => {
      firstRenderRef.current = false;
    };
  }, []);

  console.log(elements);

  useEffect(() => {
    if (myPicture === fernandoPicture) {
      const timeout = setTimeout(() => {
        setShowRealEasterEgg(true);
      }, showEasterEggTimer);
      return () => clearTimeout(timeout);
    }
  }, [myPicture]);

  const selectedLanguage = languages(darkMode)[language];

  const handleSelectLanguage = (lang: typeof language) => setLanguage(lang);
  const handleDarkMode = () => {
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${darkMode ? "dark" : ""} 
       `}
    >
      <Head>
        <title>Fernando`s porfolio</title>
        <meta
          name="description"
          content="Hi, my name is Fernando Fernandes,I am a frontend developer who loves to contribute on building amazing websites with React, Typescript, and other frontend technologies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-slate-700 bg-slate-600 min-h-screen py-4 px-4 duration-500">
        <header>
          <nav>
            <ul className="flex gap-3 items-center">
              <li
                className={`duration-500 ${
                  language === "pt" ? "shadow-2xl shadow-cyan-500  " : ""
                }`}
              >
                <button onClick={() => handleSelectLanguage("pt")}>
                  <FlagBrazil className="w-8 lg:w-20" />
                </button>
              </li>
              <li
                className={`duration-500 ${
                  language !== "pt" ? "shadow-2xl shadow-cyan-500  " : ""
                }`}
              >
                <button onClick={() => handleSelectLanguage("eng")}>
                  <FlagUsa className="w-8 lg:w-20" />
                </button>
              </li>
              <li className="ml-auto" onClick={handleDarkMode}>
                <PrimaryButton className="bg-slate-300 text-slate-800 dark:text-slate-200">
                  {selectedLanguage.darkmode}
                </PrimaryButton>
              </li>
            </ul>
          </nav>
        </header>

        <section className="max-w-7xl mx-auto mt-16">
          <h1
            ref={(element) => {
              if (element) elements.current[0] = element;
            }}
            className={`relative text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r  from-[#00923f] to-[#f8c300] mb-4 mt-4 xl:text-7xl ${
              language == "eng"
                ? "from-[#b22234] via-[#ffffff] to-[#1a16c8]"
                : ""
            }`}
          >
            Fernando Fernandes
          </h1>

          <h2
            className="my-16"
            ref={(element) => {
              if (element) elements.current[1] = element;
            }}
          >
            {selectedLanguage.role}
          </h2>
          <p
            ref={(element) => {
              if (element) elements.current[2] = element;
            }}
            className="text-center mt-4"
          >
            {selectedLanguage.description}
          </p>

          <h3
            className="my-8"
            ref={(element) => {
              if (element) elements.current[3] = element;
            }}
          >
            {selectedLanguage.about.title}
          </h3>

          <div className="flex items-center justify-center my-4">
            <Image
              src={fernandoPicture}
              alt="Fernando`s picture "
              width={400}
              height={400}
              className="rounded-full  w-4 h-4 mx-auto"
            />
          </div>

          <ul
            ref={(element) => {
              if (element) elements.current[6] = element;
            }}
            className="mt-4 text-center"
          >
            {selectedLanguage.about.content}
          </ul>
          <div
            ref={(element) => {
              if (element) elements.current[7] = element;
            }}
            className="text-5xl mt-4 flex justify-center gap-4"
          >
            <Link
              href={`https://wa.me/5551997006226/?text=${
                language === "pt"
                  ? "Olá Fernando,Poderia me ajudar a desenvolver um projeto?"
                  : "Hi Fernando,can you help me build a project?"
              }`}
            >
              <button>
                <AiOutlineWhatsApp className="fill-[#6edaa4] hover:fill-emerald-600 active:fill-emerald-400" />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/fernando-fernandes-b692531a3/">
              <button>
                <AiOutlineLinkedin className="fill-[#07b0cc] hover:fill-cyan-600 active:fill-cyan-400" />
              </button>
            </Link>
          </div>

          <h3
            ref={(element) => {
              if (element) elements.current[8] = element;
            }}
          >
            {selectedLanguage.skills.title}
          </h3>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <Card
              ref={(element) => {
                if (element) elements.current[9] = element;
              }}
              className="flex-1"
            >
              <div className="flex items-center justify-between">
                <h4>Frontend</h4>{" "}
                <InterfaceIcon className="w-20 h-20 ml-auto" />
              </div>
              <ul>{selectedLanguage.skills.frontend}</ul>
            </Card>
            <Card
              ref={(element) => {
                if (element) elements.current[10] = element;
              }}
              className="flex-1"
            >
              <div className="flex items-center justify-between">
                <h4>{selectedLanguage.skills.backend.title}</h4>
                <DatabaseIcon className="w-20 h-20 ml-auto" />
              </div>
              <ul>{selectedLanguage.skills.backend.content}</ul>
            </Card>
          </div>
        </section>

        <section
          ref={(element) => {
            if (element) elements.current[11] = element;
          }}
        >
          <h3>{selectedLanguage.projects.title}</h3>
        </section>
      </main>
    </div>
  );
}
