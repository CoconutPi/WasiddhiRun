var Run = Run || {};

Run.Lotus = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'lotus');
    this.anchor.setTo(0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
}

Run.Lotus.prototype = Object.create(Phaser.Sprite.prototype);
Run.Lotus.prototype.constructor = Run.Lotus;