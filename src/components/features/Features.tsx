import useIsMobile from "../../hooks/useIsMobile";
import FeaturesGridSection from "./FeaturesGridSection";
import FeaturesTitleSection from "./FeaturesTitleSection";

export default function Features() {
  const isMobile = useIsMobile();

  return (
    <section className="w-full bg-black p-6 sm:p-10 grid grid-cols-1 gap-10">
      <FeaturesTitleSection />
      <FeaturesGridSection isMobile={isMobile} />
    </section>
  );
}
