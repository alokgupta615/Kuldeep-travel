"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BlogPost,
  getAllBlogPosts,
  saveCustomBlogPost,
} from "@/data/blogPosts";
import {
  Sparkles,
  ArrowLeft,
  Save,
  Eye,
  Plus,
  Trash2,
  CheckCircle2,
  Copy,
  Check,
  Lock,
  Image as ImageIcon,
  Compass,
  Lightbulb,
  HelpCircle,
  Clock,
  Calendar,
  Layers,
} from "lucide-react";

const IMAGE_PRESETS = [
  { name: "Ayodhya Ram Mandir", path: "/images/destinations/ayodhya.png" },
  { name: "Varanasi Ghats", path: "/images/destinations/varanasi.png" },
  { name: "Prayagraj Sangam", path: "/images/destinations/prayagraj.png" },
  { name: "Naimisharanya Dham", path: "/images/destinations/Naimisharanya dham.png" },
  { name: "Nepal (Kathmandu)", path: "/images/destinations/nepal.png" },
  { name: "Chitrakoot", path: "/images/destinations/Chitrakoot.png" },
  { name: "Dudhwa Tiger Reserve", path: "/images/destinations/dudhwa.png" },
  { name: "Haridwar & Rishikesh", path: "/images/destinations/haridwar.png" },
  { name: "Agra Taj Mahal", path: "/images/destinations/agra.png" },
  { name: "Nainital Lake", path: "/images/destinations/nainital.png" },
  { name: "Jim Corbett", path: "/images/destinations/corbett.png" },
  { name: "Luxury Fleet & Cabs", path: "/images/destinations/hero.png" },
];

const CATEGORIES = [
  "Road Trips",
  "Pilgrimage & Spiritual",
  "Outstation Tips",
  "Travel Guides",
] as const;

