"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // ======== PARTICLE CANVAS ========
    const canvas = document.getElementById("heroCanvas") as HTMLCanvasElement;
    if (!canvas) return
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number = 1000, H: number = 800;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const hero = document.querySelector(".hero") as HTMLElement;
      if (!hero) return;
      W = hero.offsetWidth;
      H = hero.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    const palette = [
      [197, 166, 107],
      [196, 160, 185],
      [212, 160, 160],
      [139, 175, 142],
      [155, 138, 173],
    ];

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: number[];
      glow: number;
      phase: number;
      speed: number;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * (W || 1000),
        y: Math.random() * (H || 800),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: 1 + Math.random() * 3,
        color: palette[Math.floor(Math.random() * palette.length)],
        glow: 8 + Math.random() * 20,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1,
      });
    }

    let t = 0;
    let animationId: number;

    function draw() {
      t += 0.01;
      ctx!.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            const c = particles[i].color;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle =
              "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + alpha + ")";
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const brightness = 0.5 + 0.5 * Math.sin(t * p.speed + p.phase);
        const c = p.color;

        const grad = ctx!.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.glow * brightness
        );
        grad.addColorStop(
          0,
          "rgba(" +
            c[0] +
            "," +
            c[1] +
            "," +
            c[2] +
            "," +
            0.2 * brightness +
            ")"
        );
        grad.addColorStop(
          1,
          "rgba(" + c[0] + "," + c[1] + "," + c[2] + ",0)"
        );
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.glow * brightness, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(
          p.x,
          p.y,
          p.r * (0.7 + 0.3 * brightness),
          0,
          Math.PI * 2
        );
        ctx!.fillStyle =
          "rgba(" +
          c[0] +
          "," +
          c[1] +
          "," +
          c[2] +
          "," +
          (0.4 + 0.5 * brightness) +
          ")";
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      resize();
      for (let i = 0; i < particles.length; i++) {
        particles[i].x = Math.random() * W;
        particles[i].y = Math.random() * H;
      }
    }
    window.addEventListener("resize", handleResize);

    // ======== NAVBAR SCROLL ========
    const navbar = document.getElementById("navbar");
    function handleScroll() {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // ======== INTERSECTION OBSERVER ========
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));

    // ======== MOBILE MENU ========
    function handleNavLinkClick() {
      document.getElementById("navLinks")?.classList.remove("open");
    }
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // ======== SMOOTH SCROLL ========
    function handleAnchorClick(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    // ======== CLEANUP ========
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      revealObserver.disconnect();
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  function toggleMenu() {
    document.getElementById("navLinks")?.classList.toggle("open");
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* ==================== NAV ==================== */
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:1.1rem 3rem;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(25px);background:rgba(251,248,244,0.75);border-bottom:1px solid rgba(195,166,107,0.08);transition:all .4s ease}
nav.scrolled{padding:.8rem 3rem;background:rgba(251,248,244,0.95);box-shadow:0 2px 30px rgba(60,43,61,0.04)}
.nav-brand{text-decoration:none;display:block}
.nav-brand-name{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:600;color:var(--charcoal);line-height:1.2}
.nav-brand-sub{font-weight:300;color:var(--text-muted);font-size:.68rem;display:block;letter-spacing:.3em;text-transform:uppercase;font-family:'Outfit',sans-serif;margin-top:1px}
.nav-links{display:flex;gap:2.5rem;align-items:center;list-style:none}
.nav-links a{color:var(--text-secondary);text-decoration:none;font-size:.8rem;font-weight:400;letter-spacing:.14em;text-transform:uppercase;transition:color .3s;position:relative}
.nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1.5px;background:var(--soft-gold);transition:width .3s ease;border-radius:2px}
.nav-links a:hover{color:var(--charcoal)}.nav-links a:hover::after{width:100%}
.nav-cta{padding:.55rem 1.5rem!important;background:var(--charcoal)!important;color:#fff!important;border-radius:100px!important;font-size:.78rem!important;letter-spacing:.14em!important;transition:all .3s ease!important}
.nav-cta:hover{background:var(--deep-plum)!important;transform:translateY(-1px);box-shadow:0 6px 20px rgba(44,38,54,0.15)}
.nav-cta::after{display:none!important}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;z-index:101;background:none;border:none}
.hamburger span{width:22px;height:1.5px;background:var(--charcoal);display:block}

/* ==================== HERO ==================== */
.hero{
  position:relative;
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  text-align:center;
  overflow:hidden;
  background:#F5EDE3;
}
.hero::before{
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(ellipse 50% 60% at 50% 40%, rgba(212,168,85,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 70% 50% at 25% 60%, rgba(196,160,185,0.1) 0%, transparent 60%),
    radial-gradient(ellipse 60% 55% at 75% 35%, rgba(212,160,160,0.09) 0%, transparent 60%),
    radial-gradient(ellipse 80% 80% at 50% 50%, rgba(197,166,107,0.06) 0%, transparent 80%);
  z-index:1;
}
.hero::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:120px;
  background:linear-gradient(to bottom,transparent,var(--cream));
  z-index:4;pointer-events:none;
}
#heroCanvas{position:absolute;inset:0;width:100%;height:100%;z-index:2}
.zodiac-wheel{
  position:absolute;
  width:min(700px,90vw);height:min(700px,90vw);
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  z-index:3;pointer-events:none;
  animation:wheelSpin 240s linear infinite;
}
@keyframes wheelSpin{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
.inner-wheel{
  position:absolute;
  width:min(480px,62vw);height:min(480px,62vw);
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  z-index:3;pointer-events:none;
  animation:wheelSpinR 180s linear infinite;
}
@keyframes wheelSpinR{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}
.sacred-core{
  position:absolute;
  width:min(300px,40vw);height:min(300px,40vw);
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  z-index:3;pointer-events:none;
  animation:wheelSpin 140s linear infinite;
}
.hero-glow{
  position:absolute;
  width:500px;height:500px;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  border-radius:50%;
  background:radial-gradient(circle,rgba(197,166,107,0.15) 0%,rgba(197,166,107,0.06) 40%,transparent 70%);
  z-index:3;pointer-events:none;
  animation:glowPulse 6s ease-in-out infinite;
}
@keyframes glowPulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.8}50%{transform:translate(-50%,-50%) scale(1.08);opacity:1}}
.hero-content{max-width:760px;position:relative;z-index:10;padding:6rem 2rem 4rem}
.hero-badge{
  display:inline-flex;align-items:center;gap:.6rem;
  padding:.6rem 1.6rem;
  background:rgba(255,255,255,0.75);
  border:1px solid rgba(197,166,107,0.3);
  border-radius:100px;
  font-size:.68rem;letter-spacing:.3em;text-transform:uppercase;
  color:var(--warm-gold);font-weight:500;
  backdrop-filter:blur(20px);
  box-shadow:0 4px 25px rgba(197,166,107,0.1);
  opacity:0;animation:fadeUp .8s .3s ease forwards;
}
.hero-badge .dot{
  width:7px;height:7px;background:var(--soft-gold);border-radius:50%;
  box-shadow:0 0 10px rgba(197,166,107,0.5);
  animation:pulseGlow 2s ease-in-out infinite;
}
@keyframes pulseGlow{0%,100%{box-shadow:0 0 8px rgba(197,166,107,0.3)}50%{box-shadow:0 0 22px rgba(197,166,107,0.7)}}
.hero h1{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(3.2rem,7vw,6rem);
  font-weight:300;line-height:1.06;
  margin-bottom:1.5rem;letter-spacing:-.02em;
  color:var(--charcoal);
  opacity:0;animation:fadeUp 1s .5s ease forwards;
}
.hero h1 em{
  font-style:italic;font-weight:500;
  background:linear-gradient(135deg,#D4A855 0%,#C5A66B 30%,#B8935A 60%,#D4A855 100%);
  background-size:200% 200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:goldShimmer 4s ease-in-out infinite;
}
.hero-sub{
  font-size:1.08rem;font-weight:300;color:var(--text-secondary);
  line-height:1.8;max-width:520px;margin:0 auto 2.5rem;
  opacity:0;animation:fadeUp .9s .8s ease forwards;
}
.hero-buttons{
  display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;
  opacity:0;animation:fadeUp .9s 1.1s ease forwards;
}
.scroll-indicator{
  position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:.5rem;
  color:var(--text-muted);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;z-index:10;
  opacity:0;animation:fadeUp .8s 1.8s ease forwards;
}
.scroll-line{width:1px;height:32px;background:linear-gradient(to bottom,var(--soft-gold),transparent);animation:scrollPulse 2s ease-in-out infinite}
@keyframes scrollPulse{0%,100%{opacity:1;transform:scaleY(1)}50%{opacity:.3;transform:scaleY(.5)}}

/* ==================== BG ORBS ==================== */
.bg-orbs{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.bg-orb{position:absolute;border-radius:50%;filter:blur(80px);opacity:.3;animation:orbFloat 25s ease-in-out infinite alternate}
.bg-orb:nth-child(1){width:500px;height:500px;background:var(--lavender);top:-10%;left:-5%}
.bg-orb:nth-child(2){width:400px;height:400px;background:var(--peach);top:30%;right:-8%;animation-delay:-8s;animation-duration:30s}
.bg-orb:nth-child(3){width:350px;height:350px;background:var(--sage);bottom:10%;left:20%;animation-delay:-15s;animation-duration:35s}
@keyframes orbFloat{0%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-20px) scale(1.05)}100%{transform:translate(-20px,15px) scale(.95)}}

/* ==================== SECTIONS ==================== */
section{position:relative;z-index:1;padding:7rem 2rem}
.section-label{font-size:.68rem;letter-spacing:.35em;text-transform:uppercase;color:var(--mauve);margin-bottom:.8rem;font-weight:500;display:flex;align-items:center;gap:1rem}
.section-label::before,.section-label::after{content:'';flex:0 0 24px;height:1px;background:linear-gradient(90deg,var(--mauve),transparent)}
.section-label::after{background:linear-gradient(90deg,transparent,var(--mauve))}
.section-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.4rem,4.5vw,3.5rem);font-weight:400;line-height:1.15;margin-bottom:1rem;color:var(--charcoal)}
.section-subtitle{font-size:1.02rem;color:var(--text-secondary);font-weight:300;line-height:1.75;max-width:560px}
.container{max-width:1140px;margin:0 auto}

