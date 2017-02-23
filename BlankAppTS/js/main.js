// Your code here!
var TheGame = (function () {
    function TheGame() {
        var _this = this;
        this.create = function () {
            _this.game.add.image(0, 0, "title");
            //	Here we set-up our audio sprite
            _this.fx = _this.game.add.audio("sfx");
            _this.fx.allowMultiple = true;
            //	And this defines the markers.
            //	They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
            //	You can also set the volume and loop state, although we don't use them in this example (see the docs)
            _this.fx.addMarker("alien death", 1, 1.0);
            _this.fx.addMarker("boss hit", 3, 0.5);
            _this.fx.addMarker("escape", 4, 3.2);
            _this.fx.addMarker("meow", 8, 0.5);
            _this.fx.addMarker("numkey", 9, 0.1);
            _this.fx.addMarker("ping", 10, 1.0);
            _this.fx.addMarker("death", 12, 4.2);
            _this.fx.addMarker("shot", 17, 1.0);
            _this.fx.addMarker("squit", 19, 0.3);
            //	Make some buttons to trigger the sounds
            _this.makeButton("alien death", 600, 100);
            _this.makeButton("boss hit", 600, 140);
            _this.makeButton("escape", 600, 180);
            _this.makeButton("meow", 600, 220);
            _this.makeButton("numkey", 600, 260);
            _this.makeButton("ping", 600, 300);
            _this.makeButton("death", 600, 340);
            _this.makeButton("shot", 600, 380);
            _this.makeButton("squit", 600, 420);
        };
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: this.preload, create: this.create });
    }
    TheGame.prototype.preload = function () {
        this.game.load.image("title", "images/catastrophi.png");
        this.game.load.spritesheet("button", "images/flixel-button.png", 80, 20);
        this.game.load.bitmapFont("nokia", "fonts/nokia16black.png", "fonts/nokia16black.xml");
        this.game.load.audio("sfx", ["sounds/fx_mixdown.mp3"]);
    };
    TheGame.prototype.makeButton = function (name, x, y) {
        var button = this.game.add.button(x, y, "button", this.click, this, 0, 1, 2);
        button.name = name;
        button.scale.set(2, 1.5);
        button.smoothed = false;
        var text = this.game.add.bitmapText(x, y + 7, "nokia", name, 16);
        text.x += (button.width / 2) - (text.textWidth / 2);
    };
    TheGame.prototype.click = function (button) {
        this.fx.play(button.name);
    };
    return TheGame;
}());
window.onload = function () {
    var game = new TheGame();
};
