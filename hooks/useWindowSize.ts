import { useEffect, useState } from "react";

// 画面サイズを判定する
export default function useWindowSize() {
  const [smallerThanTablet, setSmallerThanTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallerThanTablet(true);
      } else {
        setSmallerThanTablet(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { smallerThanTablet };
}
