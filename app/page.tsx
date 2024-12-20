import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-200 flex flex-col justify-center items-center overflow-hidden sm:px-10">
      <div className=" max-w-7xl w-full flex flex-col">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experiences />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <Footer />
      </div>
    </main>
  );
}
