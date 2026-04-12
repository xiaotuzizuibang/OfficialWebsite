"use client";

import { useEffect, useRef, useState } from "react";

/* ──────────────── Intersection Observer Hook ──────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ──────────────── Navbar ──────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          BugLive
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">
            关于我们
          </a>
          <a href="#business" className="hover:text-white transition-colors">
            核心业务
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            联系方式
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ──────────────── Hero Section ──────────────── */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0f_70%)]" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary">
          AI · 直播 · 数字人
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">BugLive</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4">
          专注直播技术和数字人技术的研发
        </p>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          注重扩散模型在音视频技术中的应用
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium
                     hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          联系我们
        </a>
      </div>
    </section>
  );
}

/* ──────────────── About Section ──────────────── */
export function AboutSection() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            关于我们
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">愿景</h3>
              <p className="text-gray-400 leading-relaxed">
                致力于推动直播技术与数字人技术的前沿探索，将 AI
                扩散模型深度融合到音视频领域，构建下一代智能化内容生成与交互体验。
              </p>
            </div>
            <div className="card-glass">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                学术方向
              </h3>
              <p className="text-gray-400 leading-relaxed">
                研究方向覆盖扩散模型（Diffusion
                Models）、实时音视频处理、数字人生成与驱动、语音合成等前沿领域，持续产出高质量学术成果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Business Section ──────────────── */
export function BusinessSection() {
  const { ref, visible } = useInView();

  const items = [
    {
      icon: "📡",
      title: "直播技术",
      desc: "低延迟、高并发的实时音视频传输架构，支持超清画质与智能编码优化。",
    },
    {
      icon: "🧑‍💻",
      title: "数字人技术",
      desc: "基于扩散模型的高逼真数字人生成与实时驱动，涵盖表情、语音、动作的端到端合成。",
    },
    {
      icon: "🧠",
      title: "扩散模型应用",
      desc: "探索 Diffusion Models 在视频生成、超分辨率、风格迁移等音视频场景中的前沿应用。",
    },
    {
      icon: "🎙️",
      title: "智能音视频处理",
      desc: "AI 驱动的降噪、增强、实时翻译与语音克隆，赋能直播与内容创作。",
    },
  ];

  return (
    <section id="business" className="relative">
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="section-container relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            核心业务
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div key={item.title} className="card-glass group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Contact Section (姓名 + 邮箱) ──────────────── */
export function ContactSection() {
  const { ref, visible } = useInView();

  const members = [
    { name: "Qixin", email: "fanfan@buglive.icu" },
    { name: "Yanan", email: "fanfan@buglive.icu" },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            联系我们
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {members.map((m) => (
              <div key={m.name} className="card-glass text-center animate-glow">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white">
                  {m.name[0]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {m.name}
                </h3>
                <a
                  href={`mailto:${m.email}`}
                  className="text-accent hover:underline"
                >
                  {m.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Footer ──────────────── */
export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} BugLive. All rights reserved.</p>
        <p>
          <a
            href="https://buglive.icu"
            className="hover:text-accent transition-colors"
          >
            buglive.icu
          </a>
        </p>
      </div>
    </footer>
  );
}
