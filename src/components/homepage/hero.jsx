import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import StatsBar from "./stats-bar";

export default function Hero() {
  return (
    <div className="relative h-[900px] w-full  mt-[-64px]">
      {/* Background Image */}
      <Image
        src="/assets/homepage/hero.jpg"
        alt="Eton College buildings under a starry sky"
        fill
        priority
        className="object-cover brightness-[0.6]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,33,33,0)40%,rgba(33,33,33,1)_80%)]">
        <div className="absolute inset-x-0 bottom-0 h-50 backdrop-blur-xl bg-[#212121]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-start justify-center ">
        <div className=" text-textPrimary min-h-[600px] flex items-center px-4">
          <div className="max-w-[800px] space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary text-xl md:text-2xl font-normal">
                Eton College&apos;s student-run environmental publication
              </h2>
              <h1 className="text-[35px] md:text-[45px] font-bold leading-tight">
                Stay Informed on the{" "}
                <span className="text-primary">Environment</span>
                <br />
                <span className="text-primary">from Solutions</span> to Urgent
                Challenges
              </h1>
              <blockquote className="text-[15px] md:text-[20px] mt-6 italic">
                &quot;I&apos;m sure things are going to get worse before they
                get better.
                <br />
                But I believe they can get better.&quot;
              </blockquote>
            </div>
            <Button className="bg-primary text-textPrimary hover:bg-primary/90 text-lg px-6 py-6 h-[52px] w-[230px] rounded-[12px]">
              Read Latest Article
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="max-w-[770px] mx-auto translate-y-[150px]">
          <StatsBar />
        </div>
      </div>
    </div>
  );
}
