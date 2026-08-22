import { Metadata } from "next";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
} from "@/data/blogPosts";
import SingleBlogClient from "@/components/blog/SingleBlogClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Travel Article | Kuldeep Travels Lucknow",
      description: "Explore road trips, routes, and taxi guides from Lucknow with Kuldeep Travels.",
    };
  }

  return {
    title: `${post.title} | Kuldeep Travels Lucknow`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: `${post.title} | Kuldeep Travels`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return <SingleBlogClient initialPost={post || null} slug={slug} />;
}

