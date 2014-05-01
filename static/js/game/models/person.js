function Person(name, spriteUrl){
    this.name = name;
    this.spriteUrl = (spriteUrl || 'testUrl');
}

Person.prototype.xSpeed = 20;
Person.prototype.ySpeed = 20;
Person.prototype.gravity = 500;
Person.prototype.health = 100;