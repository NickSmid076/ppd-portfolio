"use client";

type Props = {
  src: string;
  poster?: string;
};

export default function VideoPlayer({ src, poster }: Props) {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-lg">
      <video src={src} poster={poster} controls playsInline className="h-full w-full object-cover">
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
