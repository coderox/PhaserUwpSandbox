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

    class Boot extends Phaser.State {
        preload() {
            this.load.image("progressbar", "images/vu.png");
        }

        create() {

            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;

            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here                
            }
            else {
                //  Same goes for mobile settings.
            }

            this.game.state.start('splash', true, false);

        }
    }

    class Splash extends Phaser.State {

        progressbar: Phaser.Sprite;

        preload(): void {
            this.progressbar = this.add.sprite(200, 250, "progressbar");
            this.load.setPreloadSprite(this.progressbar);

            this.load.image("splash", "images/atari_fujilogo.png");
            this.load.image("title", "images/catastrophi.png");

            this.load.spritesheet("button", "images/flixel-button.png", 80, 20);
            this.load.bitmapFont("nokia", "fonts/nokia16black.png", "fonts/nokia16black.xml");

            this.load.audio("sfx", ["sounds/fx_mixdown.mp3"]);
        }

        create(): void {
            var tween = this.add.tween(this.progressbar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startTitle, this);

        }

        startTitle(): void {
            this.game.state.start('title');
                }
    }

    class Title extends Phaser.State {
        game: Phaser.Game;
        fx: Phaser.Sound;

        preload(): void {

        }

        create(): void {
            this.game.add.image(0, 0, "title");

            //	Here we set-up our audio sprite
            this.fx = this.game.add.audio("sfx");
            this.fx.allowMultiple = true;

            //	And this defines the markers.

            //	They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
            //	You can also set the volume and loop state, although we don't use them in this example (see the docs)

            this.fx.addMarker("alien death", 1, 1.0);
            this.fx.addMarker("boss hit", 3, 0.5);
            this.fx.addMarker("escape", 4, 3.2);
            this.fx.addMarker("meow", 8, 0.5);
            this.fx.addMarker("numkey", 9, 0.1);
            this.fx.addMarker("ping", 10, 1.0);
            this.fx.addMarker("death", 12, 4.2);
            this.fx.addMarker("shot", 17, 1.0);
            this.fx.addMarker("squit", 19, 0.3);

            //	Make some buttons to trigger the sounds
            this.makeButton("alien death", 600, 100);
            this.makeButton("boss hit", 600, 140);
            this.makeButton("escape", 600, 180);
            this.makeButton("meow", 600, 220);
            this.makeButton("numkey", 600, 260);
            this.makeButton("ping", 600, 300);
            this.makeButton("death", 600, 340);
            this.makeButton("shot", 600, 380);
            this.makeButton("squit", 600, 420);
        }

        makeButton(name: string, x: number, y: number) {
            var button = this.game.add.button(x, y, "button", this.click, this, 0, 1, 2);
            button.name = name;
            button.scale.set(2, 1.5);
            button.smoothed = false;

            var text = this.game.add.bitmapText(x, y + 7, "nokia", name, 16);
            text.x += (button.width / 2) - (text.textWidth / 2);
        }

        click(button: Phaser.Button) {
            this.fx.play(button.name);
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

