"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vimeo embed that, once the viewer hits play, docks to the bottom-left corner
 * and keeps playing when its inline slot scrolls off screen — then snaps back
 * when you scroll the section into view again. A close button dismisses + pauses.
 *
 * The iframe is ONE element that never unmounts; only its wrapper's positioning
 * flips (absolute → fixed), so playback is uninterrupted. Play/pause is read
 * from the Vimeo Player API. Reduced-motion safe (no animation — an instant
 * dock, not a transition).
 */
declare global {
  interface Window {
    Vimeo?: { Player: new (el: HTMLIFrameElement) => VimeoPlayer };
  }
}
type VimeoPlayer = { on: (e: string, cb: () => void) => void; pause: () => void };

export default function FloatingVimeo({ src, title }: { src: string; title: string }) {
  const holderRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  // Vimeo Player API — know when the video is actually playing.
  useEffect(() => {
    let cancelled = false;
    const init = () => {
      if (cancelled || !window.Vimeo || !iframeRef.current || playerRef.current) return;
      const p = new window.Vimeo.Player(iframeRef.current);
      playerRef.current = p;
      p.on("play", () => setPlaying(true));
      p.on("pause", () => setPlaying(false));
      p.on("ended", () => setPlaying(false));
    };
    if (window.Vimeo) {
      init();
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[src*="player.vimeo.com/api/player.js"]');
      if (existing) {
        existing.addEventListener("load", init);
      } else {
        const s = document.createElement("script");
        s.src = "https://player.vimeo.com/api/player.js";
        s.async = true;
        s.addEventListener("load", init);
        document.body.appendChild(s);
      }
    }
    return () => { cancelled = true; };
  }, []);

  // Is the inline slot on screen? (re-arms the dock each time it re-enters)
  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
        if (e.isIntersecting) setDismissed(false);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const floating = playing && !inView && !dismissed;

  return (
    <div ref={holderRef} className="relative aspect-video">
      <div
        className={
          floating
            ? "fixed bottom-5 left-5 z-[55] aspect-video w-[clamp(220px,30vw,360px)] overflow-hidden rounded-[14px] border border-white/15 bg-carbon shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            : "absolute inset-0 overflow-hidden rounded-[19px] bg-carbon"
        }
      >
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          className="h-full w-full"
        />
        {floating && (
          <button
            type="button"
            onClick={() => {
              setDismissed(true);
              try { playerRef.current?.pause(); } catch { /* noop */ }
            }}
            aria-label="Close floating video"
            className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full border border-white/30 bg-black/55 font-mono text-[15px] text-white backdrop-blur-sm transition-colors hover:border-white/70"
          >
            ✕
          </button>
        )}
      </div>
      {/* inline slot keeps its space + shows a hint while the player is docked */}
      {floating && (
        <div className="absolute inset-0 grid place-items-center rounded-[19px] border border-white/10 bg-carbon/50">
          <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-chrome">Playing in the corner ↘</span>
        </div>
      )}
    </div>
  );
}
