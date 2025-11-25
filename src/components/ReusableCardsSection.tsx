"use client";

interface CardItem {
  title: string;
  img: string;
  desc: string;
}

interface CardsSectionProps {
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  items: CardItem[];
}

export default function ReusableCardsSection({
  cardRefs,
  items,
}: CardsSectionProps) {
  return (
    <section
      className="
        cards-section relative z-30
        px-4 sm:px-6
        pb-16 sm:pb-20 md:pb-28
        max-w-7xl mx-auto
        grid gap-10
        sm:grid-cols-2
        md:grid-cols-3
      ">
      {items.map((card, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el; // <-- FIX: sekarang return void
          }}
          className="
            pro-card relative group cursor-pointer
            perspective-[1000px] sm:perspective-[1200px]
          ">
          <div
            className="
              card-inner bg-white/5 border border-white/10
              p-4 sm:p-6
              rounded-2xl backdrop-blur-xl shadow-xl
              transition-all duration-300
            ">
            <div className="overflow-hidden rounded-xl mb-4 sm:mb-5">
              <img
                alt={card.title}
                src={card.img}
                className="
                  w-full h-40 sm:h-52 object-cover
                  group-hover:scale-110
                  transition-all duration-700
                "
              />
            </div>

            <h3 className="text-lg sm:text-xl font-robert-medium mb-2">
              {card.title}
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
