export default function RecentPosts() {
  const posts = [
    "Jeremy Clarkson: Deadly Squat for the Environment?",
    "The Environmental Impact of War",
    "Common Land in the UK",
    "The Paris Olympics: How Sustainable Were They?",
    "Why Nuclear Power Hasn't Taken Over the Energy Industry... Yet",
  ];

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Recent Posts</h2>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-gray-600 hover:underline"
            >
              {post}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
