import RecentPosts from "./recent-posts";
import NewsletterSignup from "./newsletter-signup";
import PopularPosts from "./popular-posts";

export default function BlogSidebar() {
  return (
    <aside className="w-full max-w-sm space-y-8 p-6">
      <RecentPosts />
      <NewsletterSignup />
      <PopularPosts />
    </aside>
  );
}
