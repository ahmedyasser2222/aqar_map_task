import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={
          "https://aqarmap.com.eg/images/home/websitecover1desktopsmall.webp"
        }
        alt="Logo"
        className="absolute top-0 left-0 w-full h-full"
        /*  height="100"
                width="100" */
        fill
      />
    </main>
  );
}
