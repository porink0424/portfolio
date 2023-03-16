import { LanguageProvider } from "@/contexts/Language.context";
import { MainSectionProvider } from "@/contexts/MainSection.context";
import "modern-css-reset";
import type { AppProps } from "next/app";
import "@/styles/zIndex.scss";
import "@/styles/helper.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <MainSectionProvider>
        <Component {...pageProps} />
      </MainSectionProvider>
    </LanguageProvider>
  );
}
