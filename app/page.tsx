import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";
import { CardStackDemo } from "@/components/ui/CardStackDemo";

export default function Home() {
  return (
    <main className="relative bg-black-200 flex flex-col justify-center items-center overflow-hidden sm:px-10 scroll-px-5">
      <div className=" max-w-7xl w-full ">
        <FloatingNav navItems={navItems} className="" />
        <Hero />
        <CardStackDemo />
        <Grid />
        <RecentProjects />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </main>
  );
}
