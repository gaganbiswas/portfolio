import ThemeButton from "@/components/theme-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full md:mt-12">
      <ThemeButton />
      <h1 className="text-2xl md:text-3xl mb-1 font-medium">Gagan Biswas</h1>
      <p className="my-5 text-lg">
        I&apos;m a{" "}
        <span className="font-semibold">developer and research aspirant</span>.
        I have been working in web and mobile apps development for the past five
        years and have recently embarked on my research journey.
      </p>
      <p className="my-5 text-lg">
        My research interests are broadly in NLP and AI, with a particular focus
        on how machines can better understand and interact with people. I am
        interested in areas such as Transformers, affective computing, and
        emotion recognition in conversation, as well as how these technologies
        can be used to build more dependable and capable robotic systems.
      </p>

      <p className="my-5 text-lg">My research interests include:</p>

      <ul className="list-disc list-inside my-5 space-y-1 text-lg indent-2">
        <li>Natural Language Processing (NLP) and Transformers</li>
        <li>Affective Computing and Emotion Recognition in Conversation</li>
        <li>Dependable AI for Human-Robot Interaction (HRI)</li>
        <li>AI for Deployable Robot and Field Systems</li>
      </ul>
      <p className="my-5 text-lg">
        You can find more about my{" "}
        <Link
          className="font-medium underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
          href={"/work"}
        >
          work, research and projects
        </Link>{" "}
        or checkout my{" "}
        <Link
          className="font-medium underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
          href={"https://github.com/gaganbiswas"}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub{" "}
        </Link>
        to explore more projects, or{" "}
        <Link
          className="font-medium underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
          href={"mailto:gaganbiswas.me1@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          reach out
        </Link>{" "}
        to me.
      </p>
    </main>
  );
}
