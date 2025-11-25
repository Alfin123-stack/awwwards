import type { Ref } from "react";

interface GridItem {
  title: string;
  media: string;
  subtitle?: string;
}

export interface ReusableGridCardProps {
  item: GridItem;
  cardRef: Ref<HTMLDivElement>;
  innerSelector?: string;
}

export default function ReusableGridCard({
  item,
  cardRef,
  innerSelector = "",
}: ReusableGridCardProps) {
  return (
    <div
      ref={cardRef}
      className="pro-card relative group cursor-pointer perspective-[1200px]">
      <div
        className={`${innerSelector} bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl p-6 transition-all duration-300`}>
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src={item.media}
            className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700"
            alt={item.title}
          />
        </div>

        <h3 className="text-xl font-robert-medium">{item.title}</h3>
        {item.subtitle && (
          <p className="text-gray-300 text-sm mt-2">{item.subtitle}</p>
        )}
      </div>
    </div>
  );
}
