import { useState, type MouseEvent } from "react";
import FeatureCardContainer from "./FeatureCardContainer";
import FeatureCardVideo from "./FeatureCardVideo";
import FeatureCardText from "./FeatureCardText";
import FeatureCardAction from "./FeatureCardAction";

export interface FeatureCardProps {
  title?: string;
  bgColor?: string;
  textColor?: string;
  text?: string;
  video?: string;
  large?: boolean;
}

export default function FeatureCard({
  title,
  bgColor,
  textColor,
  text,
  video,
  large = false,
}: FeatureCardProps) {
  const [transform, setTransform] = useState<string>("");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <FeatureCardContainer
      bgColor={bgColor}
      large={large}
      transform={transform}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <FeatureCardVideo video={video} />
      <FeatureCardText title={title} text={text} textColor={textColor} />
      <FeatureCardAction bgColor={bgColor} textColor={textColor} />
    </FeatureCardContainer>
  );
}
