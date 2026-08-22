"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BlogPost,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blogPosts";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
  Car,
  Lightbulb,
  Share2,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";

interface SingleBlogClientProps {
  initialPost?: BlogPost | null;
  slug: string;
}

export default function SingleBlogClient({
  initialPost,
  slug,
}: SingleBlogClientProps) {
  const [post, setPost] = useState<BlogPost | null>(initialPost || null);
  const [loading, setLoading] = useState(!initialPost);

  useEffect(() => {
    if (!initialPost) {
      const found = getBlogPostBySlug(slug);
      setPost(found || null);
      setLoading(false);
    }
  }, [initialPost, slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-semibold">Loading travel guide...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-black text-white mb-3">Guide Not Found</h1>
          <p className="text-sm text-slate-400 mb-6">
            The article you are looking for might have been moved or unpublished.
          </p>
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-xl bg-yellow-400 text-slate-950 font-bold text-sm hover:bg-yellow-300 transition-colors"
          >
            ← Back to All Guides
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);

  return (
    <article className="bg-slate-950 text-slate-100 min-h-screen">
      {/* ================= HEADER SECTION ================= */}
      <div className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto">
          {/* Back & Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all guides</span>
            </Link>
            <span>/</span>
            <span className="text-slate-400">{post.category}</span>
          </div>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Meta bar: Date, Read Time, Author */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-300 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-slate-950 font-bold flex items-center justify-center text-xs">
                KT
              </div>
              <div>
                <p className="font-semibold text-white text-xs sm:text-sm">{post.author.name}</p>
                <p className="text-[11px] text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT + SIDEBAR ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden mb-10 shadow-2xl border border-slate-800 bg-slate-900">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Paragraph */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 font-medium">
              {post.content.intro}
            </p>

            {/* Key Takeaways Box */}
            {post.content.keyTakeaways && post.content.keyTakeaways.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-yellow-400 border-y border-r border-slate-800 mb-10 shadow-lg">
                <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Key Highlights & Essential Takeaways</span>
                </h3>
                <ul className="space-y-2.5">
                  {post.content.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="text-yellow-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Body Sections */}
            <div className="space-y-10">
              {post.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-slate-800 pb-3">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <h3 className="text-lg font-bold text-yellow-400">
                      {section.subheading}
                    </h3>
                  )}

                  <p className="text-base text-slate-300 leading-relaxed">
                    {section.body}
                  </p>

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/80 space-y-2.5">
                      {section.bulletPoints.map((bp, bidx) => (
                        <div key={bidx} className="flex items-start gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pro Tip */}
                  {section.tip && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
                      <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-yellow-400">Pro Chauffeur Tip: </strong>
                        <span>{section.tip}</span>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* FAQs Section */}
            {post.content.faqs && post.content.faqs.length > 0 && (
              <div className="mt-14 pt-10 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                  <HelpCircle className="w-6 h-6 text-yellow-400" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {post.content.faqs.map((faq, fidx) => (
                    <div
                      key={fidx}
                      className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800"
                    >
                      <h3 className="text-base font-bold text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion Box */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-yellow-400/30 shadow-xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>Summary & Booking Assistance</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                {post.content.conclusion}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book-now"
                  className="px-5 py-2.5 rounded-xl bg-yellow-400 text-slate-950 font-bold text-sm hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Book Outstation Cab Now
                </Link>
                <a
                  href={`https://wa.me/918801842859?text=Hi%20Kuldeep%20Travels,%20I%20am%20reading%20your%20blog%20"${encodeURIComponent(
                    post.title
                  )}"%20and%20want%20to%20inquire%20about%20a%20taxi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Tags & Social Share */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5" />
                  Share:
                </span>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${post.title} - Read more: https://kuldeep-travel.onrender.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(
                    `https://kuldeep-travel.onrender.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-600/20 text-sky-400 text-xs font-semibold hover:bg-sky-600/30 transition-colors"
                >
                  Twitter/X
                </a>
              </div>
            </div>
          </div>

          {/* ================= STICKY SIDEBAR ================= */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Car className="w-4 h-4" />
                  <span>Kuldeep Travels Chauffeur Desk</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">
                  Hire Cab for this Trip
                </h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  Clean AC cabs with sanitized interiors, 24/7 highway support, and zero hidden cancellation charges.
                </p>

                {/* Popular Cabs */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white">Sedan (Dzire / Etios)</span>
                    <span className="text-yellow-400 font-bold">₹10 - ₹11 / km</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white">Maruti Ertiga (6-Seater)</span>
                    <span className="text-yellow-400 font-bold">₹14 - ₹15 / km</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white">Toyota Innova Crysta</span>
                    <span className="text-yellow-400 font-bold">₹18 - ₹20 / km</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white">Tempo Traveller / Urbania</span>
                    <span className="text-yellow-400 font-bold">₹26 - ₹32 / km</span>
                  </div>
                </div>

                {/* Call & WhatsApp buttons */}
                <div className="space-y-2.5">
                  <Link
                    href="/book-now"
                    className="w-full block text-center py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm shadow-md transition-all"
                  >
                    Book Online Now
                  </Link>

                  <a
                    href="tel:8801842859"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span>Call: +91 8801842859</span>
                  </a>

                  <a
                    href={`https://wa.me/918801842859?text=Hi%20Kuldeep%20Travels,%20I%20am%20interested%20in%20booking%20a%20taxi%20for%20${encodeURIComponent(
                      post.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Booking Desk</span>
                  </a>
                </div>

                {/* Badges */}
                <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Chauffeurs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Doorstep Pickup</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ================= RELATED ARTICLES ================= */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                  Keep Exploring
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Related Travel Guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs sm:text-sm font-bold text-yellow-400 hover:text-yellow-300 inline-flex items-center gap-1"
              >
                <span>View all posts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rpost) => (
                <Link
                  key={rpost.id}
                  href={`/blog/${rpost.slug}`}
                  className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-yellow-400/50 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={rpost.coverImage}
                      alt={rpost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 text-yellow-400 text-[10px] font-bold">
                        {rpost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 mb-2">
                        {rpost.readTime}
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2 leading-snug mb-2">
                        {rpost.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {rpost.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center text-xs font-bold text-yellow-400">
                      <span>Read Guide →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
