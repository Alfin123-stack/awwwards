export default function ContactForm() {
  return (
    <section className="form-section relative z-30 px-6 pb-40 max-w-3xl mx-auto grid gap-8">
      <div className="form-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>

      <div className="form-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>

      <div className="form-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-40">
        <textarea
          placeholder="Message"
          className="w-full h-full bg-transparent outline-none resize-none text-white placeholder-gray-400"
        />
      </div>

      <button className="form-block mt-4 px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-robert-medium hover:bg-white/20 transition-all duration-300 tracking-wide uppercase">
        Send Message
      </button>
    </section>
  );
}
