import * as Phaser from 'phaser';
import * as constants from '../constants';
type key = Phaser.Input.Keyboard.Key;

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, hero: string) {
        super(scene, x, y, hero);
        this.setScale(2.5);
        scene.add.existing(this);
        this.addAnims();
    }

    addAnims(): void {
        this.anims.create({
            key: constants.ANIMATE,
            frames: this.anims.generateFrameNames(constants.HERO, {
                prefix: 'NewHero_',
                suffix: '.png',
                start: 3,
                end: 4,
                zeroPad: 2,
            }),
            frameRate: 5,
            repeat: -1,
        });
        this.anims.create({
            key: constants.MOVE,
            frames: this.anims.generateFrameNames(constants.HERO, {
                prefix: 'NewHero_',
                suffix: '.png',
                start: 1,
                end: 2,
                zeroPad: 2,
            }),
            frameRate: 5,
            repeat: -1,
        });
    }
}

export default Player;