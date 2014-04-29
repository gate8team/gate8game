var hero = new Hero('batman', 'static/i/batman.png');
var player = null, cursors = null;
var game = null;

function startGame(){
    game = new Phaser.Game(960, 200, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });
    return game;
}

function preload() {
    game.stage.backgroundColor = '#71c5cf';
    game.load.spritesheet('batman', 'static/i/batman.png', 70, 70, 30);
}

function create() {
    player = game.add.sprite(0, game.world.height - 150, 'batman');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0;
    player.body.gravity.y = 500;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [15, 16, 17, 18], 10, true);
    player.animations.add('top', [1], 10, true);
    player.animations.add('bottom', [23], 10, true);
    player.animations.add('right', [15, 16, 17, 18], 10, true);
    player.animations.add('fight', [11, 10], 10, true);
}

function update() {
    cursors = game.input.keyboard.createCursorKeys();
    var fightKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    var bottomKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    player.body.velocity.x = 0;


    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -100;
        player.anchor.setTo(.5,.5);
        player.scale.x = -1;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 100;
        player.scale.x = 1;

        player.animations.play('right');
    }
    else if (jumpKey.isDown)
    {
        //  Move to the right
        player.body.velocity.y = -200;

//        console.log(player);

        player.animations.play('top');
    }
    else if (bottomKey.isDown){
        player.body.velocity.y = 200;

        player.animations.play('bottom');
    }
    else if (fightKey.isDown){
        player.animations.play('fight');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
}