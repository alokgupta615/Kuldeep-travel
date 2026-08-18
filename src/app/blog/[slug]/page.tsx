import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import Image from "next/image";

const GET_SINGLE_POST = gql`
  query GetSinglePost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

interface PostData {
  post: {
    title: string;
    content: string;
    date: string;
    featuredImage?: {
      node?: {
        sourceUrl: string;
      };
    };
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await client.query<PostData>({
    query: GET_SINGLE_POST,
    variables: { slug },
  });

  if (!result.data?.post) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <h1>Post not found</h1>
      </section>
    );
  }

  const post = result.data.post;

  return (
    <section className="bg-black text-white min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-yellow-400 mb-4">
          {new Date(post.date).toDateString()}
        </p>

        <h1
          className="text-4xl md:text-5xl font-extrabold mb-10"
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        />

        {post.featuredImage?.node?.sourceUrl && (
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-10 text-slate-900">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </section>
  );
}
