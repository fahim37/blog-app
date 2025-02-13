"use client";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function PopularSidebar() {
  const popularArticles = [
    {
      title: "The Environmental Impact of The 2022 Qatar World Cup",
      date: "March 23, 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-2MucbEiO0lR1JtIxFq0bQ8Yv3sfhsl.png",
    },
    {
      title: "Low Carbon Travel: The Opportunity of a Sacrifice",
      date: "May 19, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-2MucbEiO0lR1JtIxFq0bQ8Yv3sfhsl.png",
    },
    {
      title: "Why do we struggle to engage with Climate Change?",
      date: "November 18, 2022",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-2MucbEiO0lR1JtIxFq0bQ8Yv3sfhsl.png",
    },
    {
      title: "How Team Pebble Won $12,500 From The Earth Prize",
      date: "May 19, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-2MucbEiO0lR1JtIxFq0bQ8Yv3sfhsl.png",
    },
    {
      title: "Ecotourism – The Future of Tourism",
      date: "May 19, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-2MucbEiO0lR1JtIxFq0bQ8Yv3sfhsl.png",
    },
  ];

  const categories = [
    "Film and Book Reviews",
    "Green routes",
    "Interviews",
    "Long Read",
    "News of the Month",
  ];
  // className="fixed inset-0 bg-[#15151d] text-white p-8 overflow-hidden"
  return (
    <div>
      <div className="max-w-md mx-auto h-full">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-sm font-medium tracking-widest">
            POPULAR THIS WEEK
          </h2>
          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80 h-8 w-8"
              onClick={() => {}}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider mt-1">
              CLOSE
            </span>
          </div>
        </div>

        <Separator className="mb-8 opacity-20" />

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-12">
            <div className="space-y-8">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-start gap-5 group hover:opacity-80 transition-opacity"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt=""
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-[#98E2C6]" />
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <h3 className="font-medium leading-tight text-[15px]">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-serif mb-8">Categories</h2>
              <nav className="space-y-0">
                {categories.map((category, index) => (
                  <div key={index}>
                    <Link
                      href="#"
                      className="block py-4 text-gray-400 hover:text-white transition-colors text-[15px]"
                    >
                      {category}
                    </Link>
                    {index < categories.length - 1 && (
                      <Separator className="opacity-10" />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
