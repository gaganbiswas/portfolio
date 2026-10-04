import Header from "@/components/header";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full md:mt-12">
      <Header />
      {children}
    </main>
  );
}
