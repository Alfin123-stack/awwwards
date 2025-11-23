import { Play } from "lucide-react";

interface Props {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const NavbarAudioButton = ({ isPlaying, toggleAudio }: Props) => {
  return (
    <button
      onClick={toggleAudio}
      className="relative w-9 h-9 flex items-center justify-center
      rounded-md border border-white/30
      hover:border-amber-400 hover:text-amber-400
      transition-all duration-300 cursor-pointer">
      {!isPlaying && <Play className="w-4 h-4 text-white" />}

      {isPlaying && (
        <div className="flex items-end gap-[3px]">
          <span className="w-[3px] h-2 bg-amber-400 animate-eq1"></span>
          <span className="w-[3px] h-4 bg-amber-400 animate-eq2"></span>
          <span className="w-[3px] h-3 bg-amber-400 animate-eq3"></span>
        </div>
      )}
    </button>
  );
};

export default NavbarAudioButton;
