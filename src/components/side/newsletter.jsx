import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  return (
    <div className="mb-8 border border-gray-200 p-6">
      <h3 className="mb-4 text-base font-semibold uppercase tracking-wide">
        Sign-up to our free newsletter now
      </h3>
      <form className="flex flex-col space-y-3">
        <Input
          type="email"
          placeholder="YOUR EMAIL ADDRESS"
          className="h-10 placeholder:text-xs placeholder:text-gray-500"
        />
        <Button
          type="submit"
          className="bg-[#B5D6CD] text-black hover:bg-[#a5c6bd]"
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
}
