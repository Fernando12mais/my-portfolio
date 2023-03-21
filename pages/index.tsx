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

  const randomStatusCode =
    statusCodes[(statusCodes.length * Math.random()) | 0];

  useEffect(() => {
    setDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

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

  const easterEggPhrase =
    language === "eng"
      ? "You can move my picture around, nice that you found this easter egg! Oh my gosh, the world is collapsing, run for your live!!!"
      : "Agora você pode mover minha for por aí, parabéns por ter encontrado esse easter egg! Meu deus, O mundo está entrando em colapso, corra por sua vida!!!";

  return (
    <div
      className={`${darkMode ? "dark" : ""} ${
        myPicture === fernandoPicture && !showRealEasterEgg ? "scale-all" : ""
      }`}
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

        <section className="max-w-7xl mx-auto">
          <h1
            className={`relative text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r  from-[#00923f] to-[#f8c300] mb-4 mt-4 xl:text-7xl ${
              language == "eng"
                ? "from-[#b22234] via-[#ffffff] to-[#1a16c8]"
                : ""
            }`}
          >
            {showRealEasterEgg ? (
              <div className="relative w-44 h-44 mx-auto xl:w-96 xl:h-96">
                <Image
                  src={`https://http.cat/${randomStatusCode}`}
                  alt="A fun image of a cat"
                  layout="fill"
                />
              </div>
            ) : (
              "Fernando Fernandes"
            )}
          </h1>

          <h2>{selectedLanguage.role}</h2>
          <p className="text-center mt-4">{selectedLanguage.description}</p>

          <h3>{selectedLanguage.about.title}</h3>
          <Draggable
            onDrag={(event) => {
              if (myPicture !== fernandoPicture) setMyPicture(fernandoPicture);
            }}
          >
            <div className="w-44 h-44 mx-auto relative">
              <Image
                src={myPicture}
                alt="Fernando`s picture "
                layout="fill"
                className="rounded-full hover:cursor-grab active:cursor-grabbing"
              />
            </div>
          </Draggable>
          {myPicture === fernandoPicture && (
            <p className="text-amber-300 xl:text-2xl text-center">
              {easterEggPhrase}
            </p>
          )}
          <ul className="mt-4 text-center">{selectedLanguage.about.content}</ul>
          <div className="text-5xl mt-4 flex justify-center gap-4">
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

          <h3>{selectedLanguage.skills.title}</h3>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <Card className="flex-1">
              <div className="flex items-center justify-between">
                <h4>Frontend</h4>{" "}
                <InterfaceIcon className="w-20 h-20 ml-auto" />
              </div>
              <ul>{selectedLanguage.skills.frontend}</ul>
            </Card>
            <Card className="flex-1">
              <div className="flex items-center justify-between">
                <h4>{selectedLanguage.skills.backend.title}</h4>
                <DatabaseIcon className="w-20 h-20 ml-auto" />
              </div>
              <ul>{selectedLanguage.skills.backend.content}</ul>
            </Card>
          </div>
        </section>

        <section>
          <h3>{selectedLanguage.projects.title}</h3>
        </section>
      </main>
    </div>
  );
}
