// FeatureCardVideo.tsx
export default function FeatureCardVideo({ video }: { video?: string }) {
  if (!video) return null;

  return (
    <video
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 h-full w-full object-cover"
    />
  );
}
