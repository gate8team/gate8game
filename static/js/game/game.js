//GameState.preload = function(){
////    this.game.stage.backgroundColor = '#71c5cf';
////    this.game.load.spritesheet(this.hero.name, this.hero.spriteUrl, 70, 70, 30);
//};

//GameState.create = function(){
////    this.player = this.game.add.sprite(0, this.game.world.height - 150, this.hero.name);
////    this.game.physics.arcade.enable(this.player);
////    this.player.body.bounce.y = 0;
////    this.player.body.gravity.y = 500;
////    this.player.body.collideWorldBounds = true;
////
////    this.player.animations.add('left', [15, 16, 17, 18], 10, true);
////    this.player.animations.add('top', [1], 10, true);
////    this.player.animations.add('bottom', [23], 10, true);
////    this.player.animations.add('right', [15, 16, 17, 18], 10, true);
////    this.player.animations.add('fight', [11, 10], 10, true);
//};

//GameState.update = function(){
////    this.cursors = this.game.input.keyboard.createCursorKeys();
////    var fightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
////    var jumpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
////    var bottomKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
////    this.player.body.velocity.x = 0;
////
////
////    if (this.cursors.left.isDown)
////    {
////        //  Move to the left
////        this.player.body.velocity.x = -100;
////        this.player.anchor.setTo(.5,.5);
////        this.player.scale.x = -1;
////
////        this.player.animations.play('left');
////    }
////    else if (this.cursors.right.isDown)
////    {
////        //  Move to the right
////        this.player.body.velocity.x = 100;
////        this.player.scale.x = 1;
////
////        this.player.animations.play('right');
////    }
////    else if (jumpKey.isDown)
////    {
////        //  Move to the right
////        this.player.body.velocity.y = -200;
////
//////        console.log(player);
////
////        this.player.animations.play('top');
////    }
////    else if (bottomKey.isDown){
////        this.player.body.velocity.y = 200;
////
////        this.player.animations.play('bottom');
////    }
////    else if (fightKey.isDown){
////        this.player.animations.play('fight');
////    }
////    else
////    {
////        //  Stand still
////        this.player.animations.stop();
////
////        this.player.frame = 4;
////    }
//};

//var gameState = {};

//gameState.main = {};
//gameState.main.prototype = {
//    preload: function(){
//
//    },
//
//    create: function(){
////        this.player = this.game.add.sprite(0, this.game.world.height - 150, this.hero.name);
////        this.game.physics.arcade.enable(this.player);
////        this.player.body.bounce.y = 0;
////        this.player.body.gravity.y = 500;
////        this.player.body.collideWorldBounds = true;
////
////        this.player.animations.add('left', [15, 16, 17, 18], 10, true);
////        this.player.animations.add('top', [1], 10, true);
////        this.player.animations.add('bottom', [23], 10, true);
////        this.player.animations.add('right', [15, 16, 17, 18], 10, true);
////        this.player.animations.add('fight', [11, 10], 10, true);
//    },
//    update: function(){
////        this.cursors = this.game.input.keyboard.createCursorKeys();
////        var fightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
////        var jumpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
////        var bottomKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
////        this.player.body.velocity.x = 0;
////
////
////        if (this.cursors.left.isDown)
////        {
////            //  Move to the left
////            this.player.body.velocity.x = -100;
////            this.player.anchor.setTo(.5,.5);
////            this.player.scale.x = -1;
////
////            this.player.animations.play('left');
////        }
////        else if (this.cursors.right.isDown)
////        {
////            //  Move to the right
////            this.player.body.velocity.x = 100;
////            this.player.scale.x = 1;
////
////            this.player.animations.play('right');
////        }
////        else if (jumpKey.isDown)
////        {
////            //  Move to the right
////            this.player.body.velocity.y = -200;
////
//////        console.log(player);
////
////            this.player.animations.play('top');
////        }
////        else if (bottomKey.isDown){
////            this.player.body.velocity.y = 200;
////
////            this.player.animations.play('bottom');
////        }
////        else if (fightKey.isDown){
////            this.player.animations.play('fight');
////        }
////        else
////        {
////            //  Stand still
////            this.player.animations.stop();
////
////            this.player.frame = 4;
////        }
//    }
//};

//gameState.main.prototype.hero = new Hero('batman', 'static/i/batman.png');

function GameStarter(){};

GameStarter.startGame = function(gameState){
    console.log(gameState);
    var game = new Phaser.Game(1000, 213, Phaser.AUTO, 'game_div');
    game.state.add('main', gameState.prototype);
    game.state.start('main');
};