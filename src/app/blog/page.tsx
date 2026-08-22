"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  MapPin,
  Sparkles,
  Phone,
  MessageCircle,
  Tag,
  Compass,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Road Trips",
  "Pilgrimage & Spiritual",
  "Outstation Tips",
  "Travel Guides",
] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-yellow-400 font-medium">Travel Blog & Road Trip Guides</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kuldeep Travels Travel Journal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
                Insider Travel Guides &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                  Road Trip Diaries
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Expert itineraries, route conditions, darshan tips, and outstation cab advice curated by Lucknow&apos;s most trusted travel service.
              </p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="flex items-center gap-6 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl self-start lg:self-auto">
              <div className="text-center pr-5 border-r border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-yellow-400">100+</div>
                <div className="text-xs text-slate-400 font-medium">Routes Covered</div>
              </div>
              <div className="text-center pr-5 border-r border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Cab Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-blue-400">4.9★</div>
                <div className="text-xs text-slate-400 font-medium">Rider Rating</div>
              </div>
            </div>
          </div>

          {/* ================= SEARCH & CATEGORY FILTER BAR ================= */}
          <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20 font-bold"
                        : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search destinations, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-400/60 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ================= FEATURED POST (Shown when viewing "All" and no search) ================= */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-400">
                Featured Editorial Story
              </h2>
            </div>

            <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-yellow-400/50 transition-all duration-300 shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Image */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-yellow-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-slate-900">
                  <div>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5 text-slate-300">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-yellow-400 transition-colors leading-tight mb-4">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base line-clamp-3 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] font-medium text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Written by</p>
                      <p className="text-sm font-semibold text-white">
                        {featuredPost.author.name}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm transition-all duration-200 shadow-md shadow-yellow-400/20 group/btn"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= POSTS GRID ================= */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Compass className="w-6 h-6 text-yellow-400" />
              <span>
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : selectedCategory === "All"
                  ? "All Articles & Guides"
                  : `${selectedCategory} Articles`}
              </span>
            </h2>
            <span className="text-sm text-slate-400">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "guide" : "guides"}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-slate-800 p-8">
              <p className="text-xl font-bold text-slate-300 mb-2">No articles found</p>
              <p className="text-sm text-slate-400 mb-6">
                Try searching for another keyword or switch category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl bg-yellow-400 text-slate-950 font-bold text-sm cursor-pointer hover:bg-yellow-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-3xl border border-slate-800/80 bg-slate-900/90 overflow-hidden hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/5 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                    {/* Category pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-yellow-400 font-semibold text-xs shadow-md">
                        {post.category}
                      </span>
                    </div>

                    {/* Read time */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-medium text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors leading-snug mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/80 text-[11px] text-slate-400 font-medium"
                          >
                            <Tag className="w-2.5 h-2.5 text-yellow-400/70" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer link */}
                      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-400">
                          {post.author.name.split(" ")[0]} Desk
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors group/link"
                        >
                          <span>Read Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* ================= QUICK BOOKING & WHATSAPP BANNER ================= */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 p-8 sm:p-12 text-slate-950 shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 skew-x-12 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/10 font-bold text-xs uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Doorstep Pickup Across Lucknow & UP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Ready to Turn These Road Trips Into Memories?
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-900 mb-8 max-w-2xl">
              Book a sanitized AC sedan, Ertiga, Innova Crysta, or luxury Tempo Traveller with professional verified chauffeurs at the most transparent rates in Lucknow.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/book-now"
                className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                Instant Online Booking
              </Link>
              <a
                href="https://wa.me/918801842859?text=Hi%20Kuldeep%20Travels,%20I%20want%20to%20inquire%20about%20an%20outstation%20taxi%20booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote (8801842859)</span>
              </a>
              <a
                href="tel:8801842859"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/30 hover:bg-white/40 text-slate-950 font-bold text-sm backdrop-blur-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Chauffeur Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
