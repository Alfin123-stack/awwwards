export default function ClipRevealSection() {
  return (
    <section className="clip-section relative z-20 w-full h-[70vh] mt-28 overflow-hidden px-8">
      <div className="clip-reveal absolute inset-0 rounded-[36px] overflow-hidden scale-100">
        <img
          src="/img/about.webp"
          className="w-full h-full object-cover"
          alt="About section image"
        />
      </div>
    </section>
  );
}
