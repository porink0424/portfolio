import { useLanguageContext } from "@/contexts/Language.context";
import { useEffect, useState } from "react";

// languageKeyに対応する言語のテキストを選択して返す
export default function useDatum(data: any) {
  const [datum, setDatum] = useState(data.JP);
  const { languageKey } = useLanguageContext();

  useEffect(() => {
    setDatum(data[languageKey] as any);
  }, [data, languageKey]);

  return { datum };
}
