"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

export default function ContactInfo() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const contactChannels = [
    {
      key: "phone",
      icon: Phone,
      title: "Call Us Directly",
      subtitle: "Instant booking & immediate travel consultation",
      value: "+91 99364 08109",
      actionText: "Call Now",
      href: "tel:+919936408109",
      color: "text-blue-700",
      bg: "bg-blue-50 border-blue-100",
      iconBg: "bg-blue-600 text-white",
      badge: "24×7 Toll-Free Support",
      copyable: "+919936408109",
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp Booking",
      subtitle: "Get instant fare estimate & vehicle photos",
      value: "Chat on WhatsApp",
      actionText: "Open WhatsApp",
      href: "https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20inquire%20about%20a%20booking.",
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-100",
      iconBg: "bg-emerald-600 text-white",
      badge: "Avg Reply < 5 Mins",
      copyable: "+919936408109",
    },
    {
      key: "email",
      icon: Mail,
      title: "Email Assistance",
      subtitle: "Corporate travel, bulk fleet & tour quotations",
      value: "kuldeeptravelslko@gmail.com",
      actionText: "Send Email",
      href: "mailto:kuldeeptravelslko@gmail.com",
      color: "text-rose-700",
      bg: "bg-rose-50 border-rose-100",
      iconBg: "bg-rose-600 text-white",
      badge: "Official Correspondence",
      copyable: "kuldeeptravelslko@gmail.com",
    },
    {
      key: "location",
      icon: MapPin,
      title: "Head Office",
      subtitle: "Visit our office for customized package planning",
      value: "Lucknow, Uttar Pradesh",
      actionText: "View on Map",
      href: "#map",
      color: "text-amber-700",
      bg: "bg-amber-50 border-amber-100",
      iconBg: "bg-amber-600 text-white",
      badge: "Mon - Sun • 24 Hours",
      copyable: "Kuldeep Travels, Lucknow, Uttar Pradesh",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Get In Touch
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Direct Communication Channels
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out via phone, WhatsApp, email, or visit our office in
            Lucknow. Our dedicated support team is available round the clock.
          </p>
        </div>

        {/* Channels Grid - Responsive 1 -> 2 -> 4 col */}
        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedKey === item.key;

            return (
              <div
                key={item.key}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} shadow-md transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <div className="mt-4 rounded-xl bg-slate-50 p-2.5 border border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {item.value}
                    </span>

                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.copyable!, item.key)}
                        title="Copy to clipboard"
                        className="shrink-0 p-1 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-slate-200 transition"
                        aria-label={`Copy ${item.title}`}
                      >
                        {isCopied ? (
                          <Check size={14} className="text-emerald-600" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="mt-5">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700 active:scale-95 shadow-sm"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Banner */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-3 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="flex items-center gap-3 sm:px-4 pt-2 sm:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Verified & Safe Rides
                </h4>
                <p className="text-xs text-slate-500">
                  Background-checked chauffeurs & insured fleet
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:px-4 pt-4 sm:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Fixed & Transparent
                </h4>
                <p className="text-xs text-slate-500">
                  No hidden surcharges or surprise toll fees
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:px-4 pt-4 sm:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  On-Time Guarantee
                </h4>
                <p className="text-xs text-slate-500">
                  Punctual doorstep pickup for airports & tours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}