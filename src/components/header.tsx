import ThemeButton from "@/components/theme-button";
import Link from "next/link";

const linkClassName =
  "mb-5 text-lg underline underline-offset-[2.5px] decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:decoration-neutral-600 dark:hover:decoration-neutral-300 dark:hover:text-neutral-200 transition-colors";

const Header = () => {
  return (
    <header className="flex justify-between items-baseline dark:text-neutral-400 text-neutral-600">
      <ThemeButton />
      <nav className="flex gap-4">
        <Link
          href={"https://github.com/gaganbiswas"}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          GitHub
        </Link>
        <Link
          href={"mailto:gaganbiswas.me1@gmail.com"}
          className={linkClassName}
        >
          Say hi
        </Link>
      </nav>
    </header>
  );
};

export default Header;
