import ThemeButton from "@/components/theme-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full md:mt-12">
      <ThemeButton />
      <h1 className="text-2xl md:text-3xl mb-1 font-medium">Gagan Biswas</h1>
      <p className="my-5 text-lg">
        I&apos;m a{" "}
        <span className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors">
          developer and researcher
        </span>
        . I&apos;ve been coding for 5 years and just started my research
        journey.
      </p>
      <p className="my-5 text-lg">
        My work sits at the intersection of technology and human emotion, where
        I explore how machines interpret and express emotional states and
        ethically interact with people.
      </p>
      <p className="my-5 text-lg">My research interests includes:</p>
      <ul className="list-disc list-inside my-5 space-y-1 text-lg indent-2">
        <li>Emotional Intelligence</li>
        <li>Ethical Considerations in Emotion AI</li>
        <li>Sentiment Analysis</li>
      </ul>
      <p className="my-5 text-lg">
        You can find more about my{" "}
        <Link
          className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
          href={"/work"}
        >
          research work
        </Link>{" "}
        or{" "}
        <Link
          className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
          href={"https://github.com/gaganbiswas"}
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </Link>
        , or{" "}
        <Link
          className="underline underline-offset-2 decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
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
