import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { CARDS, navItems, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import { CardStack } from "@/components/ui/CardStack";

export default function Home() {
  return (
    <main className="relative bg-black-200 flex flex-col justify-center items-center overflow-hidden sm:px-10">
      <div className=" max-w-7xl w-full flex flex-col">
        <FloatingNav navItems={navItems} />
        <Hero />
        <CardStack items={CARDS} />
        <Grid />
        <RecentProjects />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
