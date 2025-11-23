export default function AboutHeroClip() {
  return (
    <div className="h-dvh w-screen" id="clip">
      <div className="mask-clip-path about-image">
        <img
          src="img/about.webp"
          alt="Background"
          className="absolute left-0 top-0 size-full object-cover"
        />
      </div>
    </div>
  );
}
