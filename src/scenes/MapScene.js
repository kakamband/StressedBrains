import 'phaser';
import Phaser from 'phaser';
import Player from "../entity/Player";
import { GridPhysics } from "../physics/GridPhysics"

export const TILE_SIZE = 32

export const Direction = {
  NONE: "none",
  LEFT: "left",
  UP: "up",
  RIGHT: "right",
  DOWN: "down",
}

export default class MapScene extends Phaser.Scene {
  constructor() {
    super('MapScene');
  }

  preload() {
    //this.load.image('tiles', 'assets/backgrounds/tiles.png');
    //this.load.tilemapTiledJSON('map', 'assets/backgrounds/testing-map2.json');
    this.load.image('tiles', 'assets/backgrounds/Castle2.png')
    this.load.tilemapTiledJSON('map', 'assets/backgrounds/levelOne.json')
    this.load.audio('collide', 'assets/audio/jump.wav')
  }
  create() {


    /* Background map */
    const map = this.make.tilemap({
      key: 'map',
    });
    const tileset = map.addTilesetImage('castle', 'tiles');
    const grassLayer = map.createStaticLayer('grass', tileset);
    const pathLayer = map.createStaticLayer('path', tileset);
    const gateLayer = map.createStaticLayer('gate', tileset);

    // << LOAD BACKGROUND AND FOREGROUND SCENES IN PARALLEL HERE >>
   // this.scene.launch('BattleScene');
    // this.scene.launch('FgScene');

    const debugGraphics = this.add.graphics().setAlpha(0.75);
    grassLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });

    /*Character*/
    this.player = new Player(this, 11, 6, null)
    this.gridPhysics = new GridPhysics(this.player, map)

    this.keyboard = this.input.keyboard

    this.collideSound = this.sound.add('collide')

    this.allKeys = {
      "h": {
        "key": this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H),
        "function": (time) => {
          this.gridPhysics.movePlayer(Direction.LEFT, time, this.collideSound)
        }
      },
      "j": {
        "key": this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J),
        "function": (time) => {
          this.gridPhysics.movePlayer(Direction.DOWN, time, this.collideSound)
        }
      },
      "k": {
        "key": this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),
        "function": (time) => {
          this.gridPhysics.movePlayer(Direction.UP, time, this.collideSound)
        }
      },
      "l": {
        "key": this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L),
        "function": (time) => {
          this.gridPhysics.movePlayer(Direction.RIGHT, time, this.collideSound)
        }
      },
    }
  }
  update(time, delta) {
    this.player.update(time, this.allKeys)
    this.gridPhysics.update(delta)
  }
}
