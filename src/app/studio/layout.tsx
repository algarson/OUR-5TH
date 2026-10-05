import type { ReactNode } from "react";
import { StudioMusicProvider } from "./music-player";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return <StudioMusicProvider>{children}</StudioMusicProvider>;
}
