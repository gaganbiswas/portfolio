import Image, { type StaticImageData } from "next/image";

type FigureProps = {
  src: StaticImageData;
  alt: string;
  caption: string;
  className?: string;
};

// Diagram with its caption inside the same frame. Clicking opens the full-size image.
const Figure = ({ src, alt, caption, className = "my-8" }: FigureProps) => {
  return (
    <figure
      className={`${className} overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white`}
    >
      <a href={src.src} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} className="w-full h-auto p-3" />
      </a>
      <figcaption className="px-3 py-2 text-base text-neutral-700 bg-neutral-100 border-t border-neutral-200">
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
