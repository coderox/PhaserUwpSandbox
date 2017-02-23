module PhaserSandboxUwp {

    export class Splash extends Phaser.State {

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
}