import 'phaser';
import Phaser from 'phaser';
import Player from '../entity/Player';
import { GridPhysics } from '../physics/GridPhysics';
import Key from '../entity/Key';
import Padlock from '../entity/Padlock';
import {tileMaps, padlockLocation, keyLocations, playerStartPosition} from '../MapInfo'

export const TILE_SIZE = 32;

export const Direction = {
  NONE: 'none',
  LEFT: 'left',
  UP: 'up',
  RIGHT: 'right',
  DOWN: 'down',
};

export default class MapScene extends Phaser.Scene {
  constructor() {
    super('MapScene');
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.level = 0
  }

  onMeetEnemy(player, zone) {
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width - 2);
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height - 2);
    this.cameras.main.shake(300);

    // switch to BattleScene

    this.input.keyboard.enabled=false
    Object.keys(this.allKeys).map(key=>{
      this.allKeys[key]["key"].isDown = false
    })
    this.scene.switch("BattleScene");
  }

  preload() {
    //this.load.image('tiles', 'assets/backgrounds/tiles.png');
    //this.load.tilemapTiledJSON('map', 'assets/backgrounds/testing-map2.json');
    this.load.image('tiles', 'assets/backgrounds/Castle2.png');
    this.load.tilemapTiledJSON('map', tileMaps[this.level]);
    this.load.audio('collide', 'assets/audio/jump.wav');
    this.load.audio('locked', 'assets/audio/locked.wav')
    this.load.spritesheet('key', 'assets/spriteSheets/key.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image('padlock', 'assets/sprites/padlock.png');
    this.load.spritesheet('Ariadne', 'assets/spriteSheets/george.png', {
      frameWidth: 48,
      frameHeight: 48,
    });
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
    this.mapKeys = this.physics.add.group({
      classType: Key,
    });

    keyLocations[this.level].map((coords) => {
      this.mapKeys.create(coords.x, coords.y, 'key');
    });
    this.player = new Player(this, playerStartPosition[this.level].x, playerStartPosition[this.level].y, 'Ariadne').setScale(0.65);

    this.gridPhysics = new GridPhysics(this.player, map);
    this.createAnimations();

    this.padlock = new Padlock(
      this,
      padlockLocation[this.level].x * TILE_SIZE,
      padlockLocation[this.level].y * TILE_SIZE,
      'padlock'
    ).setScale(0.08);
    this.keyboard = this.input.keyboard;

    this.exit = new Phaser.GameObjects.Zone(this, padlockLocation[this.level].x, padlockLocation[this.level].y * TILE_SIZE)


    this.collideSound = this.sound.add('collide', { volume: 0.25 });
    this.lockedSound = this.sound.add('locked')

    this.physics.add.overlap(
      this.player,
      this.exit,
      this.exitLevel,
      null,
      this
    )

    this.physics.add.overlap(
      this.player,
      this.mapKeys,
      this.getKey,
      null,
      this
    );

    this.allKeys = {
      h: {
        key: this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H),
        function: (time) => {
          this.gridPhysics.movePlayer(Direction.LEFT, time, this.collideSound);
        },
      },
      j: {
        key: this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J),
        function: (time) => {
          this.gridPhysics.movePlayer(Direction.DOWN, time, this.collideSound);
        },
      },
      k: {
        key: this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),
        function: (time) => {
          this.gridPhysics.movePlayer(Direction.UP, time, this.collideSound);
        },
      },
      l: {
        key: this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L),
        function: (time) => {
          this.gridPhysics.movePlayer(Direction.RIGHT, time, this.collideSound);
        },
      },
    }

    // invisible triggers
    this.spawns = this.physics.add.group({
      classType: Phaser.GameObjects.Zone,
    });

    for (let i = 0; i < 15; i++) {
      let x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      let y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);

      this.player.beforeBattle = this.player.getPosition();

      if (x === this.player.beforeBattle.x || y === this.player.beforeBattle.y) {
        x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
      }
      this.spawns.create(x, y, 32, 32);
    }

    this.physics.add.overlap(
      this.player,
      this.spawns,
      this.onMeetEnemy,
      false,
      this
    );

    this.sys.events.on('wake', ()=>this.input.keyboard.enabled=true,this)
  }

  update(time, delta) {
    this.player.update(time, this.allKeys);
    this.gridPhysics.update(delta);
  }

  getKey(player, mapKey) {
    this.keyCount++;
    mapKey.disableBody(true, true);
    if (this.keyCount >= 3) {
      this.padlock.disableBody(true, true);
    }
  }

  exitLevel(player, exit) {
    if(this.keyCount >=3){
      this.level ++
      this.scene.restart()
    }else{
      this.lockedSound.play()
    }
  }

  createAnimations() {
    this.anims.create({
      key: 'left',
      frames: [
        { key: 'Ariadne', frame: 1 },
        { key: 'Ariadne', frame: 5 },
        { key: 'Ariadne', frame: 9 },
        { key: 'Ariadne', frame: 13 },
      ],
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'right',
      frames: [
        { key: 'Ariadne', frame: 3 },
        { key: 'Ariadne', frame: 7 },
        { key: 'Ariadne', frame: 11 },
        { key: 'Ariadne', frame: 15 },
      ],
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: [
        { key: 'Ariadne', frame: 0 },
        { key: 'Ariadne', frame: 4 },
        { key: 'Ariadne', frame: 8 },
        { key: 'Ariadne', frame: 12 },
      ],
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'up',
      frames: [
        { key: 'Ariadne', frame: 2 },
        { key: 'Ariadne', frame: 6 },
        { key: 'Ariadne', frame: 10 },
        { key: 'Ariadne', frame: 14 },
      ],
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'idle',
      frames: [{ key: 'Ariadne', frame: 0 }],
      frameRate: 2,
    });
  }
}