/* ==================== ABOUT ==================== */
.about{padding-top:7rem;padding-bottom:8rem;overflow:hidden}
.about::before{content:'';position:absolute;top:50%;right:-200px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(232,224,240,0.25),transparent 70%);pointer-events:none;transform:translateY(-50%)}
.about-bg-decor{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.about-bg-ring{position:absolute;top:50%;left:28%;transform:translate(-50%,-50%);width:min(750px,95vw);height:min(750px,95vw);animation:spin 200s linear infinite}
.about-bg-ring-2{position:absolute;top:45%;left:30%;transform:translate(-50%,-50%);width:min(550px,70vw);height:min(550px,70vw);animation:wheelSpinR 160s linear infinite}
.about-glow-1{position:absolute;top:20%;left:10%;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.15) 0%,transparent 70%);animation:glowPulse 8s ease-in-out infinite}
.about-glow-2{position:absolute;bottom:15%;right:5%;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(196,160,185,0.14) 0%,transparent 70%);animation:glowPulse 10s 3s ease-in-out infinite}
.about-glow-3{position:absolute;top:50%;left:25%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.12) 0%,rgba(245,237,227,0.08) 40%,transparent 70%);animation:glowPulse 7s 1s ease-in-out infinite}
.about .about-grid{position:relative;z-index:1}
.about-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:5rem;align-items:center}
.about-visual{position:relative}
.about-image-frame{position:relative;aspect-ratio:3/3.8;border-radius:250px 250px 24px 24px;overflow:hidden;background:linear-gradient(160deg,rgba(243,239,248,0.8),rgba(251,240,234,0.7) 35%,rgba(245,237,227,0.8) 65%,rgba(249,240,235,0.7));border:1.5px solid rgba(195,166,107,0.18);box-shadow:0 30px 90px rgba(60,43,61,0.1),0 0 0 1px rgba(197,166,107,0.06) inset,0 0 80px rgba(197,166,107,0.04)}
.about-image-frame::before{content:'';position:absolute;inset:-4px;border-radius:254px 254px 28px 28px;background:linear-gradient(180deg,rgba(197,166,107,0.2) 0%,rgba(197,166,107,0.06) 30%,transparent 50%,rgba(196,160,185,0.06) 80%,rgba(196,160,185,0.12) 100%);z-index:-1}
.about-image-inner{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}
.about-mandala{opacity:.2;animation:spin 90s linear infinite}
.about-image-frame::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:120%;height:120%;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.06) 0%,transparent 60%);pointer-events:none;animation:glowPulse 6s ease-in-out infinite}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.about-photo-label{position:absolute;bottom:0;left:0;right:0;padding:2.5rem;background:linear-gradient(to top,rgba(251,248,244,0.95),rgba(251,248,244,0.4) 60%,transparent);text-align:center}
.about-photo-label span{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:500;color:var(--charcoal);font-style:italic}
.floating-badge{position:absolute;bottom:3rem;left:-1.5rem;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border:1px solid rgba(195,166,107,0.15);border-radius:18px;padding:1.1rem 1.5rem;display:flex;align-items:center;gap:.8rem;box-shadow:0 12px 40px rgba(60,43,61,0.08),0 0 0 1px rgba(255,255,255,0.5) inset;z-index:2;animation:badgeFloat 6s ease-in-out infinite}
@keyframes badgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.floating-badge .number{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:700;background:linear-gradient(135deg,#D4A855,#C5A66B,#B8935A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.floating-badge .label{font-size:.68rem;color:var(--text-secondary);letter-spacing:.08em;text-transform:uppercase;line-height:1.4}
.floating-badge-2{position:absolute;top:2rem;right:-1.5rem;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border:1px solid rgba(195,166,107,0.15);border-radius:16px;padding:.9rem 1.3rem;display:flex;align-items:center;gap:.6rem;box-shadow:0 12px 40px rgba(60,43,61,0.08),0 0 0 1px rgba(255,255,255,0.5) inset;z-index:2;animation:badgeFloat 6s 1.5s ease-in-out infinite}
.floating-badge-2 .icon-circle{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--lavender-light),var(--peach-light));display:flex;align-items:center;justify-content:center;font-size:1rem;color:var(--soft-gold)}
.floating-badge-2 .text{font-size:.72rem;font-weight:500;color:var(--charcoal);letter-spacing:.05em}
.about-text h3{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:400;margin-bottom:1.5rem;line-height:1.2;color:var(--charcoal)}
.about-text h3 em{color:var(--warm-gold);font-style:italic}
.about-text p{color:var(--text-secondary);font-weight:300;line-height:1.85;margin-bottom:1.2rem;font-size:.95rem}
.about-text p strong{font-weight:500;color:var(--charcoal)}
.about-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem;padding-top:2.2rem;border-top:1px solid rgba(44,38,54,0.06);position:relative}
.about-stats::before{content:'';position:absolute;top:-1px;left:0;width:80px;height:2px;background:linear-gradient(90deg,var(--soft-gold),transparent)}
.stat-item{text-align:center}
.stat-item .stat-number{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:600;background:linear-gradient(135deg,#D4A855,#C5A66B);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1}
.stat-item .stat-label{font-size:.68rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.16em;margin-top:.4rem}

/* ==================== SERVICES ==================== */
.services{padding:8rem 2rem 7rem;position:relative;overflow:hidden}
.services::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,var(--cream),rgba(243,239,248,0.3) 30%,rgba(237,243,238,0.2) 70%,var(--cream));pointer-events:none}
.services-bg-decor{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.services-bg-ring{position:absolute;top:50%;right:-15%;transform:translateY(-50%);width:min(800px,100vw);height:min(800px,100vw);animation:spin 220s linear infinite}
.services-bg-ring-2{position:absolute;top:40%;left:-10%;transform:translateY(-50%);width:min(500px,65vw);height:min(500px,65vw);animation:wheelSpinR 180s linear infinite}
.services-glow-1{position:absolute;top:15%;right:5%;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(196,160,185,0.15) 0%,transparent 70%);animation:glowPulse 9s ease-in-out infinite}
.services-glow-2{position:absolute;bottom:10%;left:8%;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.14) 0%,transparent 70%);animation:glowPulse 11s 2s ease-in-out infinite}
.services-glow-3{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(139,175,142,0.1) 0%,transparent 60%);animation:glowPulse 8s 4s ease-in-out infinite}
.services-header{text-align:center;margin-bottom:4rem;position:relative;z-index:1}
.services-header .section-label{justify-content:center}
.services-header .section-subtitle{margin:0 auto}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;position:relative;z-index:1}
.service-card{padding:2.5rem 2rem;background:rgba(255,255,255,0.75);backdrop-filter:blur(15px);border:1px solid rgba(195,166,107,0.08);border-radius:24px;transition:all .5s cubic-bezier(.23,1,.32,1);position:relative;overflow:hidden}
.service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--soft-gold),transparent);opacity:0;transition:opacity .5s ease}
.service-card::after{content:'';position:absolute;top:-50%;right:-50%;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.04),transparent 70%);pointer-events:none;transition:all .6s ease}
.service-card:hover{transform:translateY(-8px);background:rgba(255,255,255,0.98);border-color:rgba(195,166,107,0.2);box-shadow:0 20px 60px rgba(60,43,61,0.1),0 0 0 1px rgba(197,166,107,0.08) inset}
.service-card:hover::before{opacity:1}
.service-card:hover::after{top:-30%;right:-30%}
.service-icon{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem;position:relative}
.service-icon::after{content:'';position:absolute;inset:-4px;border-radius:19px;background:inherit;opacity:.3;filter:blur(8px);z-index:-1}
.service-icon.astrology{background:linear-gradient(135deg,var(--peach-light),var(--peach));color:var(--dusty-rose)}
.service-icon.tarot{background:linear-gradient(135deg,var(--lavender-light),var(--lavender));color:var(--mauve)}
.service-icon.vastu{background:linear-gradient(135deg,var(--sage-light),var(--sage));color:#7BA88A}
.service-icon.reiki{background:linear-gradient(135deg,var(--blush-light),var(--blush));color:var(--dusty-rose)}
.service-icon.past-life{background:linear-gradient(135deg,var(--lavender-light),var(--lavender));color:#9B8AAD}
.service-icon.numerology{background:linear-gradient(135deg,var(--sage-light),var(--sage));color:#8BAF8E}
.service-card h3{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:500;margin-bottom:.8rem;color:var(--charcoal)}
.service-card p{font-size:.88rem;color:var(--text-secondary);font-weight:300;line-height:1.75}
.service-card .learn-more{display:inline-flex;align-items:center;gap:.4rem;margin-top:1.4rem;font-size:.75rem;color:var(--warm-gold);letter-spacing:.1em;text-transform:uppercase;font-weight:500;opacity:0;transform:translateY(6px);transition:all .4s ease;text-decoration:none}
.service-card:hover .learn-more{opacity:1;transform:translateY(0)}
.service-card .card-number{position:absolute;top:1.5rem;right:1.8rem;font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:700;color:rgba(197,166,107,0.06);line-height:1}

/* ==================== MARQUEE ==================== */
.marquee-section{padding:3rem 0;overflow:hidden;border-top:1px solid rgba(197,166,107,0.08);border-bottom:1px solid rgba(197,166,107,0.08);background:linear-gradient(90deg,var(--cream),rgba(243,239,248,0.2),var(--cream));position:relative}
.marquee-track{display:flex;animation:marquee 40s linear infinite;width:max-content}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.marquee-item{flex-shrink:0;padding:0 2.5rem;font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400;font-style:italic;color:var(--text-muted);white-space:nowrap;display:flex;align-items:center;gap:2.5rem}
.marquee-item .sep{width:6px;height:6px;background:var(--soft-gold);border-radius:50%;opacity:.35;box-shadow:0 0 8px rgba(197,166,107,0.2)}

/* ==================== SIGNATURE/COACHING ==================== */
.signature{padding:7rem 2rem 8rem;position:relative;overflow:hidden}
.signature::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(180deg,transparent,rgba(245,237,227,0.4) 30%,rgba(245,237,227,0.5) 50%,rgba(245,237,227,0.4) 70%,transparent);pointer-events:none}
.coaching-bg-decor{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.coaching-bg-ring{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(900px,110vw);height:min(900px,110vw);animation:spin 250s linear infinite}
.coaching-bg-ring-2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(600px,75vw);height:min(600px,75vw);animation:wheelSpinR 190s linear infinite}
.coaching-glow-1{position:absolute;top:20%;left:15%;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.16) 0%,transparent 70%);animation:glowPulse 7s ease-in-out infinite}
.coaching-glow-2{position:absolute;bottom:15%;right:10%;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,160,0.14) 0%,transparent 70%);animation:glowPulse 9s 3s ease-in-out infinite}
.coaching-glow-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.14) 0%,rgba(245,237,227,0.08) 40%,transparent 70%);animation:glowPulse 6s 1s ease-in-out infinite}
.signature .services-header .section-label{justify-content:center}
.signature-card{max-width:900px;margin:3.5rem auto 0;padding:4rem;background:linear-gradient(135deg,rgba(255,255,255,0.85),rgba(243,239,248,0.6) 30%,rgba(251,240,234,0.5) 60%,rgba(237,243,238,0.5));backdrop-filter:blur(20px);border:1px solid rgba(195,166,107,0.15);border-radius:28px;box-shadow:0 20px 80px rgba(60,43,61,0.06),0 0 0 1px rgba(255,255,255,0.5) inset;overflow:hidden;position:relative;z-index:1}
.signature-card::before{content:'';position:absolute;top:0;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,var(--soft-gold),transparent)}
.signature-card::after{content:'';position:absolute;bottom:-100px;right:-100px;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.05),transparent 70%);pointer-events:none}
.signature-card .badge{display:inline-block;padding:.45rem 1.2rem;background:linear-gradient(135deg,rgba(197,166,107,0.08),rgba(196,160,185,0.08));border:1px solid rgba(197,166,107,0.12);border-radius:100px;font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:var(--warm-gold);font-weight:500;margin-bottom:1.8rem}
.signature-card h3{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:400;margin-bottom:1.3rem;color:var(--charcoal);line-height:1.2}
.signature-card h3 em{color:var(--warm-gold);font-style:italic}
.signature-card>p{color:var(--text-secondary);font-weight:300;line-height:1.85;font-size:.95rem;margin-bottom:1rem}
.signature-card>p strong{font-weight:500;color:var(--charcoal)}
.signature-features{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:2.5rem 0 3rem;padding:2rem;background:rgba(255,255,255,0.5);border-radius:18px;border:1px solid rgba(195,166,107,0.06)}
.signature-feature{display:flex;align-items:center;gap:.8rem;font-size:.88rem;color:var(--text-secondary);padding:.3rem 0}
.signature-feature .check{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--sage-light),rgba(139,175,142,0.2));display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#7BA88A;font-size:.65rem;font-weight:600;box-shadow:0 2px 8px rgba(123,168,138,0.15)}

