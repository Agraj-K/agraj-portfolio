import { Github, Linkedin, Mail, ExternalLink, MapPin, Dumbbell, Handshake } from "lucide-react";
import { useEffect, useState } from "react";

/* ─── scroll progress ────────────────────────────────── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ─── live IST clock ──────────────────────────────────── */
function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── data ────────────────────────────────────────────── */
const projects = [
  { num: "01", title: "Smart Email Prioritization",        year: "2026", tags: ["Python", "DistilBERT", "NLP"],           link: "https://github.com/Agraj-K/Smart-Email-Prioritization" },
  { num: "02", title: "Codify — Adaptive Coding System",   year: "2026", tags: ["NLP", "ML", "React"],                    link: "https://github.com/Agraj-K/Codify" },
  { num: "03", title: "Lifestyle-Aware Diabetes Prediction",year: "2025", tags: ["ResNet-50", "TensorFlow", "CNN"],        link: "https://github.com/Agraj-K" },
  { num: "04", title: "Air Quality Prediction & Analysis", year: "2025", tags: ["Random Forest", "CatBoost", "SMOTE"],    link: "https://github.com/Agraj-K" },
  { num: "05", title: "LifeArc",                           year: "2026", tags: ["JavaScript"],                             link: "https://github.com/Agraj-K/LifeArc" },
  { num: "06", title: "Steam Analytics Processing",        year: "2026", tags: ["Scala", "HDFS"],                          link: "https://github.com/Agraj-K/steam-analytics-processing" },
  { num: "07", title: "Wordle Solver Bot",                 year: "2025", tags: ["Python", "Selenium"],                    link: "https://github.com/Agraj-K/Wordle-Solver" },
];

const skills = [
  "Python","Java","NumPy","Pandas",
  "Scikit-learn","TensorFlow","PyTorch","NLP",
  "React","Node.js","Git","Linux","ROS","Arduino",
];

const education = [
  { year: "2023 – Present", title: "B.Tech · Computer Science & AI",  sub: "Amrita Vishwa Vidyapeetham", detail: "CGPA 8.33" },
  { year: "2020 – 2023",    title: "Higher Secondary · Class 12",       sub: "Bharatiya Vidya Bhavan",     detail: "90.8%"     },
  { year: "2020",            title: "Secondary · Class 10",             sub: "Bharatiya Vidya Bhavan",     detail: "92%"       },
];

const achievements = [
  { year: "2025", title: "Bronze Medal — Kerala State Benchpress Championship", org: "Kerala State Powerlifting Association" },
  { year: "2025", title: "AI & ML Outreach Educator",                           org: "Padmasree Central School, Adoor"       },
  { year: "2023", title: "Accelerobotics Competition Winner",                   org: "NIT Calicut — Tatva Tech Fest"         },
  { year: "2018", title: "FLL Most Innovative Project",                          org: "India STEM Foundation"                 },
];

/* ─── sub-components ──────────────────────────────────── */
function Divider() {
  return <hr className="border-none border-t border-white/[0.06] mx-auto max-w-3xl px-6" style={{ borderTopWidth: 1 }} />;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
      {children}
    </h2>
  );
}

