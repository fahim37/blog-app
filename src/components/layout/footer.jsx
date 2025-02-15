import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2F3437] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%205-e1tOqrIiGCOBh9T5f6iiSxb6yqIqvK.png"
                  alt="The Florentina Logo"
                  className="h-12"
                />
              </div>
            </Link>
            <p className="text-gray-300 max-w-md">
              Welcome to [College Name]&apos;s Student-Run Environmental Publication, a platform created and managed by
              students passionate about protecting our planet. Our mission is to raise awareness about environmental
              issues.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-textPrimary hover:text-textPrimary-hover">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-textPrimary hover:text-textPrimary-hover">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-textPrimary hover:text-textPrimary-hover">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="texttextPrimary hover:text-textPrimary-hover">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Middle Columns */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-primary font-medium">RECENT</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-textPrimary hover:text-textPrimary-hover">
                  HOME
                </Link>
                <Link href="/articles" className="text-textPrimary hover:text-textPrimary-hover">
                  ARTICLES
                </Link>
                <Link href="/about" className="text-textPrimary hover:text-textPrimary-hover">
                  ABOUT US
                </Link>
                <Link href="/contact" className="text-textPrimary hover:text-textPrimary-hover">
                  CONTACT US
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-primary font-medium">RECENT POSTS</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-textPrimary hover:text-textPrimary-hover text-sm">
                  Jeremy Clarkson: Diddly Squat the Environment?
                </Link>
                <Link href="#" className="text-textPrimary hover:text-textPrimary-hover text-sm">
                  The Environmental Impact of Common Land in the UK
                </Link>
                <Link href="#" className="text-textPrimary hover:text-textPrimary-hover text-sm">
                  The Paris Olympics: How Sustainable Were They?
                </Link>
                <Link href="#" className="text-textPrimary hover:text-textPrimary-hover text-sm">
                  Why Nuclear Power Hasn&apos;t Taken Over the Energy Industry... Yet
                </Link>
              </nav>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-primary font-medium">NEWSLETTER</h3>
            <form className="space-y-4">
              <Input type="text" placeholder="First name" className="bg-white text-black" />
              <Input type="email" placeholder="Email" className="bg-white text-black" />
              <Button variant="custom" className="w-full bg-primary !text-textPrimary !text-bold hover:bg-primary/80">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          Copyright © 2025
        </div>
      </div>
    </footer>
  )
}

