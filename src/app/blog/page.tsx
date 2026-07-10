import Link from "next/link";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        date
      }
    }
  }
`;

export default async function BlogPage() {

  const { data } = await client.query({
    query: GET_POSTS,
  });

  const posts = data.posts.nodes;

  return (
    <section className="bg-black text-white min-h-screen pt-40 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-14">
          Latest Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post: any) => (

            <div
              key={post.id}
              className="bg-[#111111] border border-white/10 rounded-3xl p-7"
            >

              <p className="text-yellow-400 text-sm mb-4">
                {new Date(post.date).toDateString()}
              </p>

              <h2
                className="text-2xl font-bold mb-4"
                dangerouslySetInnerHTML={{
                  __html: post.title,
                }}
              />

              <div
                className="text-gray-400 mb-6 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
              />

              <Link
                href={`/blog/${post.slug}`}
                className="text-yellow-400 font-semibold"
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