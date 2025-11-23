import { featureData } from "../../lib/data";
import FeatureCard from "./FeatureCard";


export default function FeaturesGridSection({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return (
    <>
      {/* FEATURE 1 FULL-WIDTH */}
      <div className="w-full">
        <FeatureCard
          large
          title={featureData[0].title}
          text={featureData[0].text}
          video={featureData[0].video}
        />
      </div>

      {/* FEATURE 2–4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <FeatureCard
          large
          title={featureData[1].title}
          text={featureData[1].text}
          video={featureData[1].video}
        />

        <div className="flex flex-col gap-6">
          <FeatureCard
            large={isMobile}
            title={featureData[2].title}
            text={featureData[2].text}
            video={featureData[2].video}
          />
          <FeatureCard
            large={isMobile}
            title={featureData[3].title}
            text={featureData[3].text}
            video={featureData[3].video}
          />
        </div>
      </div>

      {/* FEATURE 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <FeatureCard
          large
          bgColor="bg-purple-950"
          textColor="text-black"
          title="more coming soon"
        />
        <FeatureCard
          large
          title={featureData[4].title}
          text={featureData[4].text}
          video={featureData[4].video}
        />
      </div>
    </>
  );
}
