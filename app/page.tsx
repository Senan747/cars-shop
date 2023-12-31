import { CarCatalogue, Mid } from "@/components";
import { Navbar } from "@/components";
import { Footer } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Mid />
      <CarCatalogue />
      <Footer />
    </main>
  );
}