export default function CreateBlogPage() {
  const router = useRouter();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  // Active View Tab: 'editor' | 'preview'
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<typeof CATEGORIES[number]>("Road Trips");
  const [coverImage, setCoverImage] = useState(IMAGE_PRESETS[0].path);
  const [customImage, setCustomImage] = useState("");
  const [readTime, setReadTime] = useState("6 min read");
  const [tagsInput, setTagsInput] = useState("Lucknow, Road Trips, Taxi Guide");
  const [authorName, setAuthorName] = useState("Kuldeep Travels Editorial Desk");
  const [authorRole, setAuthorRole] = useState("Travel Specialist & Route Planner");
  const [excerpt, setExcerpt] = useState("");
  const [intro, setIntro] = useState("");

  // Key highlights
  const [takeaways, setTakeaways] = useState<string[]>([
    "Fast expressway connection from Lucknow.",
    "Best vehicle options for family comfort.",
  ]);
  const [newTakeaway, setNewTakeaway] = useState("");

  // Sections
  const [sections, setSections] = useState<
    {
      heading: string;
      subheading?: string;
      body: string;
      bulletPoints: string[];
      tip?: string;
    }[]
  >([
    {
      heading: "Route Overview & Best Time to Travel",
      body: "Driving from Lucknow is seamless with wide multi-lane expressways. Early morning departures are recommended to avoid city traffic.",
      bulletPoints: ["Distance: ~150 km", "Driving Time: ~2.5 - 3 hours"],
      tip: "Take the morning route before 7:00 AM for a peaceful drive.",
    },
  ]);

  // FAQs
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([
    {
      question: "Can I book a same-day round-trip taxi?",
      answer: "Yes, Kuldeep Travels offers transparent same-day round-trip packages with all-inclusive rates.",
    },
  ]);

  const [conclusion, setConclusion] = useState(
    "Book your clean, sanitized AC cab with verified professional chauffeurs from Kuldeep Travels. Call +91 8801842859 for instant booking."
  );

  // Copy status
  const [copied, setCopied] = useState(false);
  const [published, setPublished] = useState(false);

  // Check saved session
  useEffect(() => {
    const isAuthed = sessionStorage.getItem("kt_admin_auth");
    if (isAuthed === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcodes
    if (passcode === "Kuldeep@3651" || passcode === "admin123" || passcode === "8801842859") {
      setIsAuthenticated(true);
      sessionStorage.setItem("kt_admin_auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  // Auto-generate slug when title changes
  const handleTitleChange = (val: string) => {
    setTitle(val);
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(generatedSlug);
  };

  // Add Takeaway
  const addTakeaway = () => {
    if (!newTakeaway.trim()) return;
    setTakeaways([...takeaways, newTakeaway.trim()]);
    setNewTakeaway("");
  };

  const removeTakeaway = (index: number) => {
    setTakeaways(takeaways.filter((_, i) => i !== index));
  };

  // Add Section
  const addSection = () => {
    setSections([
      ...sections,
      {
        heading: "New Section Heading",
        body: "Write your section description here...",
        bulletPoints: [],
        tip: "",
      },
    ]);
  };

  const removeSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  // Add FAQ
  const addFaq = () => {
    setFaqs([...faqs, { question: "Frequently asked question?", answer: "Answer details..." }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  // Compile final post object
  const compiledPost: BlogPost = {
    id: `custom-${Date.now()}`,
    slug: slug.trim() || `post-${Date.now()}`,
    title: title.trim() || "Untitled Blog Post",
    excerpt: excerpt.trim() || "Explore travel tips and routes from Lucknow with Kuldeep Travels.",
    coverImage: customImage.trim() || coverImage,
    category,
    date: new Date().toISOString().split("T")[0],
    readTime: readTime.trim() || "5 min read",
    author: {
      name: authorName.trim() || "Kuldeep Travels Desk",
      role: authorRole.trim() || "Travel Specialist",
    },
    tags: tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    content: {
      intro: intro.trim() || excerpt.trim(),
      keyTakeaways: takeaways.filter(Boolean),
      sections: sections.map((s) => ({
        heading: s.heading,
        subheading: s.subheading,
        body: s.body,
        bulletPoints: s.bulletPoints.filter(Boolean),
        tip: s.tip,
      })),
      faqs: faqs.filter((f) => f.question.trim() && f.answer.trim()),
      conclusion: conclusion.trim(),
    },
  };

  // Save to website
  const handlePublish = () => {
    if (!title.trim()) {
      alert("Please enter an article title.");
      return;
    }
    const success = saveCustomBlogPost(compiledPost);
    if (success) {
      setPublished(true);
      setTimeout(() => {
        router.push(`/blog/${compiledPost.slug}`);
      }, 1500);
    } else {
      alert("Could not save blog post. Please try again.");
    }
  };

  // Generate code snippet for export
  const generatedCode = JSON.stringify(compiledPost, null, 2);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-32 text-white">
        <div className="max-w-md w-full rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto mb-5 text-yellow-400">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-center text-white mb-2">
            Admin Blog Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 text-center mb-6">
            Enter your admin passkey to add or edit travel blogs for Kuldeep Travels.
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
                Incorrect passkey. Please enter your valid admin key.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-yellow-400/20 cursor-pointer"
            >
              Access Blog Creator
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <Link href="/blog" className="text-xs text-slate-400 hover:text-yellow-400 transition-colors">
              ← Return to Blog
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
                Create & Publish New Blog
              </h1>
            </div>
          </div>

          {/* Action Tabs & Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800">
              <button
                onClick={() => setActiveTab("editor")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "editor"
                    ? "bg-yellow-400 text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Editor
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "preview"
                    ? "bg-yellow-400 text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Preview</span>
              </button>
            </div>

            <button
              onClick={handleCopyCode}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Code Copied!" : "Export Code"}</span>
            </button>

            <button
              onClick={handlePublish}
              disabled={published}
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              {published ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{published ? "Published!" : "Publish to Website"}</span>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: LIVE PREVIEW ================= */}
        {activeTab === "preview" && (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                {category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                {title || "Untitled Blog Post Preview"}
              </h1>

              <div className="flex items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-800">
                <span>By {authorName}</span>
                <span>•</span>
                <span>{readTime}</span>
                <span>•</span>
                <span>{new Date().toDateString()}</span>
              </div>

              {/* Cover Image */}
              <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={customImage || coverImage}
                  alt={title || "Cover image"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Intro */}
              <p className="text-lg text-slate-200 leading-relaxed font-medium">
                {intro || excerpt || "Article introduction will appear here."}
              </p>

              {/* Takeaways */}
              {takeaways.length > 0 && (
                <div className="p-6 rounded-2xl bg-slate-950 border-l-4 border-yellow-400 border-y border-r border-slate-800">
                  <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              <div className="space-y-8">
                {sections.map((sec, i) => (
                  <div key={i} className="space-y-3">
                    <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
                      {sec.heading}
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {sec.body}
                    </p>
                    {sec.bulletPoints.length > 0 && (
                      <div className="bg-slate-950/80 p-4 rounded-xl space-y-1.5">
                        {sec.bulletPoints.map((bp, bidx) => (
                          <div key={bidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {sec.tip && (
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm">
                        <strong>Pro Chauffeur Tip: </strong>
                        <span>{sec.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQs */}
              {faqs.length > 0 && (
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="font-bold text-white text-sm mb-1">{faq.question}</p>
                      <p className="text-xs sm:text-sm text-slate-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Conclusion */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-yellow-400/30">
                <p className="text-sm text-slate-200">{conclusion}</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: EDITOR ================= */}
        {activeTab === "editor" && (
          <div className="space-y-10">
            {/* Section 1: Basic Post Info */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-5 h-5" />
                <span>1. Article Overview & Identity</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Complete Lucknow to Naimisharanya One-Day Taxi Tour Guide"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium text-base focus:border-yellow-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    URL Slug (Auto-generated) *
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-yellow-400 font-mono text-xs focus:border-yellow-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Reading Time Estimate
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 6 min read"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="e.g. Naimisharanya, Ayodhya, Cab Booking, Road Trip"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Author Role / Title
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Short Excerpt / Summary (Shown on Blog Cards) *
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Brief 1-2 sentence description of what travelers will learn from this article..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Cover Image Picker */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                <span>2. Cover Image</span>
              </h2>

              <p className="text-xs text-slate-400">
                Choose a pre-built destination picture or type a custom image URL.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {IMAGE_PRESETS.map((preset) => {
                  const isSelected = coverImage === preset.path && !customImage;
                  return (
                    <button
                      type="button"
                      key={preset.path}
                      onClick={() => {
                        setCoverImage(preset.path);
                        setCustomImage("");
                      }}
                      className={`relative rounded-xl overflow-hidden border-2 text-left group p-1 transition-all cursor-pointer ${
                        isSelected
                          ? "border-yellow-400 shadow-lg shadow-yellow-400/20"
                          : "border-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <div className="relative h-20 w-full rounded-lg overflow-hidden bg-slate-950 mb-1.5">
                        <Image
                          src={preset.path}
                          alt={preset.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-[11px] font-bold text-white truncate">
                        {preset.name}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Or Custom Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/my-image.jpg or /images/destinations/my-pic.png"
                  value={customImage}
                  onChange={(e) => setCustomImage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* Section 3: Article Body & Content */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-5 h-5" />
                <span>3. Article Content & Sections</span>
              </h2>

              {/* Intro */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Article Introduction Paragraph
                </label>
                <textarea
                  rows={4}
                  placeholder="Welcome readers and set the context for the journey..."
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-yellow-400 outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Key Takeaways */}
              <div className="pt-4 border-t border-slate-800">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Key Highlights / Bullet Takeaways
                </label>
                <div className="space-y-2 mb-3">
                  {takeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeTakeaway(idx)}
                        className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a new highlight point..."
                    value={newTakeaway}
                    onChange={(e) => setNewTakeaway(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTakeaway())}
                    className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-yellow-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={addTakeaway}
                    className="px-4 py-2 rounded-xl bg-yellow-400 text-slate-950 font-bold text-xs hover:bg-yellow-300 transition-colors cursor-pointer"
                  >
                    Add Highlight
                  </button>
                </div>
              </div>

              {/* Dynamic Body Sections */}
              <div className="pt-6 border-t border-slate-800 space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">
                    Article Sections ({sections.length})
                  </label>
                  <button
                    type="button"
                    onClick={addSection}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-400 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Section</span>
                  </button>
                </div>

                {sections.map((sec, sidx) => (
                  <div
                    key={sidx}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 relative"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-yellow-400 uppercase">
                        Section {sidx + 1}
                      </span>
                      {sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSection(sidx)}
                          className="text-rose-400 hover:text-rose-300 text-xs flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                        Section Heading *
                      </label>
                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[sidx].heading = e.target.value;
                          setSections(updated);
                        }}
                        placeholder="e.g. 1. Darshan Timings & Parking Guide"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold text-sm focus:border-yellow-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                        Section Paragraph Content *
                      </label>
                      <textarea
                        rows={3}
                        value={sec.body}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[sidx].body = e.target.value;
                          setSections(updated);
                        }}
                        placeholder="Write details for this section..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:border-yellow-400 outline-none resize-none leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                        Pro Chauffeur Tip (Optional)
                      </label>
                      <input
                        type="text"
                        value={sec.tip || ""}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[sidx].tip = e.target.value;
                          setSections(updated);
                        }}
                        placeholder="e.g. Book in advance during weekends to get priority parking access."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-300 text-xs focus:border-yellow-400 outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic FAQs */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-yellow-400" />
                    <span>Frequently Asked Questions ({faqs.length})</span>
                  </label>
                  <button
                    type="button"
                    onClick={addFaq}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-400 text-xs font-bold cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add FAQ</span>
                  </button>
                </div>

                {faqs.map((faq, fidx) => (
                  <div
                    key={fidx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400">
                        FAQ {fidx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFaq(fidx)}
                        className="text-rose-400 hover:text-rose-300 text-xs cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[fidx].question = e.target.value;
                        setFaqs(updated);
                      }}
                      placeholder="Question..."
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:border-yellow-400 outline-none"
                    />

                    <textarea
                      rows={2}
                      value={faq.answer}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[fidx].answer = e.target.value;
                        setFaqs(updated);
                      }}
                      placeholder="Answer..."
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:border-yellow-400 outline-none resize-none"
                    />
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="pt-6 border-t border-slate-800">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Conclusion & Booking Call to Action
                </label>
                <textarea
                  rows={2}
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-yellow-400 outline-none resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* Bottom Publishing Bar */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <p className="text-sm font-bold text-white">Ready to publish?</p>
                <p className="text-xs text-slate-400">
                  Your new blog will be immediately accessible on <code>/blog/{slug}</code>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePublish}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Publish Article</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
