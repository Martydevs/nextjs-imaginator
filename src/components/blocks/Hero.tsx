import Link from "next/link";
import { Image, WandSparkles } from "lucide-react";

import { AuroraBackground } from "../ui/aurora-background";
import RotatingButton from "../ui/rotating-button";

function Hero() {
  return (
    <AuroraBackground className='space-y-2'>
      <span className="w-full flex flex-col items-center justify-center gap-2">
        <Image size={100} className="mx-auto text-dark dark:text-white" />
        <h1 className="text-6xl font-extrabold text-center text-foreground">
          Imaginator
        </h1>
        <p className="text-xl text-center text-foreground">
          Libera el poder de la IA para tus contenidos.
        </p>
      </span>

      <span className="flex items-center justify-center space-x-4">
        <Link href="/#dalle-form">
          <RotatingButton>
            <p>Empezar!</p>
            <WandSparkles size={20} className="ml-2" />
          </RotatingButton>
        </Link>
      </span>
    </AuroraBackground>
  )
}

/* function Hero() {
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center gap-5"
      id="hero"
    >
      <span className="w-full flex flex-col items-center justify-center gap-2">
        <Image size={100} className="mx-auto" />
        <h1 className="text-6xl font-extrabold text-center text-foreground">
          Imaginator
        </h1>
        <p className="text-xl text-center text-foreground">
          Libera el poder de la IA para tus contenidos.
        </p>
      </span>

      <span className="flex items-center justify-center space-x-4">
        <Link href="/#dalle-form">
          <RotatingButton>
            <p>Empezar!</p>
            <WandSparkles size={20} className="ml-2" />
          </RotatingButton>
        </Link>
      </span>
    </section>
  );
} */

export default Hero;
