import ArticlesGrid from "@/components/articles-grid";
import Hero from "@/components/hero";
import PopularCarousel from "@/components/popular-carousel";
import PopularSidebar from "@/components/popular-sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-16">
        <Hero />
        <PopularCarousel />
        <PopularSidebar />
        <ArticlesGrid />
      </div>
    </div>
  );
}
