import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "Top 10 Places to Visit from Lucknow",
    slug: "top-10-places-to-visit-from-lucknow",
    excerpt: "Explore the best destinations from Lucknow with Kuldeep Travels.",
    date: "2026-07-28",
  },
  {
    id: "2",
    title: "How to Choose the Best Taxi Service",
    slug: "how-to-choose-best-taxi-service",
    excerpt:
      "Things to check before booking an outstation taxi for a safe journey.",
    date: "2026-07-25",
  },
  {
    id: "3",
    title: "Weekend Getaways Near Lucknow",
    slug: "weekend-getaways-near-lucknow",
    excerpt: "Plan your next weekend trip with our premium taxi services.",
    date: "2026-07-20",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-black text-white min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-14 text-5xl font-extrabold">Latest Blogs</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl border border-white/10 bg-[#111111] p-7"
            >
              <p className="mb-4 text-sm text-yellow-400">
                {new Date(post.date).toDateString()}
              </p>

              <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>

              <p className="mb-6 text-gray-400">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold text-yellow-400"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
