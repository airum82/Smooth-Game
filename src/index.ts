import * as Phaser from 'phaser';
import * as SinglePlayer from './SinglePlayer';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [SinglePlayer.Scene],	
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 0 },
		}
	}
};

const game = new Phaser.Game(config);

function preload ()
{
	
}

function create ()
{
}

function update ()
{

}