"use client";

type Props = {
  videoId: string;
  title?: string;
};

export default function VimeoPlayer({ videoId, title = "Video" }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          title={title}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}

