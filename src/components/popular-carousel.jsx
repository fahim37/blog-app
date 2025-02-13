"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function PopularCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const articles = [
    {
      title: "Jeremy Clarkson: DiddlySquat for the Environment?",
      date: "November 22, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TjEyMKTAQo8z4lGdfvLAtVAWtjADjA.png",
      href: "#",
    },
    {
      title: "Jeremy Clarkson: DiddlySquat for the Environment?",
      date: "November 22, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TjEyMKTAQo8z4lGdfvLAtVAWtjADjA.png",
      href: "#",
    },
    {
      title: "Jeremy Clarkson: DiddlySquat for the Environment?",
      date: "November 22, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TjEyMKTAQo8z4lGdfvLAtVAWtjADjA.png",
      href: "#",
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {articles.map((article, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none">
                <Link
                  href={article.href}
                  className="group flex items-start gap-4 p-4 hover:opacity-80 transition-opacity"
                >
                  <div className="relative">
                    <div className="absolute -z-10 w-16 h-16 rounded-full bg-emerald-100 transform -translate-x-1 -translate-y-1" />
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt=""
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 leading-snug mb-1 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>
                </Link>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === index ? "bg-emerald-500" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
