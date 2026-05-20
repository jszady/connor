"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
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

const faqItems = [
  {
    q: "Do you offer personal training in Aurora and Newmarket?",
    a: "Yes. Connor works with clients in person at Woodshed Wellness in Newmarket, and online for clients across Aurora, King City, York Region, and the greater Toronto area. Both options include fully customized programs and regular check-ins.",
  },
  {
    q: "Where does in-person training take place?",
    a: "All in-person sessions are held at Woodshed Wellness, a private training facility at 1135 Stellar Dr, Newmarket, ON L3Y 7B8. The space is private and professional, designed for focused, one-on-one training.",
  },
  {
    q: "Do you offer online coaching?",
    a: "Yes. Online coaching includes a custom training program, nutrition guidance, regular check-ins, and direct access to Connor throughout the week. It is available to clients anywhere in Canada.",
  },
  {
    q: "What types of clients do you work with?",
    a: "Icon Body and Mind works with a wide range of clients, including beginners, busy professionals, athletes, men, and women. Whether the goal is fat loss, muscle building, strength, mobility, or general health, every program is built around your specific needs and lifestyle.",
  },
  {
    q: "Can personal training help with fat loss and muscle building?",
    a: "Structured personal training, combined with a proper nutrition plan, is one of the most effective approaches to sustainable fat loss and muscle building. Connor's programs are designed around your goals, training history, and lifestyle, not generic templates.",
  },
  {
    q: "Do you provide nutrition plans?",
    a: "Yes. Nutrition guidance is included in all coaching programs at Icon Body and Mind. Plans are practical, sustainable, and built around your schedule and food preferences, without rigid restrictions or crash dieting.",
  },
  {
    q: "Do you help with mobility and injury prevention?",
    a: "Yes. Mobility work and injury prevention are integrated into programs where appropriate. Long-term physical resilience and sustainable training are priorities alongside strength and body composition goals.",
  },
  {
    q: "How do I book a consultation?",
    a: "Fill out the contact form on this page, or reach out directly by phone or Instagram. Connor reviews every request personally and only takes on clients he is confident he can genuinely help.",
  },
];

