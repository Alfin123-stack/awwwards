import ReusableHeader from "../../ReusableHeader";

export default function AboutHero() {
  return (
    <section className="relative z-20 text-center max-w-3xl mx-auto pt-48 px-6">
      <div className="absolute inset-0 mx-auto max-w-xl blur-[120px] bg-white/5 -z-10"></div>

      <ReusableHeader
        subtitle="Origin Chamber"
        title="Disc<b>o</b>ver the Origin — <b>Zentry</b>"
        description="Where the meta-universe first took form — a nexus of stories, identities, and worlds that continue to expand beyond imagination."
        size="lg"
        className="head-fade"
      />
    </section>
  );
}
