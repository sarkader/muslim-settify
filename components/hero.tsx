"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Sparkles,
  Briefcase,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {
          /* ignore autoplay blocking */
        });
      }
    };

    attemptPlay();

    const handleUserGesture = () => {
      attemptPlay();
      window.removeEventListener("pointerdown", handleUserGesture);
    };

    window.addEventListener("pointerdown", handleUserGesture);

    return () => {
      window.removeEventListener("pointerdown", handleUserGesture);
    };
  }, []);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {
        /* ignore */
      });
    }
  };

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setIsMuted(false);
    setShowOverlay(false);
    playVideo();
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !isMuted;
    video.muted = newMuted;
    setIsMuted(newMuted);

    if (!newMuted) {
      setShowOverlay(false);
      playVideo();
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }
        @keyframes softPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 20px 40px rgba(0, 102, 255, 0.25);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 28px 60px rgba(0, 102, 255, 0.4);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 20px 40px rgba(0, 102, 255, 0.25);
          }
        }
        .soft-pulse {
          animation: softPulse 2.4s ease-in-out infinite;
        }
        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
        .icon-bounce {
          animation: iconBounce 1.6s ease-in-out infinite;
        }
      `}</style>
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8F3FF] via-white/60 to-white/90" />
          <motion.div
            className="absolute -top-40 -left-32 md:-left-48 w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full blur-3xl opacity-80"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,102,255,0.45) 0%, rgba(0,102,255,0) 65%)",
            }}
            animate={{ x: ["0%", "6%", "-4%", "0%"], y: ["0%", "4%", "-3%", "0%"] }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute -bottom-44 -right-32 md:-right-48 w-[30rem] h-[30rem] md:w-[36rem] md:h-[36rem] rounded-full blur-[140px] opacity-75"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,212,170,0.5) 0%, rgba(0,212,170,0) 70%)",
            }}
            animate={{ x: ["0%", "-5%", "6%", "0%"], y: ["0%", "-6%", "2%", "0%"] }}
            transition={{ duration: 26, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full blur-[120px] opacity-65"
            style={{
              background:
                "radial-gradient(circle at center, rgba(91,43,225,0.45) 0%, rgba(91,43,225,0) 70%)",
            }}
            animate={{ scale: [0.95, 1.05, 0.97], rotate: [0, 6, -4, 0] }}
            transition={{ duration: 24, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-10 right-1/2 translate-x-1/2 w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] rounded-full blur-[110px] opacity-70 mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,198,126,0.45) 0%, rgba(255,198,126,0) 65%)",
            }}
            animate={{ y: ["0%", "8%", "-4%", "0%"], x: ["0%", "3%", "-2%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-6 md:left-16 w-40 h-40 md:w-56 md:h-56 rounded-3xl bg-gradient-to-tr from-[#0066FF]/35 via-[#7648EA]/25 to-transparent blur-2xl opacity-80 mix-blend-screen"
            animate={{ rotate: [0, 10, -8, 0], scale: [0.95, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
          />
        </div>
        <div className="max-w-6xl mx-auto w-full">
          {/* CENTERED HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A202C] leading-[1.2] mb-4 md:mb-6 max-w-4xl mx-auto">
              Learn Appointment Setting & Earn{" "}
              <span className="bg-gradient-to-r from-[#0066FF] via-purple-600 to-[#00D4AA] bg-clip-text text-transparent font-extrabold animate-gradient">
                $3k-$15k Per Month
              </span>
              {" "}Remotely
            </h1>
            <p className="text-lg sm:text-xl text-[#718096] leading-relaxed max-w-3xl mx-auto">
              Join 150+ Muslims building halal income from anywhere—perfect for hijrah to Madinah, UAE, or other Islamic countries. Watch this 3-minute video to understand how it works.
            </p>
          </motion.div>

          {/* HUGE VIDEO - MAIN FOCAL POINT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="relative">
              {/* Video badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#0066FF] text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full shadow-lg">
                  ▶ WATCH THIS FIRST
                </div>
              </div>

              {/* Video container */}
              <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#E2E8F0] bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/videos/main.mp4"
                  autoPlay
                  muted={isMuted}
                  playsInline
                  loop
                  preload="metadata"
                />
                {showOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={handleUnmute}
                      className="soft-pulse flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#0066FF]/90 px-10 py-8 text-white text-center ring-2 ring-white/30 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                    >
                      <Volume2 className="icon-bounce w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" />
                      <div className="space-y-1">
                        <p className="text-lg md:text-2xl font-semibold uppercase tracking-wide">
                          Your video is playing
                        </p>
                        <p className="text-sm md:text-lg font-bold">
                          Click to unmute
                        </p>
                      </div>
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="absolute bottom-4 right-4 inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur px-4 py-2 text-[#1A202C] font-semibold shadow-lg hover:bg-white transition"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                  <span className="ml-2 hidden sm:inline text-sm">
                    {isMuted ? "Muted" : "Sound on"}
                  </span>
                </button>
              </div>

              {/* Video caption */}
              <p className="text-center text-sm text-[#718096] mt-4">
                Watch how Muslim Settify works in under 3 minutes
              </p>
            </div>
          </motion.div>

          {/* JOB BOARD HIGHLIGHT BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white border border-[#0066FF] rounded-full px-6 py-3 shadow-sm">
              <Briefcase className="w-5 h-5 text-[#0066FF]" />
              <span className="text-[#1A202C] font-semibold text-base">
                Up to 20 new jobs posted daily
              </span>
            </div>
          </motion.div>

          {/* OUTCOME BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-6 md:mb-10"
          >
            <div className="bg-white border border-[#E2E8F0] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-center shadow-sm">
              <p className="text-xs md:text-sm uppercase tracking-wide text-[#718096] font-semibold mb-3">
                Proven Outcomes From Our Community
              </p>
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-3">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#00D4AA]" />
                <p className="text-xl md:text-3xl lg:text-4xl font-bold text-[#1A202C]">
                  Students inside are hitting consistent $10k+ months
                </p>
              </div>
              <p className="text-sm md:text-base text-[#718096]">
                Backed by 150+ active students sharpening their skills together every week.
              </p>
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm md:text-lg px-6 md:px-12 py-3 md:py-6 rounded-xl shadow-[0_6px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_8px_25px_rgba(0,102,255,0.4)] hover:-translate-y-1 transition-all duration-200 group w-full sm:w-auto"
              >
                Apply Now
                <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#E2E8F0] hover:border-[#0066FF] hover:text-[#0066FF] text-[#1A202C] font-bold text-sm md:text-lg px-6 md:px-12 py-3 md:py-6 rounded-xl bg-white transition-all duration-200 w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector("#features");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Learn More ↓
            </Button>
          </motion.div>

          {/* TRUST BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center text-sm text-[#718096]"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>Up to 20 jobs posted daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>Active private community 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>Faith-first mentorship and accountability</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D4AA] flex-shrink-0" />
              <span>No experience required</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
