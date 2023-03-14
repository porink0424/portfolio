import { SECTION_KEY } from "@/constants/section";
import { useMainSectionContext } from "@/contexts/MainSection.context";
import { useCallback, useEffect, useRef } from "react";

export default function useMainSection(
  refs: React.MutableRefObject<null | HTMLElement>[]
) {
  const { setMainSectionIndex } = useMainSectionContext();
  const prevMainSectionIndex = useRef<number | null>(null);

  // 一つ前のsectionIndexと異なるときだけ、setMainSectionIndex()を呼ぶ
  const setMainSectionIndexEfficiently = useCallback(
    (sectionIndex: number) => {
      if (sectionIndex !== prevMainSectionIndex.current) {
        prevMainSectionIndex.current = sectionIndex;
        setMainSectionIndex(sectionIndex);
      }
    },
    [setMainSectionIndex]
  );

  const onScroll = useCallback(() => {
    if (refs.every((ref) => !!ref.current)) {
      const midY = Math.floor(window.innerHeight / 2);
      if (midY < refs[0].current!.getBoundingClientRect().top) {
        setMainSectionIndexEfficiently(0);
        return;
      }
      refs.forEach((ref, index) => {
        if (
          ref.current!.getBoundingClientRect().top <= midY &&
          midY <= ref.current!.getBoundingClientRect().bottom
        ) {
          setMainSectionIndexEfficiently(index);
          return;
        }
      });
      if (refs.slice(-1)[0].current!.getBoundingClientRect().bottom <= midY) {
        setMainSectionIndexEfficiently(SECTION_KEY.length - 1);
        return;
      }
    }
  }, [refs, setMainSectionIndexEfficiently]);

  useEffect(() => {
    if (refs.length !== SECTION_KEY.length) {
      throw new Error("All refs should be passed to `useMainSection.`");
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
}
