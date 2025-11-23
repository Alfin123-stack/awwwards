import { getVideoSrc } from "../../lib/utlis";

export default function MiniVideo({
  currentIndex,
  nextVideoRef,
  onClick,
  onLoad,
}: {
  currentIndex: number;
  nextVideoRef: React.RefObject<HTMLVideoElement>;
  onClick: () => void;
  onLoad: () => void;
}) {
  return (
    <div className="absolute inset-0 z-50 flex justify-center items-center">
      <div
        className="
          mini-video 
          w-40 h-40          /* mobile */
          sm:w-48 sm:h-48    /* tablet kecil */
          md:w-56 md:h-56    /* tablet besar */
          lg:w-64 lg:h-64    /* desktop */
          rounded-lg overflow-hidden cursor-pointer shadow-lg 
          opacity-0 scale-50 
          hover:opacity-100 hover:scale-100 
          transition-all duration-500 ease-in-out
        "
        onClick={onClick}>
        <video
          id="next-video"
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex + 1)}
          onLoadedData={onLoad}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
