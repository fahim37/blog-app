"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import HomePageHeading from "./shared/homepage-heading";
const articles = [
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-2",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-3",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-4",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-5",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-6",
  },
];

export default function ArticlesGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HomePageHeading text={"Archives"} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="relative flex h-[670px] w-full max-w-[370px] flex-col"
          >
            <Link href={`/article/${article.slug}`} className="block">
              <div className="relative h-[450px] rounded-lg overflow-hidden border-2 border-primary">
                <Badge
                  variant="secondary"
                  className="absolute right-3 top-3 z-10 rounded-[6px] bg-primary px-2 py-1 text-[11px] font-normal text-white hover:bg-primary/80"
                >
                  Uncategorized
                </Badge>
                <Image
                  src={"/assets/homepage/demo-card.jpg"}
                  alt={article.title}
                  height={450}
                  width={370}
                  className="object-cover h-full w-full transition-all hover:scale-105"
                  priority
                />
              </div>
            </Link>
            <div className="flex flex-1 flex-col pt-5">
              <Link
                href={`/article/${article.slug}`}
                className="group relative block w-fit"
              >
                <h2
                  className="mb-3 text-[24px] font-medium leading-tight text-textPrimary hover:text-primary relative
               transition-all duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:bg-[length:100%_1px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, currentColor 0%, currentColor 100%)",
                    backgroundSize: "0% 1px", // Start with no underline
                    backgroundPosition: "0 95%", // Position it close to the text
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {article.title}
                </h2>
              </Link>

              <p className="line-clamp-3 text-sm leading-snug text-textPrimary">
                {article.excerpt}
              </p>
              <div className="mt-auto pt-2">
                <Link href={`/article/${article.slug}`}>
                  <Button className="text-[16px]">Read More</Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