const testimonials = [
  {
    quote:
      "Connor helped me finally stay consistent. The structure made training feel simple, focused, and realistic.",
    attribution: "Client, Aurora, ON",
  },
  {
    quote:
      "The biggest difference was accountability. I knew exactly what to do each week and actually followed through.",
    attribution: "Client, Newmarket, ON",
  },
  {
    quote:
      "This was the first program that felt built around my lifestyle instead of forcing me into something unrealistic.",
    attribution: "Online Coaching Client",
  },
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  goal: "",
  message: "",
  website: "",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (!(name in initialFormState)) return;
    setFormData((prev) => ({
      ...prev,
      [name]: value ?? "",
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("idle");
    setFormError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        setFormStatus("error");
        setFormError(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setFormStatus("success");
      setFormData({ ...initialFormState });
    } catch {
      setFormStatus("error");
      setFormError(
        "Unable to send your request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b0b0c] text-[#f2ede4]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8b06a]/20 bg-[#0b0b0c]/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10"
        >
          <a href="#home" className="flex shrink-0 items-center">
            {logoError ? (
              <span className="font-heading text-xl leading-none tracking-wide text-[#f2ede4] sm:text-2xl">
                Icon Body and Mind
              </span>
            ) : (
              <Image
                src="/NavLogo%20(1).png"
                alt="Icon Body and Mind"
                width={280}
                height={79}
                priority
                unoptimized
                className="h-9 w-auto max-w-[200px] object-contain object-left sm:h-10 sm:max-w-[240px]"
                onError={() => setLogoError(true)}
              />
            )}
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

          <a
            href="#contact"
            className="hidden rounded-full border border-[#d8b06a]/50 bg-[#d8b06a]/10 px-5 py-2 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20 lg:inline-flex"
          >
            Book a Consultation
          </a>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
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
              Book a Consultation
            </a>
          </div>
        )}
      </header>

      <main className="overflow-x-clip scroll-smooth">
        {/* Hero */}
        <section
          id="home"
          className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-36 lg:px-10"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[#375447]/25 blur-3xl" />
            <div className="absolute bottom-20 right-16 h-56 w-56 rounded-full bg-[#d8b06a]/20 blur-3xl" />
          </div>
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d8b06a]">
                Icon Body and Mind · Newmarket, Aurora & King City
              </p>
              <h1 className="font-heading text-4xl leading-tight text-[#f4efe7] sm:text-5xl lg:text-6xl">
                Premium Personal Training in Aurora &amp; Newmarket
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c6bcae] sm:text-lg">
                Private in-person coaching and online programs for clients in Aurora, Newmarket, King City, and York Region. Structured training, real accountability, and results built to last.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full border border-[#d8b06a]/60 bg-[#d8b06a]/10 px-6 py-3 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20"
                >
                  Book a Consultation
                </a>
                <a
                  href="#coaching"
                  className="rounded-full border border-[#5a6674] bg-[#171a1f] px-6 py-3 text-sm font-medium text-[#e4ddcf] transition hover:border-[#d8b06a]/50 hover:text-[#f3dbc2]"
                >
                  View Coaching Options
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["1:1 Coaching", "Custom Programs", "Progress Tracking"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#d9cfbf]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <div className="relative mx-auto h-[520px] w-full max-w-md overflow-hidden rounded-[2rem] border border-[#d8b06a]/35 shadow-[0_20px_100px_rgba(0,0,0,0.6)]">
                <Image
                  src="/Connorheroimage.jpg"
                  alt="Connor Steenson, personal trainer at Icon Body and Mind, serving Aurora, Newmarket, and York Region"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="grid gap-12 lg:grid-cols-[1.1fr,1fr]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[#121418] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">About Connor</p>
              <h2 className="mt-4 font-heading text-4xl leading-tight text-[#f4efe7]">
                Coaching for clients who value structure and standards.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-[#c6bcae]">
                Based in Newmarket, Ontario, Connor works with clients across Aurora, King City, and York Region in person and online, helping them build strength, confidence, and consistency through structured training, nutrition guidance, and accountability-driven coaching.
              </p>
              <p className="mt-5 leading-relaxed text-[#b6ad9f]">
                His coaching style is direct, practical, and focused on long-term sustainability. Every plan is built around the client&apos;s schedule, capabilities, and measurable progress.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Strength", "Discipline", "Longevity"].map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-[#d8b06a]/25 bg-[#181b21] px-4 py-5 text-center text-sm tracking-wide text-[#e2d8c7]"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#d8b06a]/30">
              <Image
                src="/Connoraboutsection.jpg"
                alt="Connor Steenson, personal trainer at Icon Body and Mind based in Newmarket, Ontario"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Coaching Services */}
        <section id="coaching" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Coaching Services</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">
              Personal Training Services in Newmarket, Aurora &amp; York Region
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "1:1 Personal Training",
                  description:
                    "Private in-person coaching at Woodshed Wellness in Newmarket, built around your goals, training history, and schedule.",
                },
                {
                  title: "Online Coaching",
                  description:
                    "Custom programming, weekly check-ins, and direct access to Connor. Available for clients in Aurora, King City, and across Canada.",
                },
                {
                  title: "Transformation Coaching",
                  description:
                    "A structured program for clients focused on sustainable fat loss, muscle building, improved habits, and lasting lifestyle change.",
                },
                {
                  title: "Strength Training",
                  description:
                    "Progressive strength programs built around sound technique and consistent overload. Designed for real, functional strength over time.",
                },
                {
                  title: "Fat Loss Coaching",
                  description:
                    "Structured training and practical nutrition guidance working together to support sustainable fat loss, without restrictive dieting.",
                },
                {
                  title: "Muscle Building",
                  description:
                    "Hypertrophy-focused programming built around smart volume, recovery, and nutrition to support long-term muscle development.",
                },
                {
                  title: "Nutrition Plans",
                  description:
                    "Practical, sustainable nutrition guidance designed around your lifestyle, food preferences, and training goals. No rigid restrictions.",
                },
                {
                  title: "Mobility and Injury Prevention",
                  description:
                    "Mobility work and injury prevention integrated into your program to support longevity, performance, and physical resilience.",
                },
              ].map((card, idx) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-white/10 bg-[#121418] p-5 transition hover:border-[#d8b06a]/40"
                >
                  <div className="mb-4 h-7 w-7 rounded-full border border-[#d8b06a]/40 bg-[#d8b06a]/10" />
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#8f9cab]">
                    Service {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl text-[#f0eadf]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#bdb3a4]">{card.description}</p>
                  <a
                    href="#contact"
                    aria-label={`Book a consultation for ${card.title}`}
                    className="mt-6 inline-flex items-center text-sm text-[#d8b06a] transition group-hover:text-[#f2d6b2]"
                  >
                    Book a Consultation
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Coaching Method */}
        <section id="method" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">The Coaching Method</p>
            <div className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#111318]">
              {[
                ["01: Assess", "Understand your goals, lifestyle, training history, and current routine."],
                ["02: Build", "Create a personalized training and nutrition structure that fits your life."],
                ["03: Execute", "Train with purpose, track progress, and stay accountable week by week."],
                ["04: Refine", "Adjust the plan as your body, schedule, and goals evolve."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-4 px-6 py-8 md:grid-cols-[220px,1fr] md:px-10"
                >
                  <p className="font-heading text-3xl text-[#d8b06a]">{title}</p>
                  <p className="max-w-2xl text-[#c8beaf]">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Local SEO: Service Areas */}
        <section id="locations" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="grid gap-10 lg:grid-cols-[1.2fr,1fr]"
          >
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-[#121418] p-7 lg:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Service Areas</p>
                <h2 className="mt-4 font-heading text-4xl leading-tight text-[#f4efe7]">
                  Personal Training for Aurora, Newmarket, King City &amp; York Region
                </h2>
                <p className="mt-5 leading-relaxed text-[#c6bcae]">
                  Icon Body and Mind is based at Woodshed Wellness in Newmarket, offering private one-on-one in-person training for clients across York Region. Connor works with clients from Aurora, King City, Newmarket, and the greater Toronto / GTA area, both in person and through online coaching.
                </p>
                <p className="mt-4 leading-relaxed text-[#b6ad9f]">
                  Coaching is built for sustainable progress through strength training, fat loss, muscle building, nutrition plans, mobility, and accountability. Programs are tailored to your schedule, goals, and training history.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111318] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8f9cab]">Serving Clients Across</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Aurora", "Newmarket", "King City", "York Region", "Toronto / GTA"].map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-[#d8b06a]/25 bg-[#181b21] px-4 py-2 text-sm text-[#e2d8c7]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-[#d8b06a]/30 bg-[#121418] p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d8b06a]">Training Location</p>
                <h3 className="mt-3 font-heading text-2xl text-[#f0eadf]">Woodshed Wellness</h3>
                <address className="mt-3 text-sm leading-relaxed text-[#cdc2b2] not-italic">
                  1135 Stellar Dr<br />
                  Newmarket, ON L3Y 7B8
                </address>
                <div className="mt-5 space-y-2 text-sm text-[#cdc2b2]">
                  <p>
                    <a
                      href="tel:2892314638"
                      className="text-[#d8b06a] transition hover:text-[#f3dbc2]"
                    >
                      289-231-4638
                    </a>
                  </p>
                  <p>In-person training and online coaching available</p>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-full border border-[#d8b06a]/50 bg-[#d8b06a]/10 px-5 py-2 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20"
                >
                  Book a Consultation
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { title: "Private Gym Training", text: "Focused one-on-one sessions with Connor at Woodshed Wellness." },
                  { title: "Online Coaching", text: "Structured remote coaching with weekly check-ins and accountability." },
                  { title: "Custom Programs", text: "Personalized plans for strength training, fat loss, and muscle building." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-[#111318] p-5">
                    <p className="text-sm font-medium text-[#f0eadf]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#bdb3a4]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Transformations */}
        <section id="transformations" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Transformations</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">
              Results built with consistency, not shortcuts.
            </h2>
            <p className="mt-4 max-w-3xl text-[#c6bcae]">
              Real progress comes from structure, consistency, and coaching that adapts to the individual.
            </p>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[#d8b06a]">Before / After</p>
            <div className="mt-4 grid gap-6 md:mx-auto md:max-w-5xl md:grid-cols-2 lg:gap-8">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#171a20] to-[#0f1116] p-4 lg:p-5">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl">
                  <Image
                    src="/before.jpg"
                    alt="Client before: personal training transformation with Connor in York Region"
                    fill
                    className="object-cover object-center"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-[#d8b06a]/50 bg-[#0b0b0c]/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#f3dbc2]">
                    Before
                  </span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#171a20] to-[#0f1116] p-4 lg:p-5">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl">
                  <Image
                    src="/after.jpg"
                    alt="Client after: personal training transformation results with Connor in York Region"
                    fill
                    className="object-cover object-center"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-[#d8b06a]/50 bg-[#0b0b0c]/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#f3dbc2]">
                    After
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Custom plans", "Weekly accountability", "Measurable progress"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#d8b06a]/25 bg-[#121418] px-5 py-4 text-center text-sm text-[#dfd4c3]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Client Testimonials</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">
              Trusted by clients who expect lasting change.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map(({ quote, attribution }) => (
                <article key={quote} className="rounded-3xl border border-white/10 bg-[#121418] p-7">
                  <p className="font-heading text-5xl leading-none text-[#d8b06a]/80">&ldquo;</p>
                  <p className="mt-4 leading-relaxed text-[#d2c8b8]">{quote}</p>
                  <p className="mt-5 text-xs tracking-wide text-[#8f9cab]">{attribution}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Banner */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="rounded-[2rem] border border-[#d8b06a]/40 bg-gradient-to-r from-[#151920] via-[#111218] to-[#12161b] px-7 py-12 text-center shadow-[0_12px_60px_rgba(0,0,0,0.45)] sm:px-12"
          >
            <h2 className="font-heading text-4xl text-[#f4efe7]">Ready to Start Personal Training?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#c7bcae]">
              Book a consultation and take the first step toward building strength, improving your body composition, and training with real purpose.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full border border-[#d8b06a]/60 bg-[#d8b06a]/10 px-7 py-3 text-sm font-medium text-[#f2d9bc] transition hover:bg-[#d8b06a]/20"
            >
              Book a Consultation
            </a>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">FAQ</p>
            <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 rounded-3xl border border-white/10 bg-[#111318] p-2 sm:p-3">
              {faqItems.map(({ q, a }, idx) => (
                <div key={q} className="border-b border-white/10 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((prev) => (prev === idx ? -1 : idx))}
                    className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6"
                    aria-expanded={openFaqIndex === idx}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-heading text-lg text-[#f0eadf] sm:text-xl">{q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#d8b06a] transition-transform duration-300 ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    id={`faq-panel-${idx}`}
                    initial={false}
                    animate={{
                      height: openFaqIndex === idx ? "auto" : 0,
                      opacity: openFaqIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 sm:px-6">
                      <p className="leading-relaxed text-[#c8beaf]">{a}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="grid gap-8 lg:grid-cols-[1fr,1.1fr]"
          >
            <div className="rounded-3xl border border-white/10 bg-[#121418] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b06a]">Contact</p>
              <h2 className="mt-4 font-heading text-4xl text-[#f4efe7]">Book a Consultation</h2>
              <address className="mt-8 space-y-4 text-[#cdc2b2] not-italic">
                <p>
                  Phone:{" "}
                  <a
                    href="tel:2892314638"
                    className="text-[#d8b06a] transition hover:text-[#f3dbc2]"
                  >
                    289-231-4638
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:connor.steenson@hotmail.com"
                    className="text-[#d8b06a] transition hover:text-[#f3dbc2]"
                  >
                    connor.steenson@hotmail.com
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/connorsteenson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d8b06a] transition hover:text-[#f3dbc2]"
                  >
                    @connorsteenson
                  </a>
                </p>
                <p>Woodshed Wellness, 1135 Stellar Dr, Newmarket, ON L3Y 7B8</p>
                <p className="text-sm text-[#8f9cab]">In-person training in Newmarket. Online coaching available across Canada.</p>
              </address>
            </div>

            <form
              className="relative rounded-3xl border border-white/10 bg-[#111318] p-8"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.website ?? ""}
                onChange={handleFormChange}
                className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Name</span>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60"
                    type="text"
                    name="name"
                    value={formData.name ?? ""}
                    onChange={handleFormChange}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Email</span>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60"
                    type="email"
                    name="email"
                    value={formData.email ?? ""}
                    onChange={handleFormChange}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Phone</span>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60"
                    type="tel"
                    name="phone"
                    value={formData.phone ?? ""}
                    onChange={handleFormChange}
                    autoComplete="tel"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-[#d6cbbc]">
                  <span>Goal</span>
                  <select
                    className="w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60"
                    name="goal"
                    value={formData.goal ?? ""}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="" disabled>
                      Select your goal
                    </option>
                    <option value="Build Muscle">Build Muscle</option>
                    <option value="Lose Fat">Lose Fat</option>
                    <option value="Improve Strength">Improve Strength</option>
                    <option value="Online Coaching">Online Coaching</option>
                    <option value="1:1 Training">1:1 Training</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 block space-y-2 text-sm text-[#d6cbbc]">
                <span>Message</span>
                <textarea
                  className="min-h-36 w-full rounded-xl border border-white/15 bg-[#181c22] px-4 py-3 text-[#f4efe7] outline-none transition focus:border-[#d8b06a]/60"
                  name="message"
                  value={formData.message ?? ""}
                  onChange={handleFormChange}
                  required
                />
              </label>
              {formStatus === "success" && (
                <p className="mt-5 rounded-xl border border-[#d8b06a]/30 bg-[#d8b06a]/10 px-4 py-3 text-sm text-[#f3dbc2]">
                  Thank you. Your consultation request has been sent. Connor will review it and get back to you soon.
                </p>
              )}
              {formStatus === "error" && (
                <p className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {formError}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex rounded-full border border-[#d8b06a]/60 bg-[#d8b06a]/10 px-6 py-3 text-sm font-medium text-[#f3dbc2] transition hover:bg-[#d8b06a]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Book a Consultation"}
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0a0a0b]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr,1fr,1fr] lg:px-10">
          <div>
            <p className="font-heading text-2xl text-[#f2ede4]">Icon Body and Mind</p>
            <p className="mt-4 max-w-sm text-[#b8afa2]">
              Private personal training in Aurora, Newmarket, and York Region. Strength, body composition, and lasting results.
            </p>
          </div>
          <nav aria-label="Footer navigation">
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
          </nav>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#d8b06a]">Social</p>
            <ul className="mt-4 space-y-2 text-[#cfc4b3]">
              <li>
                <a
                  href="https://www.instagram.com/connorsteenson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#d8b06a]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 px-6 py-5 text-center text-xs tracking-wide text-[#8b8479]">
          © {new Date().getFullYear()} Icon Body and Mind. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
