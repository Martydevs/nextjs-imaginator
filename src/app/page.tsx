import { House } from "lucide-react";

import DalleForm from "@/components/blocks/DalleForm";
import Gallery from "@/components/blocks/Gallery";
import Hero from "@/components/blocks/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  const navItems = [
    {
      name: "Inicio",
      link: "/#hero",
      icon: <House className="w-5 h-5 text-foreground" />,
    },
  ]

  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Gallery />
      <DalleForm />
    </>
  );
}
