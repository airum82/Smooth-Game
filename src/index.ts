import * as Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: {
			preload: preload,
			create: create,
			update: update
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: true,
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