// Your code here!

class TheGame {
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;
    fx: Phaser.Sound;

    preload() {
        this.game.load.image("title", "images/catastrophi.png");

        this.game.load.spritesheet("button", "images/flixel-button.png", 80, 20);
        this.game.load.bitmapFont("nokia", "fonts/nokia16black.png", "fonts/nokia16black.xml");

        this.game.load.audio("sfx", ["sounds/fx_mixdown.mp3"]);
    }

    create = () => {
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

    click(button : Phaser.Button) {
        this.fx.play(button.name);
    }

}

window.onload = () => {
    var game = new TheGame();
};
