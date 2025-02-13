import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      'In 2019 Jeremy Clarkson bashed Greta Thunberg for "killing the car show" and calling her an "idiot"!. However, many argue that his...',
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "jeremy-clarkson-environment",
  },
  {
    title: "The Environmental Impact of War",
    excerpt:
      "Did you know that militaries are responsible for 5.5% of global greenhouse gas emissions?! Wars and conflicts not only have a devastating...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "environmental-impact-war",
  },
  {
    title: "Common Land in the UK",
    excerpt:
      "'Any friend of mine walks where he likes in this country, or I'll want to know the reason why.' - Mr Badger in The Wind in the...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "common-land-uk",
  },
  {
    title: "How Might Climate Change Impact the Production of Our Daily Bread?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "climate-change-bread",
  },
  {
    title: "Why Nuclear Power Hasn't Taken Over the Energy Industry... Yet.",
    excerpt:
      "Nuclear Power – the term has been overused to such an extent that it is beginning to sound like a buzzword, a hollow slogan, rather...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "nuclear-power-industry",
  },
  {
    title: "The Paris Olympics: How Sustainable Were They?",
    excerpt:
      "For many, the 2024 Olympic Games in Paris, projected to become the 'greenest ever Games', are now a distant memory. While some might...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "paris-olympics-sustainability",
  },
  {
    title: "Microplastic Mania",
    excerpt:
      "Step outside, breathe in the air, or take a sip of water, and you are likely to encounter something hidden, something...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "microplastic-mania",
  },
  {
    title: "The Secrets of the Logistics Industry",
    excerpt:
      "Almost everything that we consume on a day-to-day basis has travelled hundreds or thousands of miles across the world. Whether it be...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "logistics-industry-secrets",
  },
  {
    title: "How We Can Achieve Net Zero Through Carbon Management",
    excerpt:
      "We have come far in our efforts to reduce air pollution. Living in the present, most have taken for granted the environment we live in, and...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-PNtkF5aQyRCOm4b4OrF2jIL682jfW8.png",
    slug: "net-zero-carbon-management",
  },
];

export default function BlogGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="group relative flex h-[420px] flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Uncategorized
                </Badge>
                <h2 className="line-clamp-2 text-xl font-semibold tracking-tight text-gray-900">
                  {article.title}
                </h2>
                <p className="line-clamp-3 text-sm text-gray-600">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
