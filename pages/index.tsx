import PrimaryButton from "@/components/primary-button";
import Head from "next/head";
import { AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";
import { useEffect, useState } from "react";
import FlagUsa from "@/public/icons/flag-usa";
import FlagBrazil from "@/public/icons/flag-brazil";

import fernando3d from "../public/fernando-3d.jpg";

import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import InterfaceIcon from "@/public/icons/user-interface-svgrepo-com";
import DatabaseIcon from "@/public/icons/database-icon";
import languages from "@/languages";

export default function Home() {
  const [language, setLanguage] =
    useState<keyof ReturnType<typeof languages>>("pt");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

  const selectedLanguage = languages(darkMode)[language];

  const handleSelectLanguage = (lang: typeof language) => setLanguage(lang);
  const handleDarkMode = () => {
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
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
            className={`text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r  from-[#00923f] to-[#f8c300] mb-4 mt-4 xl:text-7xl ${
              language == "eng"
                ? "from-[#b22234] via-[#ffffff] to-[#1a16c8]"
                : ""
            } `}
          >
            Fernando Fernandes
          </h1>

          <h2>{selectedLanguage.role}</h2>
          <p className="text-center mt-4">{selectedLanguage.description}</p>

          <h3>{selectedLanguage.about.title}</h3>
          <div className="relative w-44 h-44 mx-auto">
            <Image
              src={fernando3d}
              alt="Fernando`s picture in 3d"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <ul className="mt-4 text-center">{selectedLanguage.about.content}</ul>
          <div className="text-5xl mt-4 flex justify-center gap-4">
            <Link href="#">
              <AiOutlineWhatsApp color="#6edaa4" />
            </Link>
            <Link href="#">
              <AiOutlineLinkedin color="#07b0cc" />
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
