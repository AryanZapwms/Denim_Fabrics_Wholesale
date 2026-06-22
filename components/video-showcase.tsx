"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const videos = [
  {
    id: "factory-tour",
    title: "Inside our weaving mills",
    description:
      "A full walkthrough of our vertically integrated facility — from raw yarn through to finished denim rolls ready for dispatch.",
    // Replace with your actual video URL or YouTube embed ID
    src: "https://res.cloudinary.com/dbqv4cugo/video/upload/v1782112475/factory_owyifo.mp4",   // placeholder — swap with real URL
    poster: "https://res.cloudinary.com/dbqv4cugo/image/upload/v1782112626/factory_videoframe_xzxcdj.png",
    duration: "3:42",
    tag: "Factory Tour",
  },
//   {
//     id: "quality-check",
//     title: "4-point inspection process",
//     description:
//       "Every roll passes our documented QC protocol. Watch how our inspectors grade fabric for shade consistency, defect counts, and shrinkage before packing.",
//     src: "https://www.w3schools.com/html/mov_bbb.mp4",   // placeholder — swap with real URL
//     poster: "/catalog-selvedge.png",
//     duration: "2:15",
//     tag: "Quality Control",
//   },
//   {
//     id: "fabric-range",
//     title: "Fabric range overview",
//     description:
//       "Stretch, selvedge, sustainable, and slub — our product specialist walks you through 40+ variants with hand-feel notes and end-use guidance.",
//     src: "https://www.w3schools.com/html/mov_bbb.mp4",   // placeholder — swap with real URL
//     poster: "/fabric-stretch.png",
//     duration: "4:58",
//     tag: "Products",
//   },
]

export function VideoShowcase() {
  const [activeId, setActiveId] = useState(videos[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const activeVideo = videos.find((v) => v.id === activeId)!

  function selectVideo(id: string) {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setActiveId(id)
    setIsPlaying(false)
  }

  function togglePlay() {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  function toggleMute() {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  function openFullscreen() {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See It In Action"
          title="Watch how we make the fabric you rely on"
          description="From loom to label — get an unfiltered look at the facilities, processes, and people behind every roll we ship."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* ── Main video player ── */}
          <div className="group relative overflow-hidden rounded-2xl bg-primary shadow-2xl">
            <video
              ref={videoRef}
              key={activeId}                      // remount when video changes
              className="aspect-video w-full object-cover"
              src={activeVideo.src}
              poster={activeVideo.poster}
              muted={isMuted}
              playsInline
              onEnded={() => setIsPlaying(false)}
            />

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Controls bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-5 pt-12">
              <div>
                <span className="mb-1 block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/90">
                  {activeVideo.tag}
                </span>
                <p className="font-heading text-lg font-bold leading-snug text-white">
                  {activeVideo.title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={openFullscreen}
                  aria-label="Full screen"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Centre play/pause button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm ring-2 ring-white/30 transition duration-200",
                "hover:scale-110 hover:bg-white/30",
                isPlaying && "opacity-0 group-hover:opacity-100",
              )}
            >
              {isPlaying ? (
                <Pause className="h-7 w-7 fill-white" />
              ) : (
                <Play className="h-7 w-7 translate-x-0.5 fill-white" />
              )}
            </button>
          </div>

          {/* ── Video playlist ── */}
          <ul className="flex flex-col gap-3">
            {videos.map((video) => {
              const active = video.id === activeId
              return (
                <li key={video.id}>
                  <button
                    onClick={() => selectVideo(video.id)}
                    className={cn(
                      "w-full rounded-xl border p-4 text-left transition-all duration-150",
                      active
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border bg-card hover:border-primary/40 hover:shadow-sm",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {/* Thumbnail */}
                      <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={video.poster}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                        {active && isPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <Pause className="h-4 w-4 fill-white text-white" />
                          </div>
                        )}
                        {(!active || !isPlaying) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Play className="h-3.5 w-3.5 translate-x-0.5 fill-white text-white" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                          {video.tag}
                        </span>
                        <p
                          className={cn(
                            "mt-0.5 font-heading text-sm font-bold leading-snug",
                            active ? "text-primary" : "text-foreground",
                          )}
                        >
                          {video.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {video.description}
                        </p>
                        <span className="mt-1.5 block text-[11px] text-muted-foreground">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* ── Active video description ── */}
        <div className="mt-8 rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-heading text-base font-bold text-foreground">
                {activeVideo.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {activeVideo.description}
              </p>
            </div>
            <span className="flex-shrink-0 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              {activeVideo.duration}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}