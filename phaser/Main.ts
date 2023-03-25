export const CELL_SIZE = 32;
const SPRITE_KEY = {
  MAP_TIP_TOP: "maptiptop",
  MAP_TIP_CENTER: "maptipcenter",
  MAP_TIP_BOTTOM: "maptipbottom",
  CHEST: "maptipchest",
  CHARACTER: "character",
};
const SPEED = 3;
const MAX_LEVEL = 99;

export default class Main extends Phaser.Scene {
  // mainVisualの分は余白を開けたい
  private cameraMarginTop!: number;

  private level!: Phaser.GameObjects.DOMElement;
  private levelDom!: HTMLElement;
  private levelValue = 1;
  private character!: Phaser.GameObjects.Sprite;
  private chest!: Phaser.GameObjects.Image;
  private tiles!: Phaser.GameObjects.Group;
  private moveInfo: { targetY: number } | null = null;

  // mainContainerの大きさに合わせた数のタイルを作成する
  makeTiles = () => {
    this.tiles = this.add.group();
    const mainContainerHeight = document
      .getElementById("mainContainer")!
      .getBoundingClientRect().height;
    const rowCount = Math.floor(mainContainerHeight / CELL_SIZE);
    this.tiles.add(
      this.add.image(CELL_SIZE, CELL_SIZE / 2, SPRITE_KEY.MAP_TIP_TOP)
    );
    for (let index = 1; index < rowCount - 1; index++) {
      this.tiles.add(
        this.add.image(
          CELL_SIZE,
          CELL_SIZE / 2 + CELL_SIZE * index,
          SPRITE_KEY.MAP_TIP_CENTER
        )
      );
    }
    this.tiles.add(
      this.add.image(
        CELL_SIZE,
        CELL_SIZE / 2 + CELL_SIZE * (rowCount - 1),
        SPRITE_KEY.MAP_TIP_BOTTOM
      )
    );
  };

  // 全てのタイルを破壊する
  destroyTiles = () => {
    this.tiles?.destroy(true, true);
  };

  setLevelPosition = () => {
    this.level.setPosition(this.character.x, this.character.y - 34);
  };

  levelUp = () => {
    if (this.levelValue < MAX_LEVEL) {
      this.levelValue += 1;
      this.levelDom.firstChild!.textContent = `Lv ${this.levelValue}`;
    }
  };

  // containerの大きさに合わせて、タイルを作り直す
  public remake = () => {
    this.destroyTiles();
    this.makeTiles();
    this.cameraMarginTop =
      document.getElementById("mainVisual")!.getBoundingClientRect().height -
      48;
  };

  constructor() {
    super({ key: "Main", active: true });

    // mainVisualの分 + 調整分、カメラの位置をずらすことで、canvasがmainContainerと同じ部分からスタートしているように見せる
    this.cameraMarginTop =
      document.getElementById("mainVisual")!.getBoundingClientRect().height -
      48;

    window.addEventListener("resize", () => {
      this.remake();
    });
  }

  preload = () => {
    this.load.image(SPRITE_KEY.MAP_TIP_TOP, "./phaser/top.png");
    this.load.image(SPRITE_KEY.MAP_TIP_CENTER, "./phaser/center.png");
    this.load.image(SPRITE_KEY.MAP_TIP_BOTTOM, "./phaser/bottom.png");
    this.load.image(SPRITE_KEY.CHEST, "./phaser/chest.png");
    this.load.spritesheet(SPRITE_KEY.CHARACTER, "./phaser/character.png", {
      frameWidth: CELL_SIZE,
      frameHeight: CELL_SIZE,
    });
  };

