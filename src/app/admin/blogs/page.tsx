"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BlogPost,
  getAllBlogPosts,
  deleteCustomBlogPost,
  STORAGE_KEY_CUSTOM_BLOGS,
} from "@/data/blogPosts";
import {
  PlusCircle,
  Trash2,
  ExternalLink,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  Lock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function AdminBlogsListPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [customSlugs, setCustomSlugs] = useState<Set<string>>(new Set());
  const [deletedMsg, setDeletedMsg] = useState("");

  useEffect(() => {
    const isAuthed = sessionStorage.getItem("kt_admin_auth");
    if (isAuthed === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = () => {
    const all = getAllBlogPosts();
    setPosts(all);

    try {
      const stored = localStorage.getItem(STORAGE_KEY_CUSTOM_BLOGS);
      if (stored) {
        const list: BlogPost[] = JSON.parse(stored);
        setCustomSlugs(new Set(list.map((p) => p.slug)));
      } else {
        setCustomSlugs(new Set());
      }
    } catch (e) {}
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "Kuldeep@3651" || passcode === "admin123" || passcode === "8801842859") {
      setIsAuthenticated(true);
      sessionStorage.setItem("kt_admin_auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleDelete = (slug: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteCustomBlogPost(slug);
      loadData();
      setDeletedMsg(`Deleted "${title}"`);
      setTimeout(() => setDeletedMsg(""), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-32 text-white">
        <div className="max-w-md w-full rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto mb-5 text-yellow-400">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-center text-white mb-2">
            Admin Blog Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 text-center mb-6">
            Enter your admin passkey to view and manage travel blog articles.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Admin Passkey
              </label>
              <input
                type="password"
                required
                placeholder="Enter passkey (e.g. Kuldeep@3651)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-yellow-400 text-sm"
              />
            </div>

            {authError && (
              <p className="text-xs text-rose-400 font-medium">
                Incorrect passkey.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-yellow-400/20 cursor-pointer"
            >
              Access Blog Manager
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <Link href="/blog" className="text-xs text-slate-400 hover:text-yellow-400 transition-colors">
              ← Return to Public Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Admin Studio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                All Published Articles ({posts.length})
              </h1>
            </div>
          </div>

          <Link
            href="/admin/create-blog"
            className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-yellow-400/20 transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Create New Blog Post</span>
          </Link>
        </div>

        {deletedMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{deletedMsg}</span>
          </div>
        )}

        {/* Posts Table / List */}
        <div className="space-y-4">
          {posts.map((post) => {
            const isCustom = customSlugs.has(post.slug);
            return (
              <div
                key={post.slug}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-800">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-yellow-400 text-[10px] font-bold border border-slate-800">
                        {post.category}
                      </span>
                      {isCustom ? (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                          Custom Post
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-bold">
                          Core Post
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-white text-base leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-yellow-400" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-yellow-400" />
                        {post.readTime}
                      </span>
                      <span>By {post.author.name}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold border border-slate-800 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  {isCustom && (
                    <button
                      onClick={() => handleDelete(post.slug, post.title)}
                      className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
