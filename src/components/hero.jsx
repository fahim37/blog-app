import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-APfqI03zFSjIJ4fBROOZ9XB1iP4aJk.png"
        alt="Eton College buildings under a starry sky"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl space-y-6">
          {/* Logo */}
          <h1 className="flex items-center text-6xl font-bold text-white md:text-7xl lg:text-8xl">
            <span className="mr-2">the</span>
            <span className="relative">
              Fl
              <span className="relative">
                o{/* Globe in 'o' */}
                <span className="absolute -left-0.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-emerald-400" />
              </span>
              rentina
            </span>
            {/* Fleur-de-lis */}
            <span className="ml-2 text-teal-400">⚜</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-teal-100 md:text-xl">
            Eton College&apos;s student-run environmental publication
          </p>

          {/* Quote */}
          <blockquote className="space-y-2 border-l-4 border-teal-400 pl-4">
            <p className="text-lg font-light text-white md:text-xl">
              &quot;I&apos;m sure things are going to get worse before they get
              better.
              <br />
              But I believe they can get better.&quot;
            </p>
            <cite className="text-sm text-teal-200">
              Sir David Attenborough
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
