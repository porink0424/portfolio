import { useMainSectionContext } from "@/contexts/MainSection.context";
import { useEffect, useState } from "react";

const SHORTEN_BAR = 8;

// ヘッダーのsectionItemsBarの長さと位置を制御する。ウィンドウサイズの変更にも対応している。
export default function useSectionItemsBar(
  barRef: React.MutableRefObject<HTMLDivElement | null>,
  itemsWrapperRef: React.MutableRefObject<HTMLDivElement | null>
) {
  const { mainSectionIndex } = useMainSectionContext();

  // ウィンドウサイズの変更に対してbarの位置の更新を行う
  const [resized, setResized] = useState(false);
  useEffect(() => {
    const callback = () => {
      setResized((cur) => !cur);
    };
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  useEffect(() => {
    if (barRef.current && itemsWrapperRef.current) {
      const item = itemsWrapperRef.current.children[
        mainSectionIndex
      ] as HTMLDivElement;
      barRef.current!.style.left = `${item.offsetLeft + SHORTEN_BAR}px`;
      barRef.current!.style.width = `${
        item.getBoundingClientRect().width - SHORTEN_BAR * 2
      }px`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainSectionIndex, resized]);
}
