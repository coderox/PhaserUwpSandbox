module PhaserSandboxUwp {

    export class TheGame extends Phaser.Game {
        constructor(config: Phaser.IGameConfig) {
            super(config);

            this.state.add('boot', Boot);
            this.state.add('splash', Splash);
            this.state.add('title', Title);

            this.state.start('boot');
        }
    }
}

function startApp(): void {

    let gameWidth: number = 800;
    let gameHeight: number = 600;

    // There are a few more options you can set if needed, just take a look at Phaser.IGameCongig
    let gameConfig: Phaser.IGameConfig = {
        width: gameWidth,
        height: gameHeight,
        renderer: Phaser.AUTO,
        parent: '',
        resolution: 1,
        forceSetTimeOut: false
    };

    let game = new PhaserSandboxUwp.TheGame(gameConfig);
}


window.onload = () => {
    startApp();
};

