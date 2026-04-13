"use client";

import Image from "next/image";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-monet-cream/70 backdrop-blur-md border-b border-monet-petal/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold monet-text italic">
          BugLive
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-monet-water">
          <a href="#about" className="hover:text-monet-pond transition-colors duration-300">
            关于我们
          </a>
          <a href="#business" className="hover:text-monet-pond transition-colors duration-300">
            核心业务
          </a>
          <a href="#contact" className="hover:text-monet-pond transition-colors duration-300">
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
      {/* Hero photo — semi-transparent */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Monet-style soft overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-monet-cream/60 via-monet-mist/30 to-monet-sky/50" />
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-monet-lilac/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-monet-moss/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-monet-rose/10 rounded-full blur-3xl animate-shimmer" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="inline-block px-5 py-2 mb-8 rounded-full border border-monet-water/30 bg-white/30 backdrop-blur-sm text-sm text-monet-pond tracking-widest">
          AI · 直播 · 数字人
        </div>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight italic">
          <span className="monet-text">BugLive</span>
        </h1>
        <p className="text-xl md:text-2xl text-monet-water/90 max-w-2xl mx-auto mb-4 font-light">
          专注直播技术和数字人技术的研发
        </p>
        <p className="text-lg text-monet-pond/70 max-w-xl mx-auto mb-12">
          注重扩散模型在音视频技术中的应用
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-3.5 rounded-full bg-gradient-to-r from-monet-water to-monet-lilac text-white font-medium tracking-wide
                     hover:shadow-xl hover:shadow-monet-lilac/20 transition-all duration-500 hover:-translate-y-1"
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
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 monet-text inline-block italic">
            关于我们
          </h2>
          <div className="divider-monet mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-monet">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-monet-lilac/30 to-monet-water/30 flex items-center justify-center text-2xl mb-5">
                �
              </div>
              <h3 className="text-xl font-semibold text-monet-pond mb-3">愿景</h3>
              <p className="text-monet-water leading-relaxed">
                致力于推动直播技术与数字人技术的前沿探索，将 AI
                扩散模型深度融合到音视频领域，构建下一代智能化内容生成与交互体验。
              </p>
            </div>
            <div className="card-monet">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-monet-moss/30 to-monet-pond/30 flex items-center justify-center text-2xl mb-5">
                🌿
              </div>
              <h3 className="text-xl font-semibold text-monet-pond mb-3">
                学术方向
              </h3>
              <p className="text-monet-water leading-relaxed">
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
      icon: "🌊",
      title: "直播技术",
      desc: "低延迟、高并发的实时音视频传输架构，支持超清画质与智能编码优化。",
      gradient: "from-monet-water/20 to-monet-sky/20",
    },
    {
      icon: "�",
      title: "数字人技术",
      desc: "基于扩散模型的高逼真数字人生成与实时驱动，涵盖表情、语音、动作的端到端合成。",
      gradient: "from-monet-rose/20 to-monet-lilac/20",
    },
    {
      icon: "🌀",
      title: "扩散模型应用",
      desc: "探索 Diffusion Models 在视频生成、超分辨率、风格迁移等音视频场景中的前沿应用。",
      gradient: "from-monet-lilac/20 to-monet-water/20",
    },
    {
      icon: "�",
      title: "智能音视频处理",
      desc: "AI 驱动的降噪、增强、实时翻译与语音克隆，赋能直播与内容创作。",
      gradient: "from-monet-moss/20 to-monet-pond/20",
    },
  ];

  return (
    <section id="business" className="relative">
      <div className="absolute inset-0 bg-white/20" />
      <div className="section-container relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 monet-text inline-block italic">
            核心业务
          </h2>
          <div className="divider-monet mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div key={item.title} className="card-monet group">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-monet-pond mb-2">
                  {item.title}
                </h3>
                <p className="text-monet-water text-sm leading-relaxed">
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
    { name: "Yanan", email: "ee@buglive.icu" },
    { name: "Bug", email: "doudou@buglive.icu" },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 monet-text inline-block italic">
            联系我们
          </h2>
          <div className="divider-monet mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {members.map((m) => (
              <div key={m.name} className="card-monet text-center">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-monet-lilac/40 to-monet-water/40 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-monet-lilac/15">
                  {m.name[0]}
                </div>
                <h3 className="text-xl font-semibold text-monet-pond mb-2">
                  {m.name}
                </h3>
                <a
                  href={`mailto:${m.email}`}
                  className="text-monet-water hover:text-monet-lilac transition-colors duration-300 underline underline-offset-4 decoration-monet-petal"
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
    <footer className="border-t border-monet-petal/30">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-monet-water/70">
        <p>&copy; {new Date().getFullYear()} BugLive. All rights reserved.</p>
        <p>
          <a
            href="https://buglive.icu"
            className="hover:text-monet-lilac transition-colors duration-300"
          >
            buglive.icu
          </a>
        </p>
      </div>
    </footer>
  );
}
