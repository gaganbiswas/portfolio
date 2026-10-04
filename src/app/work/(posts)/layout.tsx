import ThemeButton from "@/components/theme-button";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full md:mt-12">
      <ThemeButton />
      {children}
    </main>
  );
}
