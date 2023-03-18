import { useLanguageContext } from "@/contexts/Language.context";
import { useEffect, useState } from "react";

// languageKeyに対応する言語のテキストを選択して返す
export default function useSelectData(data: any) {
  const [selectedData, setSelectedData] = useState(data.JP);
  const { languageKey } = useLanguageContext();

  useEffect(() => {
    setSelectedData(data[languageKey] as any);
  }, [data, languageKey]);

  return { selectedData };
}
