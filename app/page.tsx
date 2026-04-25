"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Variants } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Coaching", href: "#coaching" },
  { name: "Transformations", href: "#transformations" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0b0b0c] text-[#f2ede4]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8b06a]/20 bg-[#0b0b0c]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="font-heading text-3xl tracking-wide text-[#f2ede4]">
            Connor
          </a>

          <ul className="hidden items-center gap-8 text-sm text-[#ded5c8] lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a className="transition hover:text-[#d8b06a]" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden rounded-full border border-[#d8b06a]/50 bg-[#d8b06a]/10 px-5 py-2 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20 lg:inline-flex">
            Start Coaching
          </a>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="inline-flex rounded-md border border-[#d8b06a]/30 p-2 text-[#f2ede4] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#d8b06a]/20 bg-[#0f1012] px-6 py-4 lg:hidden">
            <ul className="space-y-4 text-[#ded5c8]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md py-1 transition hover:text-[#d8b06a]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex w-full justify-center rounded-full border border-[#d8b06a]/50 bg-[#d8b06a]/10 px-4 py-2 font-medium text-[#f3dbc2]"
            >
              Start Coaching
            </a>
          </div>
        )}
      </header>

      <main className="overflow-x-clip scroll-smooth">
        <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-36 lg:px-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[#375447]/25 blur-3xl" />
            <div className="absolute bottom-20 right-16 h-56 w-56 rounded-full bg-[#d8b06a]/20 blur-3xl" />
          </div>
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d8b06a]">
                Connor Private Coaching
              </p>
              <h1 className="font-heading text-4xl leading-tight text-[#f4efe7] sm:text-5xl lg:text-6xl">
                Private Coaching Built Around Strength, Discipline, and Results.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c6bcae] sm:text-lg">
                Personal training for clients who want more than workouts — structured coaching, accountability, and a plan built around their lifestyle.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full border border-[#d8b06a]/60 bg-[#d8b06a]/10 px-6 py-3 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20">
                  Apply for Coaching
                </a>
                <a href="#coaching" className="rounded-full border border-[#5a6674] bg-[#171a1f] px-6 py-3 text-sm font-medium text-[#e4ddcf] transition hover:border-[#d8b06a]/50 hover:text-[#f3dbc2]">
                  View Programs
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["1:1 Coaching", "Custom Programs", "Progress Tracking"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#d9cfbf]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <div className="relative mx-auto flex h-[520px] max-w-md items-end overflow-hidden rounded-[2rem] border border-[#d8b06a]/35 bg-gradient-to-br from-[#1a1d24] via-[#14171d] to-[#0f1014] p-6 shadow-[0_20px_100px_rgba(0,0,0,0.6)]">
                <div className="absolute left-4 top-4 rounded-full border border-[#d8b06a]/40 px-3 py-1 text-xs text-[#d8b06a]">
                  Placeholder: Connor Hero Image
                </div>
                <div className="w-full rounded-xl border border-[#d8b06a]/20 bg-[#111318]/60 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c9b08a]">Private Studio Energy</p>
                  <p className="mt-2 text-sm text-[#d9cfbf]">Replace with high-quality portrait or in-session training image.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="grid gap-12 lg:grid-cols-[1.1fr,1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[#121418] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">About Connor</p>
              <h2 className="mt-4 font-heading text-4xl leading-tight text-[#f4efe7]">Coaching for clients who value structure and standards.</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-[#c6bcae]">
                Connor helps clients build strength, confidence, and consistency through structured training, realistic nutrition guidance, and accountability-driven coaching.
              </p>
              <p className="mt-5 leading-relaxed text-[#b6ad9f]">
                His coaching style is direct, practical, and focused on long-term sustainability. Every plan is built around the client&apos;s schedule, capabilities, and measurable progress.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Strength", "Discipline", "Longevity"].map((value) => (
                  <div key={value} className="rounded-2xl border border-[#d8b06a]/25 bg-[#181b21] px-4 py-5 text-center text-sm tracking-wide text-[#e2d8c7]">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] border border-[#d8b06a]/30 bg-gradient-to-br from-[#171a20] to-[#0e1014] p-8 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#d8b06a]">Placeholder: Connor About Image</p>
                <p className="mt-4 max-w-xs text-sm text-[#c6bcae]">Replace with an editorial-style portrait or coaching session image.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="coaching" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Coaching Services</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">High-accountability coaching, built around your life.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "1:1 Personal Training",
                  description:
                    "Private coaching sessions designed around your goals, ability level, schedule, and long-term progress.",
                },
                {
                  title: "Online Coaching",
                  description:
                    "Custom programming, weekly check-ins, progress tracking, and direct accountability from anywhere.",
                },
                {
                  title: "Transformation Coaching",
                  description:
                    "A focused plan for clients who want to lose fat, build muscle, improve habits, and stay consistent.",
                },
              ].map((card, idx) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-white/10 bg-[#121418] p-7 transition hover:border-[#d8b06a]/40"
                >
                  <div className="mb-6 h-8 w-8 rounded-full border border-[#d8b06a]/40 bg-[#d8b06a]/10" />
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8f9cab]">Service 0{idx + 1}</p>
                  <h3 className="font-heading text-2xl text-[#f0eadf]">{card.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#bdb3a4]">{card.description}</p>
                  <a href="#contact" className="mt-8 inline-flex items-center text-sm text-[#d8b06a] transition group-hover:text-[#f2d6b2]">
                    Learn More
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">The Coaching Method</p>
            <div className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#111318]">
              {[
                ["01 — Assess", "Understand your goals, lifestyle, training history, and current routine."],
                ["02 — Build", "Create a personalized training and nutrition structure that fits your life."],
                ["03 — Execute", "Train with purpose, track progress, and stay accountable week by week."],
                ["04 — Refine", "Adjust the plan as your body, schedule, and goals evolve."],
              ].map(([title, text]) => (
                <div key={title} className="grid gap-4 px-6 py-8 md:grid-cols-[220px,1fr] md:px-10">
                  <p className="font-heading text-3xl text-[#d8b06a]">{title}</p>
                  <p className="max-w-2xl text-[#c8beaf]">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="transformations" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Transformations</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">Results built with consistency, not shortcuts.</h2>
            <p className="mt-4 max-w-3xl text-[#c6bcae]">
              Real progress comes from structure, consistency, and coaching that adapts to the individual.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {["Placeholder Before / After 01", "Placeholder Before / After 02", "Placeholder Before / After 03"].map((item) => (
                <div key={item} className="flex min-h-[300px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#191b21] to-[#121318] p-6 text-center text-sm text-[#ccbfa9]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Custom plans", "Weekly accountability", "Measurable progress"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#d8b06a]/25 bg-[#121418] px-5 py-4 text-center text-sm text-[#dfd4c3]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Client Testimonials</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">Trusted by clients who expect lasting change.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Connor helped me finally stay consistent. The structure made training feel simple, focused, and realistic.",
                "The biggest difference was accountability. I knew exactly what to do each week and actually followed through.",
                "This was the first program that felt built around my lifestyle instead of forcing me into something unrealistic.",
              ].map((quote) => (
                <article key={quote} className="rounded-3xl border border-white/10 bg-[#121418] p-7">
                  <p className="font-heading text-5xl leading-none text-[#d8b06a]/80">“</p>
                  <p className="mt-4 leading-relaxed text-[#d2c8b8]">{quote}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="rounded-[2rem] border border-[#d8b06a]/40 bg-gradient-to-r from-[#151920] via-[#111218] to-[#12161b] px-7 py-12 text-center shadow-[0_12px_60px_rgba(0,0,0,0.45)] sm:px-12">
            <h2 className="font-heading text-4xl text-[#f4efe7]">Ready to train with purpose?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#c7bcae]">
              Apply for coaching and take the first step toward a stronger, more confident version of yourself.
            </p>
            <a href="#contact" className="mt-8 inline-flex rounded-full border border-[#d8b06a]/60 bg-[#d8b06a]/10 px-7 py-3 text-sm font-medium text-[#f2d9bc] transition hover:bg-[#d8b06a]/20">
              Start Coaching
            </a>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="grid gap-8 lg:grid-cols-[1fr,1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-[#121418] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Contact</p>
              <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">Apply for Coaching</h2>
              <div className="mt-8 space-y-4 text-[#cdc2b2]">
                <p>Email: hello@connortraining.com</p>
                <p>Instagram: @connortraining</p>
                <p>Location: Toronto / GTA, Ontario</p>
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-[#111318] p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Name</span>
                  <input className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60" type="text" name="name" />
                </label>
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Email</span>
                  <input className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60" type="email" name="email" />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Phone</span>
                  <input className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60" type="tel" name="phone" />
                </label>
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Goal</span>
                  <select className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60" name="goal">
                    <option>Build Muscle</option>
                    <option>Lose Fat</option>
                    <option>Improve Strength</option>
                    <option>Online Coaching</option>
                    <option>1:1 Training</option>
                    <option>General Inquiry</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 block space-y-2 text-sm text-[#d6cbbc]">
                <span>Message</span>
                <textarea className="min-h-36 w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60" name="message" />
              </label>
              <button type="submit" className="mt-6 inline-flex rounded-full border border-[#d8b06a]/60 bg-[#d8b06a]/10 px-6 py-3 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20">
                Submit
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0a0a0b]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr,1fr,1fr] lg:px-10">
          <div>
            <p className="font-heading text-3xl text-[#f2ede4]">Connor</p>
            <p className="mt-4 max-w-sm text-[#b8afa2]">
              Private coaching for strength, confidence, and long-term results.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#d8b06a]">Quick Links</p>
            <ul className="mt-4 space-y-2 text-[#cfc4b3]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="transition hover:text-[#d8b06a]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#d8b06a]">Social</p>
            <ul className="mt-4 space-y-2 text-[#cfc4b3]">
              <li>
                <a href="#" className="transition hover:text-[#d8b06a]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#d8b06a]">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#d8b06a]">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 px-6 py-5 text-center text-xs tracking-wide text-[#8b8479]">
          © {new Date().getFullYear()} Connor Training. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