/* ─── main ────────────────────────────────────────────── */
export default function Index() {
  const time = useClock();
  const progress = useScrollProgress();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-white" style={{ background: "#0a0a0a", fontFamily: "'Inter', sans-serif" }}>

      {/* ── SCROLL PROGRESS ─────────────────────── */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      {/* ── NAV ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07]"
        style={{ background: "rgba(10,10,10,0.88)", backdropFilter: "blur(14px)" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <span className="text-base sm:text-lg font-bold tracking-tight">A.</span>
          <nav className="flex items-center gap-4 sm:gap-7">
            {[
              { label: "GitHub",   href: "https://github.com/Agraj-K",              icon: <Github   size={15} /> },
              { label: "LinkedIn", href: "https://linkedin.com/",                    icon: <Linkedin size={15} /> },
              { label: "Email",    href: "mailto:agrajkuldeep@gmail.com",            icon: <Mail     size={15} /> },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] text-white/40 hover:text-white transition-colors duration-200">
                {l.icon}
                {/* hide text on very small screens */}
                <span className="hidden sm:inline">{l.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-14 sm:pb-20">

        {/* status badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8 text-[12px] text-white/50"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="status-dot w-[7px] h-[7px] rounded-full bg-green-400 inline-block flex-shrink-0" />
          Available for opportunities
        </div>

        {/* name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-4 sm:mb-5"
          style={{ letterSpacing: "-0.04em" }}>
          Agraj K.
        </h1>

        {/* role */}
        <p className="text-sm sm:text-base text-white/40 mb-4 font-normal">
          CS &amp; AI Undergrad · Amrita Vishwa Vidyapeetham · CGPA 8.33
        </p>

        {/* bio */}
        <p className="text-sm sm:text-[15px] text-white/65 leading-relaxed max-w-xl mb-8 sm:mb-10">
          Motivated CS & AI undergraduate with strong foundations in programming, machine learning, and
          software development. Passionate about AI/ML, data engineering, automation, and intelligent systems —
          with a keen interest in building scalable, innovative applications.
        </p>

        {/* info pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { icon: <MapPin     size={11} />, label: "Kollam, India"   },
            { icon: <Dumbbell   size={11} />, label: "State Powerlifter" },
            { icon: <Handshake  size={11} />, label: "Head Boy '22"    },
          ].map((p) => (
            <span key={p.label}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] text-white/35"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {p.icon}{p.label}
            </span>
          ))}
          {time && (
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] text-white/35 tabular-nums"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              🕐 IST {time}
            </span>
          )}
        </div>
      </section>

      <Divider />

      {/* ── PROJECTS ────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <SectionHeading>Projects.</SectionHeading>

        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
            className="block group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            <div
              className="flex items-center gap-3 sm:gap-5 py-4 sm:py-[18px] transition-all duration-200"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                borderLeft: hovered === i ? "2px solid hsl(263,60%,58%)" : "2px solid transparent",
                paddingLeft: hovered === i ? 12 : 0,
              }}>

              {/* number */}
              <span className="text-[11px] text-white/20 font-medium tabular-nums w-5 flex-shrink-0 hidden sm:block">
                {p.num}
              </span>

              {/* title */}
              <span className="flex-1 text-[14px] sm:text-[15px] font-medium text-white/75 group-hover:text-white transition-colors duration-200 leading-snug">
                {p.title}
              </span>

              {/* tags — hidden on mobile */}
              <div className="hidden md:flex gap-1.5 flex-shrink-0">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] text-white/30 rounded px-2 py-0.5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* year + icon */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[12px] text-white/20 hidden sm:block">{p.year}</span>
                <ExternalLink size={13}
                  className="transition-colors duration-200"
                  style={{ color: hovered === i ? "hsl(263,60%,68%)" : "rgba(255,255,255,0.15)" }} />
              </div>
            </div>
          </a>
        ))}

        <a href="https://github.com/Agraj-K" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-[13px] text-white/30 hover:text-white transition-colors duration-200">
          <Github size={13} />
          View all on GitHub ↗
        </a>
      </section>

      <Divider />

      {/* ── SKILLS ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <SectionHeading>Skills.</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s}
              className="text-[13px] text-white/45 hover:text-white rounded-md px-3.5 py-1.5 cursor-default transition-all duration-150"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── EDUCATION ───────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <SectionHeading>Education.</SectionHeading>
        {education.map((e, i) => (
          <div key={i} className="flex items-baseline gap-3 sm:gap-5 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-[11px] text-white/20 flex-shrink-0 w-28 hidden sm:block">{e.year}</span>
            <div className="flex-1 min-w-0">
              <span className="text-[14px] sm:text-[15px] font-medium text-white/80">{e.title}</span>
              <span className="block sm:inline text-[12px] sm:text-[13px] text-white/30 sm:ml-2 mt-0.5 sm:mt-0">{e.sub}</span>
            </div>
            <span className="text-[12px] sm:text-[13px] text-white/30 flex-shrink-0">{e.detail}</span>
          </div>
        ))}
      </section>

      <Divider />

      {/* ── ACHIEVEMENTS ────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <SectionHeading>Achievements.</SectionHeading>
        {achievements.map((a, i) => (
          <div key={i} className="flex items-baseline gap-3 sm:gap-5 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-[11px] text-white/20 flex-shrink-0 w-8 hidden sm:block">{a.year}</span>
            <div className="flex-1 min-w-0">
              <span className="text-[14px] sm:text-[15px] font-medium text-white/80">{a.title}</span>
              <span className="block sm:inline text-[12px] sm:text-[13px] text-white/30 sm:ml-2 mt-0.5 sm:mt-0">{a.org}</span>
            </div>
            <span className="text-[11px] text-white/20 flex-shrink-0 sm:hidden">{a.year}</span>
          </div>
        ))}
      </section>

      <Divider />

      {/* ── CONTACT ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <SectionHeading>Let's talk.</SectionHeading>
        <p className="text-[14px] sm:text-[15px] text-white/40 mb-8 max-w-sm leading-relaxed">
          Open to research collaborations, internships, and interesting projects. I reply fast.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "agrajkuldeep@gmail.com", href: "mailto:agrajkuldeep@gmail.com", icon: <Mail     size={14} /> },
            { label: "GitHub",                  href: "https://github.com/Agraj-K",   icon: <Github   size={14} /> },
            { label: "LinkedIn",                href: "https://linkedin.com/",         icon: <Linkedin size={14} /> },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-white/45 hover:text-white rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {c.icon}{c.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-6 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <span className="text-[12px] text-white/20">© 2025 Agraj K.</span>
          <span className="text-[12px] text-white/20">Built with React & TypeScript</span>
        </div>
      </footer>
    </div>
  );
}
