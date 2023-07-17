import Image from "next/image";
import EASAttest from "./components/EASAttest";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <h2 className="flex items-center justify-center gap-2">
        <Image src="/header.png" height={180} width={180} alt="header" />
        <span className="mt-2 font-bold">Completion Attestation</span>
      </h2>
      <EASAttest />
      <Image
        className="absolute bottom-0"
        src="/zombie.png"
        height={250}
        width={250}
        alt="zombie"
      />
    </main>
  );
}
