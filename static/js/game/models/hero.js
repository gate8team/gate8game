function Hero(name, spriteUrl){
    this.name = name;
    this.spriteUrl = (spriteUrl || 'testUrl');
}

Hero.prototype = Object.create(Person.prototype);