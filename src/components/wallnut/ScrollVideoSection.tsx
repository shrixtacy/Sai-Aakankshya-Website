'use client';

import { useEffect, useRef } from 'react';

export default function ScrollVideoSection() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);
  const text1Ref  = useRef<HTMLDivElement>(null);
  const text2Ref  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let killed = false;
    const triggers: any[] = [];

    const boot = async () => {
      const { gsap }         = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (killed) return;

      const outer  = outerRef.current;
      const video  = videoRef.current;
      const text1  = text1Ref.current;
      const text2  = text2Ref.current;
      if (!outer || !video || !text1 || !text2) return;

      // hide both texts initially
      gsap.set(text1, { autoAlpha: 0, y: 36, scale: 0.93 });
      gsap.set(text2, { autoAlpha: 0, y: 36, scale: 0.93 });

      const build = () => {
        if (killed) return;
        const totalDur = video.duration || 8;

        /* ── shared scrollTrigger config ─────────────────────────── */
        const ST = {
          trigger : outer,
          start   : 'top top',
          end     : '+=300%',
          scrub   : 1.8,
        };

        /* ── 1. video scrub ──────────────────────────────────────── */
        const t0 = gsap.to(video, {
          currentTime : totalDur,
          ease        : 'none',
          scrollTrigger: { ...ST, scrub: 2 },
        });
        triggers.push(t0.scrollTrigger);

        /* ── 2. FROM CONCEPT
              0 %–14 %  → fade + scale in
              14%–42%   → hold
              42%–55%   → fade + scale out
              55%–100%  → invisible (pad)          ─────────────────── */
        const tl1 = gsap.timeline({ scrollTrigger: ST });
        tl1
          .to(text1, { autoAlpha: 1, y: 0, scale: 1,    ease: 'power3.out', duration: 0.14 })
          .to(text1, { autoAlpha: 1,                                          duration: 0.28 })
          .to(text1, { autoAlpha: 0, y: -28, scale: 1.05, ease: 'power3.in', duration: 0.13 })
          .to(text1, { autoAlpha: 0,                                          duration: 0.45 });
        triggers.push(tl1.scrollTrigger);

        /* ── 3. TO COMPLETION
              0 %–54 %  → invisible (pad / wait)
              54%–68%   → fade + scale in
              68%–86%   → hold
              86%–100%  → fade + scale out         ─────────────────── */
        const tl2 = gsap.timeline({ scrollTrigger: ST });
        tl2
          .to(text2, { autoAlpha: 0,                                          duration: 0.54 })
          .to(text2, { autoAlpha: 1, y: 0, scale: 1,    ease: 'power3.out', duration: 0.14 })
          .to(text2, { autoAlpha: 1,                                          duration: 0.18 })
          .to(text2, { autoAlpha: 0, y: -28, scale: 1.05, ease: 'power3.in', duration: 0.14 });
        triggers.push(tl2.scrollTrigger);

        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        build();
      } else {
        video.addEventListener('loadedmetadata', build, { once: true });
      }
    };

    boot();

    return () => {
      killed = true;
      triggers.forEach(t => t?.kill());
    };
  }, []);

  return (
    /*
      outerRef  — 400 vh tall scroll container
      stickyRef — CSS sticky viewport (100 vh), stays pinned while
                  the user scrolls through the extra 300 vh
    */
    <div
      ref={outerRef}
      style={{ position: 'relative', height: '400vh' }}
    >
      <div
        ref={stickyRef}
        style={{
          position : 'sticky',
          top      : 0,
          width    : '100%',
          height   : '100vh',
          overflow : 'hidden',
          background: '#050505',
        }}
      >
        {/* ── video ─────────────────────────────────────────────── */}
        <video
          ref={videoRef}
          src="/assets/images/output_house002_tc.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            position      : 'absolute',
            inset         : 0,
            width         : '100%',
            height        : '100%',
            objectFit     : 'cover',
            objectPosition: 'center',
          }}
        />

        {/* ── cinematic gradient overlay ─────────────────────────── */}
        <div style={{
          position  : 'absolute',
          inset     : 0,
          background: [
            'linear-gradient(to bottom,',
            '  rgba(5,5,5,0.62) 0%,',
            '  rgba(5,5,5,0.18) 40%,',
            '  rgba(5,5,5,0.18) 60%,',
            '  rgba(5,5,5,0.72) 100%)',
          ].join(''),
          zIndex: 1,
        }} />

        {/* ── subtle vignette ───────────────────────────────────── */}
        <div style={{
          position  : 'absolute',
          inset     : 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
          zIndex    : 2,
        }} />

        {/* ── FROM CONCEPT ──────────────────────────────────────── */}
        <div
          ref={text1Ref}
          style={{
            position      : 'absolute',
            inset         : 0,
            zIndex        : 3,
            display       : 'flex',
            flexDirection : 'column',
            alignItems    : 'center',
            justifyContent: 'center',
            textAlign     : 'center',
            padding       : '0 2rem',
            pointerEvents : 'none',
            willChange    : 'transform, opacity',
          }}
        >
          {/* eyebrow */}
          <span style={{
            display      : 'block',
            color        : 'rgba(253,196,31,0.85)',
            fontSize     : 'clamp(0.5rem, 0.75vw, 0.65rem)',
            fontWeight   : 300,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            marginBottom : '1.8rem',
            fontFamily   : '"Inter", sans-serif',
          }}>
            SAI AAKANKSHYA ASSOCIATES
          </span>

          {/* main heading */}
          <h2 style={{
            color        : '#ffffff',
            fontSize     : 'clamp(2.6rem, 8vw, 8.5rem)',
            fontWeight   : 100,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            lineHeight   : 1,
            fontFamily   : '"Inter", sans-serif',
            margin       : 0,
          }}>
            FROM CONCEPT
          </h2>

          {/* gold rule */}
          <div style={{
            width     : '2.5rem',
            height    : '1px',
            background: 'rgba(253,196,31,0.8)',
            marginTop : '2.2rem',
          }} />
        </div>

        {/* ── TO COMPLETION ─────────────────────────────────────── */}
        <div
          ref={text2Ref}
          style={{
            position      : 'absolute',
            inset         : 0,
            zIndex        : 3,
            display       : 'flex',
            flexDirection : 'column',
            alignItems    : 'center',
            justifyContent: 'center',
            textAlign     : 'center',
            padding       : '0 2rem',
            pointerEvents : 'none',
            willChange    : 'transform, opacity',
          }}
        >
          {/* eyebrow */}
          <span style={{
            display      : 'block',
            color        : 'rgba(253,196,31,0.85)',
            fontSize     : 'clamp(0.5rem, 0.75vw, 0.65rem)',
            fontWeight   : 300,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            marginBottom : '1.8rem',
            fontFamily   : '"Inter", sans-serif',
          }}>
            PREMIUM INFRASTRUCTURE EXECUTION
          </span>

          {/* main heading */}
          <h2 style={{
            color        : '#ffffff',
            fontSize     : 'clamp(2.6rem, 8vw, 8.5rem)',
            fontWeight   : 100,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            lineHeight   : 1,
            fontFamily   : '"Inter", sans-serif',
            margin       : 0,
          }}>
            TO COMPLETION
          </h2>

          {/* gold rule */}
          <div style={{
            width     : '2.5rem',
            height    : '1px',
            background: 'rgba(253,196,31,0.8)',
            marginTop : '2.2rem',
          }} />
        </div>

        {/* ── scroll hint (fades out as user scrolls) ───────────── */}
        <div style={{
          position      : 'absolute',
          bottom        : '2.5rem',
          left          : '50%',
          transform     : 'translateX(-50%)',
          zIndex        : 4,
          display       : 'flex',
          flexDirection : 'column',
          alignItems    : 'center',
          gap           : '0.5rem',
          opacity       : 0.5,
          pointerEvents : 'none',
        }}>
          <span style={{
            color        : '#fff',
            fontSize     : '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontFamily   : '"Inter", sans-serif',
            fontWeight   : 300,
          }}>Scroll</span>
          <div style={{
            width           : '1px',
            height          : '2.5rem',
            background      : 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
            animation       : 'scrollPulse 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>

      {/* ── keyframe for scroll hint ──────────────────────────────── */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1);   }
          50%       { opacity: 0.9; transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
}
