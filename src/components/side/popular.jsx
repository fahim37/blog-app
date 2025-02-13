import Image from "next/image";

export default function PopularPosts() {
  const posts = [
    {
      number: 1,
      title: "The Environmental Impact of The 2022 Qatar World Cup",
      date: "March 23, 2023",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z94q1eXJqManlpjKCKxOmIWhMBCcTr.png",
    },
    {
      number: 2,
      title: "Low Carbon Travel: The Opportunity of a Sacrifice",
      date: "May 19, 2024",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z94q1eXJqManlpjKCKxOmIWhMBCcTr.png",
    },
    {
      number: 3,
      title: "Why do we struggle to engage with Climate Change?",
      date: "November 18, 2023",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z94q1eXJqManlpjKCKxOmIWhMBCcTr.png",
    },
    {
      number: 4,
      title: "How Team Bubble Won £12,500 From The Earth Prize",
      date: "May 19, 2024",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z94q1eXJqManlpjKCKxOmIWhMBCcTr.png",
    },
    {
      number: 5,
      title: "Ecotourism - The Future of Travel?",
      date: "May 19, 2024",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z94q1eXJqManlpjKCKxOmIWhMBCcTr.png",
    },
  ];

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Popular Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.number} className="flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B5D6CD] text-sm font-medium text-black">
              {post.number}
            </span>
            <div className="flex-1">
              <a href="#" className="group flex items-start gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-md">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium leading-snug text-gray-800 group-hover:text-gray-600 group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{post.date}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
