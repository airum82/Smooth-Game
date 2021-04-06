import * as Phaser from 'phaser';
import * as Assets from './assets';
import * as constants from '../constants';
import { Player } from '../Player';
import { Ball } from '../Ball';

type key = Phaser.Input.Keyboard.Key;

class SinglePlayerScene extends Phaser.Scene {
    player: Player;
    ball: Ball;
    Akey: key;
    Wkey: key;
    Skey: key;
    Dkey: key;
    constructor() {
        super({
            key: 'SinglePlayer',
            physics: {
                default: 'arcade',
		        arcade: {
                    debug: true,
                    customUpdate: false,
                    gravity: { y: 0 },
		        }
            }
        });
    }

    preload() {
        this.load.atlas(constants.HERO, Assets.hero, Assets.heroJson);
        this.load.image(constants.BACKGROUND, Assets.background);
        this.load.image(constants.BALL, Assets.ball);
    }

    create() {
        this.add.image(400, 300, constants.BACKGROUND);
        this.player = new Player(this, 100, 400, constants.HERO);
        this.ball = new Ball(this, 130, 430, constants.BALL);
        this.physics.world.enable(this.ball);
        this.ball.setCollideWorldBounds(true);
        this.physics.world.enable(this.player);
        this.physics.enableUpdate();
        this.addControls();
    }
    
    update() {
        if (this.Dkey.isDown)
        {
            this.player.flipX = false;
            this.player.setVelocity(100, 0);
            this.player.anims.play(constants.MOVE, true);
        } else if (this.Akey.isDown) {
            this.player.flipX = true;
            this.player.setVelocity(-100, 0);
            this.player.anims.play(constants.MOVE, true);
        } else if (this.Wkey.isDown) {
            this.player.setVelocity(0, -100);
            this.player.anims.play(constants.MOVE, true);
        } else if (this.Skey.isDown) {
            this.player.setVelocity(0, 100);
            this.player.anims.play(constants.MOVE, true);
        } else {
            this.player.setVelocity(0, 0);
            this.player.anims.play('animate', true);
        }
        // this.input.keyboard.on('keydown', this.handleInput);
    }

    addControls() {
        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.Wkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.Skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    handleInput(keyboardEvent: KeyboardEvent) {
        switch (keyboardEvent.key) {
            case 'W' || 'A' || 'S' || 'D':
                this.player.anims.play(constants.MOVE, true);
            case 'W':
                this.player.setVelocity(0, -100);
                break;
            case 'S':
                this.player.setVelocity(0, 100);
                break;
            case 'A':
                this.player.setVelocity(-100, 0);
                break;
            case 'D':
                this.player.setVelocity(100, 0);
                break;
            default:
                this.player.setVelocity(0, 0);
                this.player.anims.play(constants.ANIMATE, true);
        }
    }
};

export default SinglePlayerScene;