/* ==================== TESTIMONIALS ==================== */
.testimonials{padding:8rem 2rem;position:relative;overflow:hidden}
.testimonials::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,var(--cream),rgba(242,228,220,0.15) 30%,rgba(243,239,248,0.15) 70%,var(--cream));pointer-events:none}
.test-bg-decor{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.test-bg-ring{position:absolute;top:45%;left:-8%;transform:translateY(-50%);width:min(700px,90vw);height:min(700px,90vw);animation:wheelSpinR 200s linear infinite}
.test-bg-ring-2{position:absolute;top:50%;right:-12%;transform:translateY(-50%);width:min(550px,70vw);height:min(550px,70vw);animation:spin 170s linear infinite}
.test-glow-1{position:absolute;top:10%;left:20%;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,160,0.14) 0%,transparent 70%);animation:glowPulse 8s ease-in-out infinite}
.test-glow-2{position:absolute;bottom:10%;right:15%;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(196,160,185,0.15) 0%,transparent 70%);animation:glowPulse 10s 2s ease-in-out infinite}
.test-glow-3{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.1) 0%,transparent 60%);animation:glowPulse 7s 4s ease-in-out infinite}
.testimonials-header{text-align:center;margin-bottom:4rem;position:relative;z-index:1}
.testimonials-header .section-label{justify-content:center}
.testimonials-header .section-subtitle{margin:0 auto}
.testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;position:relative;z-index:1}
.testimonial-card{padding:2.8rem 2.2rem 2.2rem;background:rgba(255,255,255,0.75);backdrop-filter:blur(15px);border:1px solid rgba(195,166,107,0.08);border-radius:24px;transition:all .5s cubic-bezier(.23,1,.32,1);position:relative;overflow:hidden}
.testimonial-card::before{content:'\\201C';position:absolute;top:.8rem;left:1.5rem;font-family:'Cormorant Garamond',serif;font-size:5rem;line-height:1;color:var(--soft-gold);opacity:.12;pointer-events:none}
.testimonial-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--soft-gold),transparent);opacity:0;transition:opacity .5s ease}
.testimonial-card:hover{transform:translateY(-6px);background:rgba(255,255,255,0.98);border-color:rgba(195,166,107,0.15);box-shadow:0 20px 60px rgba(60,43,61,0.08)}
.testimonial-card:hover::after{opacity:1}
.testimonial-stars{display:flex;gap:4px;margin-bottom:1.4rem;color:var(--soft-gold);font-size:.85rem}
.testimonial-card blockquote{font-family:'Cormorant Garamond',serif;font-size:1.08rem;color:var(--text-secondary);font-weight:400;line-height:1.75;font-style:italic;margin-bottom:1.8rem;position:relative;z-index:1}
.testimonial-author{display:flex;align-items:center;gap:.9rem;padding-top:1.2rem;border-top:1px solid rgba(44,38,54,0.05)}
.testimonial-avatar{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:600;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.1)}
.testimonial-avatar.rose{background:linear-gradient(135deg,var(--dusty-rose),#C48A8A)}.testimonial-avatar.mauve{background:linear-gradient(135deg,var(--mauve),#B08AA9)}.testimonial-avatar.sage{background:linear-gradient(135deg,#8BAF8E,#72A076)}
.testimonial-author .name{font-size:.88rem;font-weight:500;color:var(--charcoal)}
.testimonial-author .location{font-size:.72rem;color:var(--text-muted);margin-top:2px;letter-spacing:.06em}

/* ==================== CTA ==================== */
.cta-section{padding:10rem 2rem;text-align:center;position:relative;overflow:hidden}
.cta-section::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,var(--cream),#F5EDE3 20%,#F5EDE3 80%,var(--cream));pointer-events:none}
.cta-section::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(197,166,107,0.08) 0%,rgba(197,166,107,0.03) 40%,transparent 70%);pointer-events:none;animation:glowPulse 8s ease-in-out infinite}
.cta-decor{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;pointer-events:none;z-index:0}
.cta-content{position:relative;z-index:2}
.cta-section h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,5.5vw,4.2rem);font-weight:300;line-height:1.15;margin-bottom:1.4rem;color:var(--charcoal)}
.cta-section h2 em{font-style:italic;font-weight:500;background:linear-gradient(135deg,#D4A855 0%,#C5A66B 30%,#B8935A 60%,#D4A855 100%);background-size:200% 200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:goldShimmer 4s ease-in-out infinite}
.cta-section p{color:var(--text-secondary);font-weight:300;line-height:1.8;max-width:520px;margin:0 auto 3rem;font-size:1.05rem}

/* ==================== CONTACT ==================== */
.contact{padding:7rem 2rem 6rem;position:relative;overflow:hidden;border-top:none;background:transparent}
.contact::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,var(--cream),rgba(243,239,248,0.2) 50%,var(--cream));pointer-events:none}
.contact .services-header .section-label{justify-content:center}
.contact-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2rem;margin-top:3.5rem;position:relative;z-index:1}
.contact-item{text-align:center;padding:2.5rem 2rem;background:rgba(255,255,255,0.7);backdrop-filter:blur(15px);border-radius:24px;border:1px solid rgba(195,166,107,0.08);transition:all .5s cubic-bezier(.23,1,.32,1);position:relative;overflow:hidden}
.contact-item::before{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--soft-gold),transparent);opacity:0;transition:opacity .4s ease}
.contact-item:hover{background:rgba(255,255,255,0.95);border-color:rgba(195,166,107,0.15);transform:translateY(-4px);box-shadow:0 16px 50px rgba(60,43,61,0.08)}
.contact-item:hover::before{opacity:1}
.contact-icon{width:54px;height:54px;margin:0 auto 1.2rem;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative}
.contact-icon::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:inherit;opacity:.25;filter:blur(6px);z-index:-1}
.contact-icon.loc{background:linear-gradient(135deg,var(--peach-light),var(--peach));color:var(--dusty-rose)}
.contact-icon.time{background:linear-gradient(135deg,var(--lavender-light),var(--lavender));color:var(--mauve)}
.contact-icon.phone{background:linear-gradient(135deg,var(--sage-light),var(--sage));color:#7BA88A}
.contact-item h4{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:500;margin-bottom:.6rem;color:var(--charcoal)}
.contact-item p{font-size:.88rem;color:var(--text-secondary);font-weight:300;line-height:1.7}

/* ==================== FOOTER ==================== */
footer{position:relative;z-index:1;padding:3rem 2rem 2.5rem;border-top:1px solid rgba(197,166,107,0.08);background:linear-gradient(180deg,transparent,rgba(245,237,227,0.3))}
.footer-content{max-width:1140px;margin:0 auto;display:flex;justify-content:space-between;align-items:center}
.footer-brand{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:500;color:var(--charcoal)}
.footer-links{display:flex;gap:2.5rem;list-style:none}
.footer-links a{color:var(--text-muted);text-decoration:none;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;transition:color .3s;position:relative}
.footer-links a::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:var(--soft-gold);transition:width .3s ease}
.footer-links a:hover{color:var(--warm-gold)}
.footer-links a:hover::after{width:100%}
.footer-copy{text-align:center;margin-top:2rem;padding-top:1.5rem;border-top:1px solid rgba(197,166,107,0.06);font-size:.72rem;color:var(--text-muted);max-width:1140px;margin-left:auto;margin-right:auto;letter-spacing:.04em}

/* ==================== ANIMATIONS ==================== */
.reveal{opacity:0;transform:translateY(30px);transition:all .8s cubic-bezier(.23,1,.32,1)}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}.reveal-delay-4{transition-delay:.4s}.reveal-delay-5{transition-delay:.5s}

