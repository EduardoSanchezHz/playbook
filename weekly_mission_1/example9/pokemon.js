class Pokemon {
    constructor(name){
        this.name = name
    }

    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    sayMessage() {
        console.log(`Mi pokemon ${this.name} te dice: Heey!`)
    }
}

module.exports = Pokemon;
