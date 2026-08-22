"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, CheckCircle2, X, Send, Sparkles } from "lucide-react";

interface ReviewItem {
  name: string;
  trip?: string;
  date: string;
  rating: number;
  initials: string;
  color: string;
  text: string;
}

const initialReviews: ReviewItem[] = [
  {
    name: "Amit Sharma",
    trip: "Lucknow to Ayodhya (Tempo Traveller)",
    date: "2 weeks ago",
    rating: 5,
    initials: "AS",
    color: "from-blue-600 to-indigo-600",
    text: "Excellent service by Kuldeep Travels. We booked a Tempo Traveller for a family trip to Ayodhya. The vehicle was very clean and the driver was polite, punctual, and knew all the best darshan points. Highly recommended!",
  },
  {
    name: "Priya Gupta",
    trip: "Lucknow to Delhi (Innova Crysta)",
    date: "1 month ago",
    rating: 5,
    initials: "PG",
    color: "from-pink-600 to-rose-600",
    text: "Booked an Innova Crysta for outstation. Best travel agency in Lucknow! Very professional behavior, transparent per-km billing without hidden charges. The journey was extremely comfortable for my elderly parents.",
  },
  {
    name: "Rahul Singh",
    trip: "Corporate Taxi Service",
    date: "2 months ago",
    rating: 5,
    initials: "RS",
    color: "from-emerald-600 to-teal-600",
    text: "Using their cab service for corporate meetings and airport transfers for the past year. Always on time and very reliable. The customer support is responsive 24x7.",
  },
];

const AVATAR_COLORS = [
  "from-blue-600 to-indigo-600",
  "from-purple-600 to-indigo-600",
  "from-emerald-600 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-600 to-pink-600",
];

export default function Testimonial() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [trip, setTrip] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    const initials = name
      .trim()
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const randomColor =
      AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

    const newReview: ReviewItem = {
      name: name.trim(),
      trip: trip.trim() || "Verified Traveler",
      date: "Just now",
      rating,
      initials: initials || "KT",
      color: randomColor,
      text: reviewText.trim(),
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);

    // Optional: Also offer to forward to WhatsApp
    const waText = encodeURIComponent(
      `⭐ *New Customer Review for Kuldeep Travels*\n\n*Name:* ${name}\n*Rating:* ${rating}/5 Stars\n*Trip/Route:* ${trip || "N/A"}\n*Review:* "${reviewText}"`
    );
    window.open(`https://wa.me/918801842859?text=${waText}`, "_blank");

    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setName("");
      setTrip("");
      setReviewText("");
      setRating(5);
    }, 2000);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs sm:text-sm font-bold text-blue-800 tracking-wide uppercase">
            Customer Testimonials
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Travellers Say
          </h2>
          
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-gray-900">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-amber-400 text-amber-400" size={22} />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Based on 500+ Verified Customer & Google Reviews
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJplaceholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-800 text-sm font-bold border border-gray-300 shadow-sm transition-all"
            >
              {/* Google G icon */}
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Review on Google</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviewsList.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-xl hover:border-blue-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${review.color} text-white font-bold text-sm shadow-sm`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                        {review.name}
                      </h3>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>

                  {/* Google G icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                </div>

                {review.trip && (
                  <div className="mb-3 inline-block rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                    {review.trip}
                  </div>
                )}

                <div className="flex mb-3.5 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Trip Experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WRITE A REVIEW MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-100">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                  Your review has been submitted and added. We appreciate your support!
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Kuldeep Travels Feedback</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                  Share Your Experience
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">
                  Tell us about your cab ride or tour package with Kuldeep Travels.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Star Rating selector */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Rating *
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 text-gray-300 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            size={28}
                            className={`${
                              star <= (hoverRating || rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            } transition-colors`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-600 ml-2">
                        {rating === 5 ? "5.0 - Excellent!" : `${rating}.0 Stars`}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                    />
                  </div>

                  {/* Trip / Route (optional) */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Trip / Route (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lucknow to Ayodhya (Innova Crysta)"
                      value={trip}
                      onChange={(e) => setTrip(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                    />
                  </div>

                  {/* Review text */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How was the driver, vehicle cleanliness, punctuality, and route experience?"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

