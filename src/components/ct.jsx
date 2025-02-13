import Image from "next/image";
import Link from "next/link";

export default function BlogListing() {
  const articles = [
    {
      id: 1,
      title: "Jeremy Clarkson: Diddly Squat for the Environment?",
      excerpt:
        'In 2019 Jeremy Clarkson bashed Greta Thunberg for "Killing the car show" and calling her an "idiot"!. However, many argue that his...',
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-nQC78LQVLcAIfVUZtROOzWpzRc0uNb.png",
      category: "Uncategorized",
    },
    {
      id: 2,
      title: "The Environmental Impact of War",
      excerpt:
        "Did you know that militaries are responsible for 5.5% of global greenhouse gas emissions? Wars and conflicts not only have a devastating...",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-nQC78LQVLcAIfVUZtROOzWpzRc0uNb.png",
      category: "Uncategorized",
    },
    {
      id: 3,
      title: "Common Land in the UK",
      excerpt:
        "'Any friend of mine walks where he likes in this country, or I'll want to know the reason why.' - Mr Badger in The Wind in the...",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-nQC78LQVLcAIfVUZtROOzWpzRc0uNb.png",
      category: "Uncategorized",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {articles.map((article) => (
        <article key={article.id} className="group">
          <div className="grid gap-6 md:grid-cols-[240px,1fr] items-start">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src={article.image || "/placeholder.svg"}
                alt=""
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                {article.category}
              </div>
              <h2 className="text-2xl font-semibold leading-tight">
                <Link href="#" className="hover:text-muted-foreground">
                  {article.title}
                </Link>
              </h2>
              <p className="text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
              <Link
                href="#"
                className="inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                READ MORE →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
