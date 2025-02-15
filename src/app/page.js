import ArticlesGrid from "@/components/articles-grid";
import Hero from "@/components/hero";
import PopularCarousel from "@/components/homepage/popular-carousel";
import WhoAreWe from "@/components/homepage/who-are-we";

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
