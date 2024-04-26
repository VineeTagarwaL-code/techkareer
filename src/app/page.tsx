import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Welcome } from "@/components/welcome";
import { InfiniteMovingCards } from "@/components/infinite-card";
import testimonials from "@/assets/testimonials/testimonials"
export default function Home() {
  return (
    <main className="min-h-screen relative scroll-smooth select-none">
      <Navbar/>
      <Welcome/>
      <InfiniteMovingCards
        items={testimonials}
        className="mt-0"
        direction="left"
        speed="slow"
      />
   </main>
  );
}