  create = () => {
    this.anims.create({
      key: `${SPRITE_KEY.CHARACTER}-walk-down`,
      frames: [
        { key: SPRITE_KEY.CHARACTER, frame: 0 },
        { key: SPRITE_KEY.CHARACTER, frame: 1 },
        { key: SPRITE_KEY.CHARACTER, frame: 2 },
        { key: SPRITE_KEY.CHARACTER, frame: 1 },
      ],
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: `${SPRITE_KEY.CHARACTER}-walk-up`,
      frames: [
        { key: SPRITE_KEY.CHARACTER, frame: 9 },
        { key: SPRITE_KEY.CHARACTER, frame: 10 },
        { key: SPRITE_KEY.CHARACTER, frame: 11 },
        { key: SPRITE_KEY.CHARACTER, frame: 10 },
      ],
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: `${SPRITE_KEY.CHARACTER}-idle-down`,
      frames: [{ key: SPRITE_KEY.CHARACTER, frame: 1 }],
      frameRate: 0,
      repeat: -1,
    });
    this.anims.create({
      key: `${SPRITE_KEY.CHARACTER}-idle-up`,
      frames: [{ key: SPRITE_KEY.CHARACTER, frame: 10 }],
      frameRate: 0,
      repeat: -1,
    });

    const characterTargetY = () => {
      const mainContainerHeight = document
        .getElementById("mainContainer")!
        .getBoundingClientRect().height;
      const ret =
        window.scrollY + window.innerHeight / 2 - this.cameraMarginTop;
      return ret < CELL_SIZE
        ? CELL_SIZE
        : ret > mainContainerHeight - CELL_SIZE
        ? mainContainerHeight - CELL_SIZE
        : ret;
    };
    this.character = this.add
      .sprite(CELL_SIZE, characterTargetY(), SPRITE_KEY.CHARACTER)
      .setDepth(2);
    this.chest = this.add
      .image(CELL_SIZE, characterTargetY(), SPRITE_KEY.CHEST)
      .setDepth(1);

    // レベル表示を作成する
    const levelTextDom = document.createElement("p");
    levelTextDom.style.lineHeight = "1";
    levelTextDom.style.width = "100%";
    levelTextDom.style.height = "100%";
    levelTextDom.style.display = "flex";
    levelTextDom.style.justifyContent = "center";
    levelTextDom.style.alignItems = "center";
    levelTextDom.innerText = `Lv ${this.levelValue}`;
    this.levelDom = document.createElement("div");
    this.levelDom.style.width = "60px";
    this.levelDom.style.height = "24px";
    this.levelDom.style.fontFamily = "PixelMplus10-Regular";
    this.levelDom.style.backgroundColor = "#fff";
    this.levelDom.style.border = "2px solid #000";
    this.levelDom.style.borderRadius = "4px";
    this.levelDom.appendChild(levelTextDom);
    this.level = this.add.dom(0, 0, this.levelDom);
    this.setLevelPosition();

    window.addEventListener(
      "scroll",
      () => {
        // 宝箱はスクロールに合わせて直ちに移動する。キャラクターはそれを線形に追跡する。
        this.moveInfo = { targetY: characterTargetY() };
        this.chest.setY(characterTargetY());
      },
      { passive: true }
    );

    this.cameras.main.scrollY = window.scrollY - this.cameraMarginTop;
    window.addEventListener(
      "scroll",
      () => {
        this.cameras.main.scrollY = window.scrollY - this.cameraMarginTop;
      },
      { passive: true }
    );

    this.makeTiles();

    this.character.play(`${SPRITE_KEY.CHARACTER}-idle-down`, true);

    // 全てのロードが終わったタイミングでcanvasを表示する
    document.getElementById("canvas")!.style.opacity = "1";
  };

  update = () => {
    if (this.moveInfo) {
      let hasReached = false;
      if (this.character.y < this.moveInfo.targetY) {
        this.character.y += SPEED;
        this.character.play(`${SPRITE_KEY.CHARACTER}-walk-down`, true);
        if (this.character.y >= this.moveInfo.targetY) {
          this.character.y = this.moveInfo.targetY;
          hasReached = true;
          this.character.play(`${SPRITE_KEY.CHARACTER}-idle-down`, true);
        }
      } else if (this.character.y > this.moveInfo.targetY) {
        this.character.y -= SPEED;
        this.character.play(`${SPRITE_KEY.CHARACTER}-walk-up`, true);
        if (this.character.y <= this.moveInfo.targetY) {
          this.character.y = this.moveInfo.targetY;
          hasReached = true;
          this.character.play(`${SPRITE_KEY.CHARACTER}-idle-up`, true);
        }
      }
      if (hasReached) {
        this.moveInfo = null;
        this.levelUp();
      }

      this.setLevelPosition();
    }
  };
}
