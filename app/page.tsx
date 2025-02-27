import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="flex flex-col justify-center place-content-center sm:px-10">
      <div className="flex flex-col gap-y-40">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experiences />
        <RecentProjects />
        <Grid />
        <AboutMe />
        <Footer />
      </div>
    </main>
  );
}
