import { YouTubeEmbed } from "@next/third-parties/google";

export default function YouTubeVideo() {
  return (
    <YouTubeEmbed
      videoid='6guk1TICiGM'
      width={720}
      height={405}
      params='autoplay=1&mute=1&controls=0&loop=1'
      playlabel={"Play Video"}
      style='border-radius: 8px; overflow: hidden;'
    />
  );
}