/* ==================== RESPONSIVE ==================== */
@media(max-width:1024px){.services-grid,.testimonials-grid{grid-template-columns:repeat(2,1fr)}.about-grid{gap:3rem}}
@media(max-width:768px){
  nav{padding:1rem 1.5rem}.nav-links{display:none}.hamburger{display:flex}
  .nav-links.open{display:flex;flex-direction:column;position:fixed;inset:0;background:rgba(251,248,244,0.97);backdrop-filter:blur(25px);justify-content:center;align-items:center;gap:2rem;z-index:100}
  .nav-links.open a{font-size:1.1rem;color:var(--charcoal)}
  .hero-content{padding:8rem 1.5rem 4rem}
  .about-grid{grid-template-columns:1fr}.about-visual{max-width:360px;margin:0 auto}
  .services-grid,.testimonials-grid{grid-template-columns:1fr}
  .signature-card{padding:2.5rem 1.5rem}.signature-features{grid-template-columns:1fr;padding:1.5rem}
  .contact-grid{grid-template-columns:1fr}
  .footer-content{flex-direction:column;gap:1.5rem;text-align:center}.footer-links{flex-wrap:wrap;justify-content:center}
  section{padding:5rem 1.5rem}.scroll-indicator{display:none}
  .floating-badge-2{right:.5rem;top:1rem}.floating-badge{left:0;bottom:2rem}
  .cta-section{padding:7rem 1.5rem}
  .cta-decor{width:300px;height:300px}
  .section-label::before,.section-label::after{flex:0 0 16px}
}
@media(max-width:480px){.hero h1{font-size:2.6rem}.hero-buttons{flex-direction:column;align-items:center}.btn-primary,.btn-secondary{width:100%;justify-content:center}.about-stats{grid-template-columns:repeat(3,1fr);gap:.8rem}.service-card .card-number{display:none}}
`,
        }}
      />

      <div className="bg-orbs">
        <div className="bg-orb"></div>
        <div className="bg-orb"></div>
        <div className="bg-orb"></div>
      </div>

      <nav id="navbar">
        <a href="/" className="nav-brand">
          <svg viewBox="0 0 320 80" style={{height: "48px", width: "auto"}} role="img" aria-label="Dr. Nidhi Bhan">
            <g transform="translate(0, 2)">
              <g transform="translate(5, 0) scale(0.72)">
                <path d="M25 72 Q25 50 40 38 Q50 28 50 46 Q50 28 60 38 Q75 50 75 72" fill="none" stroke="#C5A66B" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M30 70 Q30 52 42 42 Q50 34 50 48 Q50 34 58 42 Q70 52 70 70" fill="none" stroke="#D4A855" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
                <path d="M20 74 Q20 54 34 42 Q44 34 48 44" fill="none" stroke="#C5A66B" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
                <path d="M80 74 Q80 54 66 42 Q56 34 52 44" fill="none" stroke="#C5A66B" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
                <path d="M14 76 Q16 58 30 46 Q40 38 44 46" fill="none" stroke="#B8935A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
                <path d="M86 76 Q84 58 70 46 Q60 38 56 46" fill="none" stroke="#B8935A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
                <circle cx="50" cy="52" r="2.5" fill="#D4A855" opacity="0.45"/>
                <circle cx="50" cy="52" r="1" fill="#C5A66B"/>
                <path d="M35 74 Q42 70 50 68 Q58 70 65 74" fill="none" stroke="#C5A66B" strokeWidth="0.6" opacity="0.4"/>
              </g>
              <text x="78" y="42" fontFamily="'Cormorant Garamond', serif" fontSize="32" fontWeight="600" fill="#2C2636" letterSpacing="0.5">Dr. Nidhi Bhan</text>
              <line x1="78" y1="52" x2="118" y2="52" stroke="#C5A66B" strokeWidth="0.8" opacity="0.5"/>
              <text x="78" y="66" fontFamily="'Cormorant Garamond', serif" fontSize="9" fontWeight="400" fill="#B8935A" letterSpacing="3.5">SUBCONSCIOUS MIND TRANSFORMATION</text>
            </g>
          </svg>
        </a>
        <ul className="nav-links" id="navLinks">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/services/life-coaching">Coaching</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/booking" className="nav-cta">Begin Your Shift</a></li>
        </ul>
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ============ HERO ============ */}
      <section className="hero">
        <canvas id="heroCanvas"></canvas>

        {/* THE GRAND ZODIAC WHEEL */}
        <svg className="zodiac-wheel" viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="345" stroke="url(#goldGrad)" strokeWidth="1.5" opacity=".3" />
          <circle cx="350" cy="350" r="335" stroke="#C4A0B9" strokeWidth=".5" opacity=".2" />
          <circle cx="350" cy="350" r="320" stroke="url(#goldGrad)" strokeWidth=".8" opacity=".2" />
          <circle cx="350" cy="350" r="305" stroke="#D4A0A0" strokeWidth=".3" opacity=".15" strokeDasharray="3 8" />

          <g stroke="url(#goldGrad)" strokeWidth=".6" opacity=".2">
            <line x1="350" y1="30" x2="350" y2="670" />
            <line x1="30" y1="350" x2="670" y2="350" />
            <line x1="115" y1="115" x2="585" y2="585" />
            <line x1="585" y1="115" x2="115" y2="585" />
            <line x1="195" y1="45" x2="505" y2="655" />
            <line x1="505" y1="45" x2="195" y2="655" />
            <line x1="45" y1="195" x2="655" y2="505" />
            <line x1="45" y1="505" x2="655" y2="195" />
          </g>

          <g stroke="#C5A66B" opacity=".18">
            <line x1="350" y1="8" x2="350" y2="28" strokeWidth="1.2" />
            <line x1="350" y1="672" x2="350" y2="692" strokeWidth="1.2" />
            <line x1="8" y1="350" x2="28" y2="350" strokeWidth="1.2" />
            <line x1="672" y1="350" x2="692" y2="350" strokeWidth="1.2" />
            <line x1="500" y1="43" x2="493" y2="62" strokeWidth=".7" />
            <line x1="593" y1="140" x2="578" y2="153" strokeWidth=".7" />
            <line x1="657" y1="250" x2="639" y2="256" strokeWidth=".7" />
            <line x1="657" y1="450" x2="639" y2="444" strokeWidth=".7" />
            <line x1="593" y1="560" x2="578" y2="547" strokeWidth=".7" />
            <line x1="500" y1="657" x2="493" y2="638" strokeWidth=".7" />
            <line x1="200" y1="657" x2="207" y2="638" strokeWidth=".7" />
            <line x1="107" y1="560" x2="122" y2="547" strokeWidth=".7" />
            <line x1="43" y1="450" x2="61" y2="444" strokeWidth=".7" />
            <line x1="43" y1="250" x2="61" y2="256" strokeWidth=".7" />
            <line x1="107" y1="140" x2="122" y2="153" strokeWidth=".7" />
            <line x1="200" y1="43" x2="207" y2="62" strokeWidth=".7" />
          </g>

          <g fontFamily="serif" fontSize="22" textAnchor="middle" dominantBaseline="central">
            <circle cx="350" cy="20" r="16" fill="#C5A66B" opacity=".08" />
            <text x="350" y="22" fill="#C5A66B" opacity=".5">{"\u2648"}</text>
            <circle cx="500" cy="52" r="16" fill="#D4A0A0" opacity=".08" />
            <text x="500" y="54" fill="#D4A0A0" opacity=".5">{"\u2649"}</text>
            <circle cx="610" cy="152" r="16" fill="#C4A0B9" opacity=".08" />
            <text x="610" y="154" fill="#C4A0B9" opacity=".5">{"\u264A"}</text>
            <circle cx="655" cy="350" r="16" fill="#8BAF8E" opacity=".08" />
            <text x="655" y="352" fill="#8BAF8E" opacity=".5">{"\u264B"}</text>
            <circle cx="610" cy="548" r="16" fill="#C5A66B" opacity=".08" />
            <text x="610" y="550" fill="#C5A66B" opacity=".5">{"\u264C"}</text>
            <circle cx="500" cy="648" r="16" fill="#D4A0A0" opacity=".08" />
            <text x="500" y="650" fill="#D4A0A0" opacity=".5">{"\u264D"}</text>
            <circle cx="350" cy="680" r="16" fill="#C4A0B9" opacity=".08" />
            <text x="350" y="682" fill="#C4A0B9" opacity=".5">{"\u264E"}</text>
            <circle cx="200" cy="648" r="16" fill="#8BAF8E" opacity=".08" />
            <text x="200" y="650" fill="#8BAF8E" opacity=".5">{"\u264F"}</text>
            <circle cx="90" cy="548" r="16" fill="#C5A66B" opacity=".08" />
            <text x="90" y="550" fill="#C5A66B" opacity=".5">{"\u2650"}</text>
            <circle cx="45" cy="350" r="16" fill="#D4A0A0" opacity=".08" />
            <text x="45" y="352" fill="#D4A0A0" opacity=".5">{"\u2651"}</text>
            <circle cx="90" cy="152" r="16" fill="#C4A0B9" opacity=".08" />
            <text x="90" y="154" fill="#C4A0B9" opacity=".5">{"\u2652"}</text>
            <circle cx="200" cy="52" r="16" fill="#8BAF8E" opacity=".08" />
            <text x="200" y="54" fill="#8BAF8E" opacity=".5">{"\u2653"}</text>
          </g>

          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A855" stopOpacity="1" />
              <stop offset="50%" stopColor="#C5A66B" stopOpacity="1" />
              <stop offset="100%" stopColor="#B8935A" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* INNER WHEEL */}
        <svg className="inner-wheel" viewBox="0 0 480 480" fill="none">
          <circle cx="240" cy="240" r="235" stroke="#C4A0B9" strokeWidth=".8" opacity=".2" />
          <circle cx="240" cy="240" r="210" stroke="#C5A66B" strokeWidth=".5" opacity=".15" strokeDasharray="4 6" />
          <circle cx="240" cy="240" r="185" stroke="#D4A0A0" strokeWidth=".4" opacity=".12" />

          <polygon points="240,40 430,330 50,330" stroke="#C5A66B" strokeWidth=".8" opacity=".15" fill="rgba(197,166,107,0.02)" />
          <polygon points="240,80 400,300 80,300" stroke="#C5A66B" strokeWidth=".6" opacity=".1" fill="none" />
          <polygon points="240,120 370,275 110,275" stroke="#C5A66B" strokeWidth=".5" opacity=".08" fill="none" />

          <polygon points="240,440 50,150 430,150" stroke="#C4A0B9" strokeWidth=".8" opacity=".15" fill="rgba(196,160,185,0.02)" />
          <polygon points="240,400 80,180 400,180" stroke="#C4A0B9" strokeWidth=".6" opacity=".1" fill="none" />
          <polygon points="240,360 110,205 370,205" stroke="#C4A0B9" strokeWidth=".5" opacity=".08" fill="none" />

          <g fill="#C5A66B" opacity=".25">
            <circle cx="240" cy="12" r="2.5" />
            <circle cx="350" cy="35" r="2" />
            <circle cx="440" cy="110" r="2.5" />
            <circle cx="468" cy="240" r="2" />
            <circle cx="440" cy="370" r="2.5" />
            <circle cx="350" cy="445" r="2" />
            <circle cx="240" cy="468" r="2.5" />
            <circle cx="130" cy="445" r="2" />
            <circle cx="40" cy="370" r="2.5" />
            <circle cx="12" cy="240" r="2" />
            <circle cx="40" cy="110" r="2.5" />
            <circle cx="130" cy="35" r="2" />
          </g>
        </svg>

        {/* SACRED CORE */}
        <svg className="sacred-core" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="145" stroke="#C5A66B" strokeWidth=".6" opacity=".2" />
          <circle cx="150" cy="150" r="115" stroke="#C4A0B9" strokeWidth=".4" opacity=".15" />
          <circle cx="150" cy="150" r="85" stroke="#D4A0A0" strokeWidth=".4" opacity=".12" />
          <circle cx="150" cy="150" r="55" stroke="#8BAF8E" strokeWidth=".3" opacity=".1" />
          <circle cx="150" cy="150" r="25" stroke="#C5A66B" strokeWidth=".5" opacity=".2" />

          <g opacity=".15" fill="none" stroke="#C5A66B" strokeWidth=".7">
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(0 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(30 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(60 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(90 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(120 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(150 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(180 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(210 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(240 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(270 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(300 150 150)" />
            <ellipse cx="150" cy="50" rx="16" ry="40" transform="rotate(330 150 150)" />
          </g>

          <g opacity=".12" fill="none" stroke="#D4A0A0" strokeWidth=".6">
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(22.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(67.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(112.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(157.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(202.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(247.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(292.5 150 150)" />
            <ellipse cx="150" cy="80" rx="12" ry="28" transform="rotate(337.5 150 150)" />
          </g>

          <circle cx="150" cy="150" r="6" fill="#C5A66B" opacity=".2" />
          <circle cx="150" cy="150" r="3" fill="#C5A66B" opacity=".35" />
        </svg>

        <div className="hero-glow"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>Subconscious Mind Transformation Expert
          </div>
          <h1>
            Reprogram the Mind.<br />
            Rewrite Your <em>Life.</em>
          </h1>
          <p className="hero-sub">
            The patterns holding you back were written before you were born. Dr. Nidhi Bhan reads the
            blueprint — then rewires it. Hypnotherapy. Past life regression. Subconscious
            reconditioning. Three decades. Thousands transformed.
          </p>
          <div className="hero-buttons">
            <a href="/booking" className="btn-primary">
              Start Your Transformation <span>{"\u2192"}</span>
            </a>
            <a href="/about" className="btn-secondary">
              How It Works
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="about" id="about">
        <div className="about-bg-decor">
          <div className="about-glow-1"></div>
          <div className="about-glow-2"></div>
          <div className="about-glow-3"></div>

          <svg className="about-bg-ring" viewBox="0 0 750 750" fill="none">
            <circle cx="375" cy="375" r="370" stroke="#C5A66B" strokeWidth="1" opacity=".3" />
            <circle cx="375" cy="375" r="355" stroke="#C4A0B9" strokeWidth=".5" opacity=".28" strokeDasharray="6 10" />
            <circle cx="375" cy="375" r="340" stroke="#D4A0A0" strokeWidth=".4" opacity=".22" />
            <circle cx="375" cy="375" r="320" stroke="#C5A66B" strokeWidth=".3" opacity=".18" strokeDasharray="3 12" />

            <g stroke="#C5A66B" strokeWidth=".4" opacity=".25">
              <line x1="375" y1="10" x2="375" y2="740" />
              <line x1="10" y1="375" x2="740" y2="375" />
              <line x1="110" y1="110" x2="640" y2="640" />
              <line x1="640" y1="110" x2="110" y2="640" />
              <line x1="200" y1="25" x2="550" y2="725" />
              <line x1="550" y1="25" x2="200" y2="725" />
              <line x1="25" y1="200" x2="725" y2="550" />
              <line x1="25" y1="550" x2="725" y2="200" />
            </g>

            <g stroke="#C5A66B" opacity=".35">
              <line x1="375" y1="5" x2="375" y2="30" strokeWidth="1" />
              <line x1="375" y1="720" x2="375" y2="745" strokeWidth="1" />
              <line x1="5" y1="375" x2="30" y2="375" strokeWidth="1" />
              <line x1="720" y1="375" x2="745" y2="375" strokeWidth="1" />
              <line x1="556" y1="20" x2="548" y2="44" strokeWidth=".6" />
              <line x1="660" y1="120" x2="640" y2="136" strokeWidth=".6" />
              <line x1="730" y1="250" x2="708" y2="258" strokeWidth=".6" />
              <line x1="730" y1="500" x2="708" y2="492" strokeWidth=".6" />
              <line x1="660" y1="630" x2="640" y2="614" strokeWidth=".6" />
              <line x1="556" y1="730" x2="548" y2="706" strokeWidth=".6" />
              <line x1="194" y1="730" x2="202" y2="706" strokeWidth=".6" />
              <line x1="90" y1="630" x2="110" y2="614" strokeWidth=".6" />
              <line x1="20" y1="500" x2="42" y2="492" strokeWidth=".6" />
              <line x1="20" y1="250" x2="42" y2="258" strokeWidth=".6" />
              <line x1="90" y1="120" x2="110" y2="136" strokeWidth=".6" />
              <line x1="194" y1="20" x2="202" y2="44" strokeWidth=".6" />
            </g>

            <g fontFamily="serif" fontSize="18" textAnchor="middle" dominantBaseline="central" opacity=".3">
              <text x="375" y="18" fill="#C5A66B">{"\u2648"}</text>
              <text x="556" y="30" fill="#C4A0B9">{"\u2649"}</text>
              <text x="668" y="128" fill="#D4A0A0">{"\u264A"}</text>
              <text x="740" y="375" fill="#8BAF8E">{"\u264B"}</text>
              <text x="668" y="622" fill="#C5A66B">{"\u264C"}</text>
              <text x="556" y="720" fill="#C4A0B9">{"\u264D"}</text>
              <text x="375" y="740" fill="#D4A0A0">{"\u264E"}</text>
              <text x="194" y="720" fill="#8BAF8E">{"\u264F"}</text>
              <text x="82" y="622" fill="#C5A66B">{"\u2650"}</text>
              <text x="10" y="375" fill="#C4A0B9">{"\u2651"}</text>
              <text x="82" y="128" fill="#D4A0A0">{"\u2652"}</text>
              <text x="194" y="30" fill="#8BAF8E">{"\u2653"}</text>
            </g>

            <g fill="#C5A66B" opacity=".3">
              <circle cx="375" cy="8" r="2.5" />
              <circle cx="557" cy="24" r="2" />
              <circle cx="665" cy="124" r="2.5" />
              <circle cx="742" cy="375" r="2" />
              <circle cx="665" cy="626" r="2.5" />
              <circle cx="557" cy="726" r="2" />
              <circle cx="375" cy="742" r="2.5" />
              <circle cx="193" cy="726" r="2" />
              <circle cx="85" cy="626" r="2.5" />
              <circle cx="8" cy="375" r="2" />
              <circle cx="85" cy="124" r="2.5" />
              <circle cx="193" cy="24" r="2" />
            </g>
          </svg>

          <svg className="about-bg-ring-2" viewBox="0 0 550 550" fill="none">
            <circle cx="275" cy="275" r="270" stroke="#C4A0B9" strokeWidth=".6" opacity=".28" />
            <circle cx="275" cy="275" r="245" stroke="#C5A66B" strokeWidth=".4" opacity=".22" strokeDasharray="4 8" />
            <circle cx="275" cy="275" r="220" stroke="#D4A0A0" strokeWidth=".3" opacity=".18" />

            <polygon points="275,30 490,380 60,380" stroke="#C5A66B" strokeWidth=".6" opacity=".22" fill="rgba(197,166,107,0.01)" />
            <polygon points="275,70 450,340 100,340" stroke="#C5A66B" strokeWidth=".4" opacity=".15" fill="none" />

            <polygon points="275,520 60,170 490,170" stroke="#C4A0B9" strokeWidth=".6" opacity=".22" fill="rgba(196,160,185,0.01)" />
            <polygon points="275,480 100,210 450,210" stroke="#C4A0B9" strokeWidth=".4" opacity=".15" fill="none" />

            <g opacity=".22" fill="none" stroke="#C5A66B" strokeWidth=".5">
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(0 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(45 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(90 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(135 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(180 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(225 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(270 275 275)" />
              <ellipse cx="275" cy="130" rx="14" ry="45" transform="rotate(315 275 275)" />
            </g>

            <g fill="#C4A0B9" opacity=".28">
              <circle cx="275" cy="8" r="2" />
              <circle cx="400" cy="30" r="1.5" />
              <circle cx="505" cy="100" r="2" />
              <circle cx="542" cy="275" r="1.5" />
              <circle cx="505" cy="450" r="2" />
              <circle cx="400" cy="520" r="1.5" />
              <circle cx="275" cy="542" r="2" />
              <circle cx="150" cy="520" r="1.5" />
              <circle cx="45" cy="450" r="2" />
              <circle cx="8" cy="275" r="1.5" />
              <circle cx="45" cy="100" r="2" />
              <circle cx="150" cy="30" r="1.5" />
            </g>

            <circle cx="275" cy="275" r="5" fill="#C5A66B" opacity=".22" />
            <circle cx="275" cy="275" r="2" fill="#C5A66B" opacity=".1" />
          </svg>
        </div>

        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-image-frame">
                <div className="about-image-inner">
                  <svg className="about-mandala" width="280" height="280" viewBox="0 0 280 280" fill="none">
                    <circle cx="140" cy="140" r="135" stroke="#C5A66B" strokeWidth=".8" />
                    <circle cx="140" cy="140" r="125" stroke="#C4A0B9" strokeWidth=".4" strokeDasharray="3 6" />
                    <circle cx="140" cy="140" r="110" stroke="#C5A66B" strokeWidth=".6" />
                    <circle cx="140" cy="140" r="95" stroke="#D4A0A0" strokeWidth=".5" />
                    <circle cx="140" cy="140" r="75" stroke="#C5A66B" strokeWidth=".4" strokeDasharray="2 5" />
                    <circle cx="140" cy="140" r="55" stroke="#8BAF8E" strokeWidth=".4" />
                    <circle cx="140" cy="140" r="35" stroke="#C5A66B" strokeWidth=".5" />
                    <circle cx="140" cy="140" r="15" stroke="#C4A0B9" strokeWidth=".3" />
                    <g>
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C5A66B" strokeWidth=".5" transform="rotate(0 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C4A0B9" strokeWidth=".5" transform="rotate(30 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C5A66B" strokeWidth=".5" transform="rotate(60 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#D4A0A0" strokeWidth=".5" transform="rotate(90 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C5A66B" strokeWidth=".5" transform="rotate(120 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C4A0B9" strokeWidth=".5" transform="rotate(150 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C5A66B" strokeWidth=".5" transform="rotate(180 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#D4A0A0" strokeWidth=".5" transform="rotate(210 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C5A66B" strokeWidth=".5" transform="rotate(240 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C4A0B9" strokeWidth=".5" transform="rotate(270 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#C5A66B" strokeWidth=".5" transform="rotate(300 140 140)" />
                      <ellipse cx="140" cy="35" rx="14" ry="35" stroke="#D4A0A0" strokeWidth=".5" transform="rotate(330 140 140)" />
                    </g>
                    <g>
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#8BAF8E" strokeWidth=".4" transform="rotate(0 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#C5A66B" strokeWidth=".4" transform="rotate(45 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#8BAF8E" strokeWidth=".4" transform="rotate(90 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#C5A66B" strokeWidth=".4" transform="rotate(135 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#8BAF8E" strokeWidth=".4" transform="rotate(180 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#C5A66B" strokeWidth=".4" transform="rotate(225 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#8BAF8E" strokeWidth=".4" transform="rotate(270 140 140)" />
                      <ellipse cx="140" cy="70" rx="10" ry="25" stroke="#C5A66B" strokeWidth=".4" transform="rotate(315 140 140)" />
                    </g>
                    <polygon points="140,50 220,200 60,200" stroke="#C5A66B" strokeWidth=".5" fill="rgba(197,166,107,0.02)" />
                    <polygon points="140,230 60,80 220,80" stroke="#C4A0B9" strokeWidth=".5" fill="rgba(196,160,185,0.02)" />
                    <polygon points="140,120 146,132 160,132 149,140 153,153 140,145 127,153 131,140 120,132 134,132" stroke="#C5A66B" strokeWidth=".4" fill="rgba(197,166,107,0.05)" />
                    <circle cx="140" cy="140" r="4" fill="#C5A66B" opacity=".3" />
                  </svg>
                  <div className="about-photo-label">
                    <span>Dr. Nidhi Bhan</span>
                  </div>
                </div>
              </div>
              <div className="floating-badge">
                <div className="number">25+</div>
                <div className="label">
                  Years of<br />Transformation
                </div>
              </div>
              <div className="floating-badge-2">
                <div className="icon-circle">{"\u2727"}</div>
                <div className="text">
                  Subconscious<br />Specialist
                </div>
              </div>
            </div>
            <div className="about-text">
              <div className="section-label reveal">The Method</div>
              <h3 className="reveal reveal-delay-1">
                Your Birth Chart Is a Map.<br />
                <em>Transformation</em> Is the Destination.
              </h3>
              <p className="reveal reveal-delay-2">
                Most practitioners read your chart and tell you what might happen. Dr. Nidhi Bhan reads
                it to understand <strong>why you keep repeating the same patterns</strong> — the fears
                you can&apos;t explain, the blocks that defy logic, the cycles you can&apos;t seem to
                break. Then she goes deeper than prediction. Using clinically grounded hypnotherapy,
                subliminal reprogramming, and past life regression, she helps you rewrite the
                subconscious code that&apos;s been running your life on autopilot.
              </p>
              <p className="reveal reveal-delay-3">
                With nearly three decades of practice across television, radio, and thousands of private
                consultations, Dr. Bhan has evolved from one of Canada&apos;s most respected Vedic
                astrologers into something rarer — a subconscious mind transformation expert who treats
                the birth chart as a diagnostic tool, not a fortune-telling device.
              </p>
              <div className="about-stats reveal reveal-delay-4">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years Practice</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">7</div>
                  <div className="stat-label">Modalities Mastered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-4</div>
                  <div className="stat-label">Clients Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item">Subconscious Transformation <span className="sep"></span></div>
          <div className="marquee-item">Hypnotherapy <span className="sep"></span></div>
          <div className="marquee-item">Past Life Regression <span className="sep"></span></div>
          <div className="marquee-item">Subliminal Reprogramming <span className="sep"></span></div>
          <div className="marquee-item">Life Coaching <span className="sep"></span></div>
          <div className="marquee-item">Vedic Astrology <span className="sep"></span></div>
          <div className="marquee-item">Tarot Reading <span className="sep"></span></div>
          <div className="marquee-item">Mindset Pattern Correction <span className="sep"></span></div>
          <div className="marquee-item">Vastu Shastra <span className="sep"></span></div>
          <div className="marquee-item">Guided Meditation <span className="sep"></span></div>
          <div className="marquee-item">Reiki Healing <span className="sep"></span></div>
          <div className="marquee-item">Subconscious Transformation <span className="sep"></span></div>
          <div className="marquee-item">Hypnotherapy <span className="sep"></span></div>
          <div className="marquee-item">Past Life Regression <span className="sep"></span></div>
          <div className="marquee-item">Subliminal Reprogramming <span className="sep"></span></div>
          <div className="marquee-item">Life Coaching <span className="sep"></span></div>
          <div className="marquee-item">Vedic Astrology <span className="sep"></span></div>
          <div className="marquee-item">Tarot Reading <span className="sep"></span></div>
          <div className="marquee-item">Mindset Pattern Correction <span className="sep"></span></div>
          <div className="marquee-item">Vastu Shastra <span className="sep"></span></div>
          <div className="marquee-item">Guided Meditation <span className="sep"></span></div>
          <div className="marquee-item">Reiki Healing <span className="sep"></span></div>
        </div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="services" id="services">
        <div className="services-bg-decor">
          <div className="services-glow-1"></div>
          <div className="services-glow-2"></div>
          <div className="services-glow-3"></div>

          <svg className="services-bg-ring" viewBox="0 0 800 800" fill="none">
            <circle cx="400" cy="400" r="395" stroke="#C4A0B9" strokeWidth=".8" opacity=".28" />
            <circle cx="400" cy="400" r="375" stroke="#C5A66B" strokeWidth=".5" opacity=".22" strokeDasharray="5 12" />
            <circle cx="400" cy="400" r="350" stroke="#D4A0A0" strokeWidth=".3" opacity=".18" />
            <circle cx="400" cy="400" r="320" stroke="#C5A66B" strokeWidth=".4" opacity=".15" strokeDasharray="3 10" />
            <circle cx="400" cy="400" r="290" stroke="#8BAF8E" strokeWidth=".3" opacity=".12" />

            <g stroke="#C5A66B" strokeWidth=".5" opacity=".22">
              <polygon points="400,50 703,225 703,575 400,750 97,575 97,225" />
              <polygon points="400,120 643,280 643,520 400,680 157,520 157,280" />
            </g>

            <g stroke="#C4A0B9" strokeWidth=".3" opacity=".18">
              <line x1="400" y1="5" x2="400" y2="795" />
              <line x1="58" y1="200" x2="742" y2="600" />
              <line x1="58" y1="600" x2="742" y2="200" />
            </g>

            <g fill="#C5A66B" opacity=".28">
              <circle cx="400" cy="5" r="3" />
              <circle cx="400" cy="795" r="3" />
              <circle cx="742" cy="200" r="2.5" />
              <circle cx="742" cy="600" r="2.5" />
              <circle cx="58" cy="200" r="2.5" />
              <circle cx="58" cy="600" r="2.5" />
              <circle cx="400" cy="50" r="2" />
              <circle cx="703" cy="225" r="2" />
              <circle cx="703" cy="575" r="2" />
              <circle cx="400" cy="750" r="2" />
              <circle cx="97" cy="575" r="2" />
              <circle cx="97" cy="225" r="2" />
            </g>

            <g stroke="#D4A0A0" strokeWidth=".4" opacity=".18">
              <polygon points="400,180 520,340 480,520 320,520 280,340" />
              <polygon points="400,620 480,460 520,280 320,280 280,460" />
            </g>

            <g opacity=".18" fill="none" stroke="#C5A66B" strokeWidth=".5">
              <ellipse cx="400" cy="100" rx="18" ry="50" transform="rotate(0 400 400)" />
              <ellipse cx="400" cy="100" rx="18" ry="50" transform="rotate(60 400 400)" />
              <ellipse cx="400" cy="100" rx="18" ry="50" transform="rotate(120 400 400)" />
              <ellipse cx="400" cy="100" rx="18" ry="50" transform="rotate(180 400 400)" />
              <ellipse cx="400" cy="100" rx="18" ry="50" transform="rotate(240 400 400)" />
              <ellipse cx="400" cy="100" rx="18" ry="50" transform="rotate(300 400 400)" />
            </g>
          </svg>

          <svg className="services-bg-ring-2" viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="245" stroke="#D4A0A0" strokeWidth=".6" opacity=".25" />
            <circle cx="250" cy="250" r="220" stroke="#C5A66B" strokeWidth=".4" opacity=".18" strokeDasharray="4 8" />
            <circle cx="250" cy="250" r="195" stroke="#C4A0B9" strokeWidth=".3" opacity=".15" />

            <polygon points="250,30 450,350 50,350" stroke="#C5A66B" strokeWidth=".5" opacity=".22" fill="rgba(197,166,107,0.01)" />
            <polygon points="250,470 50,150 450,150" stroke="#C4A0B9" strokeWidth=".5" opacity=".22" fill="rgba(196,160,185,0.01)" />
            <polygon points="250,70 410,310 90,310" stroke="#C5A66B" strokeWidth=".3" opacity=".15" fill="none" />
            <polygon points="250,430 90,190 410,190" stroke="#C4A0B9" strokeWidth=".3" opacity=".15" fill="none" />

            <g opacity=".18" fill="none" stroke="#8BAF8E" strokeWidth=".4">
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(0 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(45 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(90 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(135 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(180 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(225 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(270 250 250)" />
              <ellipse cx="250" cy="80" rx="10" ry="30" transform="rotate(315 250 250)" />
            </g>

            <circle cx="250" cy="250" r="4" fill="#C5A66B" opacity=".22" />
          </svg>
        </div>

        <div className="container">
          <div className="services-header">
            <div className="section-label reveal">The Toolkit</div>
            <h2 className="section-title reveal reveal-delay-1">
              Six Modalities.<br />One Transformation.
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Every session draws from a personalized combination of these disciplines — calibrated to
              your birth chart, your blocks, and where you are right now.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="card-number">01</div>
              <div className="service-icon astrology">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <h3>Birth Chart Intelligence</h3>
              <p>
                Your Vedic birth chart isn&apos;t a fortune — it&apos;s a diagnostic map. Dr. Bhan
                reads your planetary positions to identify the subconscious patterns, inherited fears,
                and karmic imprints that shape your decisions, relationships, and self-sabotage cycles.
              </p>
              <a href="/services/vedic-astrology" className="learn-more">
                Explore {"\u2192"}
              </a>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="card-number">02</div>
              <div className="service-icon tarot">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M12 6v4M10 10h4" />
                  <circle cx="12" cy="16" r="2" />
                </svg>
              </div>
              <h3>Hypnotherapy</h3>
              <p>
                Bypass the conscious mind and speak directly to the part of you that holds the fear, the
                doubt, the old stories. Clinical hypnotherapy allows Dr. Bhan to reprogram deep-seated
                beliefs at the root — where talk therapy often can&apos;t reach.
              </p>
              <a href="/services/hypnotherapy" className="learn-more">
                Explore {"\u2192"}
              </a>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="card-number">03</div>
              <div className="service-icon past-life">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                  <path d="M7.5 4.2C5 6 3.5 9 4 12.5c.8 5 5.5 8.5 10.5 7.7" />
                </svg>
              </div>
              <h3>Past Life Regression</h3>
              <p>
                Some wounds don&apos;t belong to this lifetime. Through guided regression, Dr. Bhan
                helps you travel to the origin point of recurring fears, unexplained phobias, and karmic
                entanglements — and release them with white light healing.
              </p>
              <a href="/services/past-life-regression" className="learn-more">
                Explore {"\u2192"}
              </a>
            </div>
            <div className="service-card reveal reveal-delay-3">
              <div className="card-number">04</div>
              <div className="service-icon reiki">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                </svg>
              </div>
              <h3>Subliminal Reconditioning</h3>
              <p>
                Your subconscious absorbs more than you realize. Dr. Bhan uses targeted subliminal
                techniques to overwrite limiting thought patterns with empowering new beliefs — working
                beneath awareness, where lasting change actually happens.
              </p>
              <a href="/services" className="learn-more">
                Explore {"\u2192"}
              </a>
            </div>
            <div className="service-card reveal reveal-delay-4">
              <div className="card-number">05</div>
              <div className="service-icon vastu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <h3>Vastu Harmonics</h3>
              <p>
                Your external environment mirrors your internal state. Through Vedic spatial science, Dr.
                Bhan recalibrates the energy of your home or workspace — removing blockages in the
                physical space that mirror blockages in your mind.
              </p>
              <a href="/services" className="learn-more">
                Explore {"\u2192"}
              </a>
            </div>
            <div className="service-card reveal reveal-delay-5">
              <div className="card-number">06</div>
              <div className="service-icon numerology">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 2h4" />
                  <path d="M7 7h10" />
                  <circle cx="12" cy="14" r="6" />
                  <path d="M12 11v3l2 1" />
                </svg>
              </div>
              <h3>Tarot + Intuitive Reading</h3>
              <p>
                While the birth chart reveals destiny, Tarot reads the present moment — your current
                energy, the choices in front of you, the freewill crossroads. Together with astrology, it
                creates a complete picture of where you&apos;ve been, where you are, and where
                you&apos;re headed.
              </p>
              <a href="/services" className="learn-more">
                Explore {"\u2192"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COACHING ============ */}
      <section className="signature" id="coaching">
        <div className="coaching-bg-decor">
          <div className="coaching-glow-1"></div>
          <div className="coaching-glow-2"></div>
          <div className="coaching-glow-center"></div>

          <svg className="coaching-bg-ring" viewBox="0 0 900 900" fill="none">
            <circle cx="450" cy="450" r="445" stroke="#C5A66B" strokeWidth="1" opacity=".25" />
            <circle cx="450" cy="450" r="425" stroke="#C4A0B9" strokeWidth=".5" opacity=".18" strokeDasharray="6 14" />
            <circle cx="450" cy="450" r="400" stroke="#D4A0A0" strokeWidth=".4" opacity=".15" />
            <circle cx="450" cy="450" r="370" stroke="#C5A66B" strokeWidth=".3" opacity=".12" strokeDasharray="3 10" />

            <g stroke="#C5A66B" strokeWidth=".4" opacity=".18">
              <line x1="450" y1="5" x2="450" y2="895" />
              <line x1="5" y1="450" x2="895" y2="450" />
              <line x1="120" y1="120" x2="780" y2="780" />
              <line x1="780" y1="120" x2="120" y2="780" />
              <line x1="236" y1="22" x2="664" y2="878" />
              <line x1="664" y1="22" x2="236" y2="878" />
              <line x1="22" y1="236" x2="878" y2="664" />
              <line x1="22" y1="664" x2="878" y2="236" />
            </g>

            <g fontFamily="serif" fontSize="20" textAnchor="middle" dominantBaseline="central" opacity=".25">
              <text x="450" y="18" fill="#C5A66B">{"\u2648"}</text>
              <text x="664" y="30" fill="#C4A0B9">{"\u2649"}</text>
              <text x="822" y="148" fill="#D4A0A0">{"\u264A"}</text>
              <text x="888" y="450" fill="#8BAF8E">{"\u264B"}</text>
              <text x="822" y="752" fill="#C5A66B">{"\u264C"}</text>
              <text x="664" y="870" fill="#C4A0B9">{"\u264D"}</text>
              <text x="450" y="888" fill="#D4A0A0">{"\u264E"}</text>
              <text x="236" y="870" fill="#8BAF8E">{"\u264F"}</text>
              <text x="78" y="752" fill="#C5A66B">{"\u2650"}</text>
              <text x="12" y="450" fill="#C4A0B9">{"\u2651"}</text>
              <text x="78" y="148" fill="#D4A0A0">{"\u2652"}</text>
              <text x="236" y="30" fill="#8BAF8E">{"\u2653"}</text>
            </g>

            <g stroke="#C5A66B" opacity=".16">
              <line x1="450" y1="5" x2="450" y2="30" strokeWidth=".8" />
              <line x1="450" y1="870" x2="450" y2="895" strokeWidth=".8" />
              <line x1="5" y1="450" x2="30" y2="450" strokeWidth=".8" />
              <line x1="870" y1="450" x2="895" y2="450" strokeWidth=".8" />
            </g>

            <g fill="#C4A0B9" opacity=".14">
              <circle cx="450" cy="8" r="2.5" />
              <circle cx="665" cy="25" r="2" />
              <circle cx="825" cy="145" r="2.5" />
              <circle cx="892" cy="450" r="2" />
              <circle cx="825" cy="755" r="2.5" />
              <circle cx="665" cy="875" r="2" />
              <circle cx="450" cy="892" r="2.5" />
              <circle cx="235" cy="875" r="2" />
              <circle cx="75" cy="755" r="2.5" />
              <circle cx="8" cy="450" r="2" />
              <circle cx="75" cy="145" r="2.5" />
              <circle cx="235" cy="25" r="2" />
            </g>
          </svg>

          <svg className="coaching-bg-ring-2" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="295" stroke="#D4A0A0" strokeWidth=".5" opacity=".14" />
            <circle cx="300" cy="300" r="270" stroke="#C5A66B" strokeWidth=".4" opacity=".18" strokeDasharray="4 10" />
            <circle cx="300" cy="300" r="240" stroke="#C4A0B9" strokeWidth=".3" opacity=".15" />

            <polygon points="300,30 530,420 70,420" stroke="#C5A66B" strokeWidth=".6" opacity=".22" fill="rgba(197,166,107,0.01)" />
            <polygon points="300,570 70,180 530,180" stroke="#C4A0B9" strokeWidth=".6" opacity=".22" fill="rgba(196,160,185,0.01)" />
            <polygon points="300,80 480,370 120,370" stroke="#C5A66B" strokeWidth=".4" opacity=".15" fill="none" />
            <polygon points="300,520 120,230 480,230" stroke="#C4A0B9" strokeWidth=".4" opacity=".15" fill="none" />
            <polygon points="300,130 430,320 170,320" stroke="#C5A66B" strokeWidth=".3" opacity=".12" fill="none" />
            <polygon points="300,470 170,280 430,280" stroke="#C4A0B9" strokeWidth=".3" opacity=".12" fill="none" />

            <g opacity=".18" fill="none" stroke="#C5A66B" strokeWidth=".5">
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(0 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(30 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(60 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(90 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(120 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(150 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(180 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(210 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(240 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(270 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(300 300 300)" />
              <ellipse cx="300" cy="60" rx="15" ry="45" transform="rotate(330 300 300)" />
            </g>

            <circle cx="300" cy="300" r="6" fill="#C5A66B" opacity=".18" />
            <circle cx="300" cy="300" r="2.5" fill="#C5A66B" opacity=".16" />
          </svg>
        </div>

        <div className="container">
          <div className="services-header">
            <div className="section-label reveal">The Deep Work</div>
            <h2 className="section-title reveal reveal-delay-1">
              Structured Life Coaching Packages
            </h2>
          </div>
          <div className="signature-card reveal reveal-delay-2">
            <div className="badge">This is where real transformation happens</div>
            <h3>
              Stop Managing Symptoms.<br />
              <em>Rewrite the Pattern.</em>
            </h3>
            <p>
              A single session can reveal what&apos;s holding you back. But lasting transformation — the
              kind that changes how you think, react, and show up in every area of your life — requires
              depth. Dr. Bhan&apos;s life coaching packages are structured journeys designed around{" "}
              <strong>your</strong> birth chart, <strong>your</strong> subconscious blocks, and{" "}
              <strong>your</strong> specific goals.
            </p>
            <p>
              Each session is personalized and may draw from hypnotherapy, guided meditation, past life
              regression, Reiki, subliminal techniques, or other subconscious transformation tools —
              whatever your chart and your progress call for.
            </p>
            <div className="signature-features">
              <div className="signature-feature">
                <div className="check">{"\u2713"}</div> Birth Chart–Guided Coaching Plan
              </div>
              <div className="signature-feature">
                <div className="check">{"\u2713"}</div> Hypnotherapy &amp; Subliminal Sessions
              </div>
              <div className="signature-feature">
                <div className="check">{"\u2713"}</div> Subconscious Pattern Identification
              </div>
              <div className="signature-feature">
                <div className="check">{"\u2713"}</div> Free Astrology + Tarot Reading Included
              </div>
              <div className="signature-feature">
                <div className="check">{"\u2713"}</div> 5 or 7 Session Packages Available
              </div>
              <div className="signature-feature">
                <div className="check">{"\u2713"}</div> In-Person (GTA) or Virtual Worldwide
              </div>
            </div>
            <a href="/services/life-coaching" className="btn-primary">
              Explore Coaching Packages <span>{"\u2192"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials" id="testimonials">
        <div className="test-bg-decor">
          <div className="test-glow-1"></div>
          <div className="test-glow-2"></div>
          <div className="test-glow-3"></div>

          <svg className="test-bg-ring" viewBox="0 0 700 700" fill="none">
            <circle cx="350" cy="350" r="345" stroke="#D4A0A0" strokeWidth=".8" opacity=".25" />
            <circle cx="350" cy="350" r="325" stroke="#C5A66B" strokeWidth=".4" opacity=".18" strokeDasharray="5 12" />
            <circle cx="350" cy="350" r="300" stroke="#C4A0B9" strokeWidth=".3" opacity=".15" />
            <circle cx="350" cy="350" r="270" stroke="#C5A66B" strokeWidth=".3" opacity=".12" strokeDasharray="3 8" />
            <circle cx="350" cy="350" r="240" stroke="#8BAF8E" strokeWidth=".25" opacity=".12" />
            <circle cx="350" cy="350" r="200" stroke="#C5A66B" strokeWidth=".3" opacity=".12" strokeDasharray="2 6" />
            <circle cx="350" cy="350" r="160" stroke="#D4A0A0" strokeWidth=".25" opacity=".08" />

            <polygon points="350,60 610,500 90,500" stroke="#C5A66B" strokeWidth=".5" opacity=".18" fill="rgba(197,166,107,0.01)" />
            <polygon points="350,640 90,200 610,200" stroke="#C4A0B9" strokeWidth=".5" opacity=".18" fill="rgba(196,160,185,0.01)" />

            <g opacity=".15" fill="none" stroke="#C5A66B" strokeWidth=".5">
              <ellipse cx="350" cy="80" rx="16" ry="50" transform="rotate(0 350 350)" />
              <ellipse cx="350" cy="80" rx="16" ry="50" transform="rotate(60 350 350)" />
              <ellipse cx="350" cy="80" rx="16" ry="50" transform="rotate(120 350 350)" />
              <ellipse cx="350" cy="80" rx="16" ry="50" transform="rotate(180 350 350)" />
              <ellipse cx="350" cy="80" rx="16" ry="50" transform="rotate(240 350 350)" />
              <ellipse cx="350" cy="80" rx="16" ry="50" transform="rotate(300 350 350)" />
            </g>

            <g fill="#C5A66B" opacity=".14">
              <circle cx="350" cy="8" r="2.5" />
              <circle cx="540" cy="45" r="2" />
              <circle cx="660" cy="180" r="2.5" />
              <circle cx="692" cy="350" r="2" />
              <circle cx="660" cy="520" r="2.5" />
              <circle cx="540" cy="655" r="2" />
              <circle cx="350" cy="692" r="2.5" />
              <circle cx="160" cy="655" r="2" />
              <circle cx="40" cy="520" r="2.5" />
              <circle cx="8" cy="350" r="2" />
              <circle cx="40" cy="180" r="2.5" />
              <circle cx="160" cy="45" r="2" />
            </g>

            <circle cx="350" cy="350" r="5" fill="#C5A66B" opacity=".15" />
          </svg>

          <svg className="test-bg-ring-2" viewBox="0 0 550 550" fill="none">
            <circle cx="275" cy="275" r="270" stroke="#C4A0B9" strokeWidth=".6" opacity=".14" />
            <circle cx="275" cy="275" r="245" stroke="#D4A0A0" strokeWidth=".4" opacity=".1" strokeDasharray="4 10" />
            <circle cx="275" cy="275" r="215" stroke="#C5A66B" strokeWidth=".3" opacity=".12" />

            <g stroke="#C4A0B9" strokeWidth=".4" opacity=".18">
              <polygon points="275,30 512,165 512,385 275,520 38,385 38,165" />
              <polygon points="275,80 460,195 460,355 275,470 90,355 90,195" />
            </g>

            <g opacity=".1" fill="none" stroke="#D4A0A0" strokeWidth=".4">
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(0 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(45 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(90 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(135 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(180 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(225 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(270 275 275)" />
              <ellipse cx="275" cy="80" rx="12" ry="35" transform="rotate(315 275 275)" />
            </g>

            <g fill="#D4A0A0" opacity=".1">
              <circle cx="275" cy="8" r="2" />
              <circle cx="512" cy="165" r="2" />
              <circle cx="512" cy="385" r="2" />
              <circle cx="275" cy="542" r="2" />
              <circle cx="38" cy="385" r="2" />
              <circle cx="38" cy="165" r="2" />
            </g>

            <circle cx="275" cy="275" r="4" fill="#D4A0A0" opacity=".1" />
          </svg>
        </div>

        <div className="container">
          <div className="testimonials-header">
            <div className="section-label reveal">Testimonials</div>
            <h2 className="section-title reveal reveal-delay-1">
              Patterns Broken. Lives Changed.
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Real stories from people who came for a reading and stayed for a transformation.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <blockquote>
                &ldquo;I came to Dr. Nidhi thinking I needed a reading. What she actually gave me was an
                understanding of why I kept choosing the same destructive relationships. The hypnotherapy
                sessions that followed changed my life in ways I didn&apos;t think were possible.&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar rose">R</div>
                <div>
                  <div className="name">Ritu M.</div>
                  <div className="location">Toronto, Canada</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-1">
              <div className="testimonial-stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <blockquote>
                &ldquo;After three sessions of her coaching package, my anxiety around money — something
                I&apos;d carried my entire life — simply dissolved. She traced it back through my chart
                and worked on it at a subconscious level. I can&apos;t explain it logically, but I feel
                fundamentally different.&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar mauve">S</div>
                <div>
                  <div className="name">Sunita K.</div>
                  <div className="location">Mississauga, Canada</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-2">
              <div className="testimonial-stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <blockquote>
                &ldquo;Dr. Bhan doesn&apos;t just tell you what your stars say. She shows you the
                invisible walls you&apos;ve built around yourself — and then helps you take them down.
                The past life regression session alone was worth more than years of conventional
                therapy.&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar sage">A</div>
                <div>
                  <div className="name">Amit P.</div>
                  <div className="location">Brampton, Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-section" id="book">
        <svg className="cta-decor" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="245" stroke="#C5A66B" strokeWidth=".6" opacity=".08" />
          <circle cx="250" cy="250" r="220" stroke="#C4A0B9" strokeWidth=".4" opacity=".06" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="195" stroke="#D4A0A0" strokeWidth=".4" opacity=".05" />
          <circle cx="250" cy="250" r="170" stroke="#C5A66B" strokeWidth=".3" opacity=".04" strokeDasharray="2 6" />
          <g opacity=".06" fill="none" stroke="#C5A66B" strokeWidth=".5">
            <ellipse cx="250" cy="100" rx="14" ry="35" transform="rotate(0 250 250)" />
            <ellipse cx="250" cy="100" rx="14" ry="35" transform="rotate(60 250 250)" />
            <ellipse cx="250" cy="100" rx="14" ry="35" transform="rotate(120 250 250)" />
            <ellipse cx="250" cy="100" rx="14" ry="35" transform="rotate(180 250 250)" />
            <ellipse cx="250" cy="100" rx="14" ry="35" transform="rotate(240 250 250)" />
            <ellipse cx="250" cy="100" rx="14" ry="35" transform="rotate(300 250 250)" />
          </g>
          <circle cx="250" cy="250" r="8" fill="#C5A66B" opacity=".06" />
        </svg>
        <div className="cta-content">
          <div className="section-label reveal">The First Step</div>
          <h2 className="reveal reveal-delay-1">
            You Already Know<br />
            Something Needs to <em>Change</em>
          </h2>
          <p className="reveal reveal-delay-2">
            The fact that you&apos;re here means part of you is ready. Whether it&apos;s a single
            diagnostic reading or a full coaching journey — the shift starts with one conversation.
          </p>
          <div className="hero-buttons reveal reveal-delay-3">
            <a
              href="/booking"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Session <span>{"\u2192"}</span>
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="services-header">
            <div className="section-label reveal">Contact</div>
            <h2 className="section-title reveal reveal-delay-1">Begin the Conversation</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-item reveal">
              <div className="contact-icon loc">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4>In-Person Studio</h4>
              <p>
                4600 Hwy 7, Suite #208<br />
                Vaughan, Ontario L4L 4Y7
              </p>
            </div>
            <div className="contact-item reveal reveal-delay-1">
              <div className="contact-icon time">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Session Hours</h4>
              <p>
                Monday — Saturday<br />
                8:00 AM — 8:00 PM EST
              </p>
            </div>
            <div className="contact-item reveal reveal-delay-2">
              <div className="contact-icon phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h4>Virtual Sessions</h4>
              <p>
                Zoom consultations available<br />
                for clients worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            Dr. Nidhi Bhan — Subconscious Mind Transformation
          </div>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/drnidhibhan/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/drnidhibhan/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="/booking" target="_blank" rel="noopener noreferrer">
                Book a Session
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          &copy; 2026 Dr. Nidhi Bhan. Subconscious Mind Transformation Expert — Hypnotherapy, Life
          Coaching &amp; Vedic Astrology. Toronto, Canada &amp; Worldwide.
        </div>
      </footer>
    </>
  );
}
