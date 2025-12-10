import ThemeButton from "@/components/theme-button";
import Link from "next/link";

const Work = () => {
  return (
    <main className="w-full md:mt-12">
      <ThemeButton />
      <div className="mb-1">
        <h1 className="text-2xl md:text-3xl font-medium">Work</h1>
        <Link
          href={"/"}
          className="dark:text-neutral-400 text-neutral-600 text-lg"
        >
          By Gagan Biswas
        </Link>
      </div>

      <div className="my-5">
        <h2 className="text-xl mb-2 font-medium">Research:</h2>
        <ul className="text-lg list-disc list-inside space-y-1 indent-2">
          <li className="dark:text-neutral-400 text-neutral-600">
            Emotion Aware Conversational Agents (Work in progress)
          </li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="text-xl mb-2 font-medium">Projects:</h2>
        <ul className="text-lg list-disc list-inside space-y-1 indent-2">
          <li>
            <Link
              href={"https://icons.gaganbiswas.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
            >
              Icon Library
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Work;
