import * as Phaser from 'phaser';

class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, ball: string) {
        super(scene, x, y, ball);
        this.setScale(0.75);
        scene.add.existing(this);
    }
}

export default Ball;