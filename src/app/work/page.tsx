import Header from "@/components/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work | Gagan Biswas",
  description:
    "Research, projects and freelance work by Gagan Biswas, from LLM hallucination reduction and emotion-aware conversational agents to end-to-end encrypted chat.",
};

const Work = () => {
  return (
    <main className="w-full md:mt-12">
      <Header />
      <div className="mb-1">
        <h1 className="text-2xl md:text-3xl font-medium">Work</h1>
        <Link
          href={"/"}
          className="dark:text-neutral-400 text-neutral-600 text-lg underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:decoration-neutral-600 dark:hover:decoration-neutral-300 dark:hover:text-neutral-200 transition-colors"
        >
          Back to home
        </Link>
      </div>

      <div className="my-5">
        <h2 className="text-xl mb-2 font-medium">Research:</h2>
        <ul className="text-lg list-disc list-inside space-y-1 indent-2">
          <li>
            <Link
              href={"/work/llm-hallucinations"}
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              Reducing LLM Hallucinations in Medical Question-Answering
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (MSc project)
            </span>
          </li>
          <li>
            <Link
              href={"/work/emotion-aware-agent"}
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              Emotion-Aware Conversational Agent
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (MSc dissertation)
            </span>
          </li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="text-xl mb-2 font-medium">Projects:</h2>
        <ul className="text-lg list-disc list-inside space-y-1 indent-2">
          <li>
            <Link
              href={"/work/whisper"}
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              Whisper
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (end-to-end encrypted chat)
            </span>
          </li>
          <li>
            <Link
              href={"/work/struct-icons"}
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              Struct Icons
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (16x16 icon set)
            </span>
          </li>
          <li>
            <Link
              href={"/work/anglescript"}
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              AngleScript
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (online HTML, CSS and JS editor)
            </span>
          </li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="text-xl mb-2 font-medium">Freelance:</h2>
        <ul className="text-lg list-disc list-inside space-y-1 indent-2">
          <li>
            <Link
              href={"https://assentonline.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              Assent Concerns Pvt Ltd
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (e-commerce platform, internal management system and mobile apps,
              2024-2025)
            </span>
          </li>
          <li className="list-inside">
            <Link
              href={"https://srisitaramvaidicasm.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:text-neutral-50 dark:decoration-neutral-500 dark:hover:decoration-neutral-200 transition-colors"
            >
              Sri Sitaram Vaidic Adarsha Sanskrit Mahavidyalaya
            </Link>
            <span className="dark:text-neutral-400 text-neutral-600">
              {" "}
              (college website redesign and admin management system, 2023-2024)
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Work;
