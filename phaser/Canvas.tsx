import { useLanguageContext } from "@/contexts/Language.context";
import Phaser from "phaser";
import { useEffect, useRef } from "react";
import Main, { CELL_SIZE } from "./Main";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "canvas",
  transparent: true,
  dom: {
    createContainer: true,
  },
  backgroundColor: "#000000",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: CELL_SIZE * 2,
    height: window.innerHeight,
  },
  scene: [Main],
};

export default function Canvas() {
  const gameRef = useRef<Phaser.Game | null>(null);
  const gameGeneratedRef = useRef(false);
  const { languageKey } = useLanguageContext();

  useEffect(() => {
    if (!gameGeneratedRef.current) {
      gameGeneratedRef.current = true;
      gameRef.current = new Phaser.Game(config);
    }
  }, []);

  useEffect(() => {
    const scene = gameRef.current?.scene.getScene("Main") as Main;
    if (scene) {
      setTimeout(() => {
        scene.remake();
      }, 100);
    }
  }, [languageKey]);

  return <></>;
}
