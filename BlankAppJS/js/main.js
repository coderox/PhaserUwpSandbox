﻿// Your code here!

var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create });

function preload() {

    game.load.image('title', 'images/catastrophi.png');

    game.load.spritesheet('button', 'images/flixel-button.png', 80, 20);
    game.load.bitmapFont('nokia', 'fonts/nokia16black.png', 'fonts/nokia16black.xml');

    game.load.audio('sfx', [ 'sounds/fx_mixdown.mp3' ]);
}

var fx;

function create() {

    game.add.image(0, 0, 'title');

    //	Here we set-up our audio sprite
    fx = game.add.audio('sfx');
    fx.allowMultiple = true;

    //	And this defines the markers.

    //	They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
    //	You can also set the volume and loop state, although we don't use them in this example (see the docs)

    fx.addMarker('alien death', 1, 1.0);
    fx.addMarker('boss hit', 3, 0.5);
    fx.addMarker('escape', 4, 3.2);
    fx.addMarker('meow', 8, 0.5);
    fx.addMarker('numkey', 9, 0.1);
    fx.addMarker('ping', 10, 1.0);
    fx.addMarker('death', 12, 4.2);
    fx.addMarker('shot', 17, 1.0);
    fx.addMarker('squit', 19, 0.3);

    //	Make some buttons to trigger the sounds
    makeButton('alien death', 600, 100);
    makeButton('boss hit', 600, 140);
    makeButton('escape', 600, 180);
    makeButton('meow', 600, 220);
    makeButton('numkey', 600, 260);
    makeButton('ping', 600, 300);
    makeButton('death', 600, 340);
    makeButton('shot', 600, 380);
    makeButton('squit', 600, 420);

}

function makeButton(name, x, y) {

    var button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    var text = game.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

}

function click(button) {

    fx.play(button.name);

}