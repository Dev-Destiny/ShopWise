import { useState, useEffect } from "react";

export function useScreenType() {
  const getType = (width: number) => {
    if (width < 640) return "mobile";        // < 640px
    if (width < 1024) return "tablet";       // 640px – 1023px
    return "desktop";                        // >= 1024px
  };

  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    type: getType(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreen({
        width,
        height,
        type: getType(width),
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
}
