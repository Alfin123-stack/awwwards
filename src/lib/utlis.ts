export const getVideoSrc = (index: number, total: number = 4) => {
  const safeIndex = ((index - 1 + total) % total) + 1;
  return `/videos/hero-${safeIndex}.mp4`;
};
