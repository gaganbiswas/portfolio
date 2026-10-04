import Header from "@/components/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills | Gagan Biswas",
  description:
    "Languages, AI/ML, LLM tooling, web, mobile and DevOps skills of Gagan Biswas.",
};

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "AI/ML",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "LLMs",
      "RAG",
      "GNNs",
      "RNNs",
      "prompt engineering",
      "LLM evaluation",
    ],
  },
  {
    category: "Agents and LLM tooling",
    items: [
      "LangChain",
      "Model Context Protocol (MCP)",
      "LiveKit",
      "Langfuse",
      "Rasa",
      "AI agent orchestration",
    ],
  },
  {
    category: "Frontend and mobile",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS (NativeWind)",
      "HTML",
      "CSS",
      "Figma",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Bun",
      "REST APIs",
      "WebSockets",
      "SQLite",
      "authentication",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Linux (Debian)",
      "Docker",
      "CI/CD",
      "Git",
      "GitHub",
      "Nginx",
      "Caddy",
      "VPS deployment",
    ],
  },
];

const Skills = () => {
  return (
    <main className="w-full md:mt-12">
      <Header />
      <div className="mb-1">
        <h1 className="text-2xl md:text-3xl font-medium">Skills</h1>
        <Link
          href={"/"}
          className="dark:text-neutral-400 text-neutral-600 text-lg underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:decoration-neutral-600 dark:hover:decoration-neutral-300 dark:hover:text-neutral-200 transition-colors"
        >
          Back to home
        </Link>
      </div>

      {skills.map(({ category, items }) => (
        <div key={category} className="my-5">
          <h2 className="text-xl mb-2 font-medium">{category}:</h2>
          <p className="text-lg dark:text-neutral-400 text-neutral-600">
            {items.join(", ")}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Skills;
