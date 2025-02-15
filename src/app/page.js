import ArticlesGrid from "@/components/articles-grid";
import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import PopularCarousel from "@/components/homepage/popular-carousel";
import WhoAreWe from "@/components/homepage/who-are-we";
import PopularSidebar from "@/components/popular-sidebar";
import BlogSidebar from "@/components/side/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-16">
        <Hero />
        <PopularCarousel />
        <ArticlesGrid />
        <WhoAreWe/>
      </div>  
    </div>
  );
}
