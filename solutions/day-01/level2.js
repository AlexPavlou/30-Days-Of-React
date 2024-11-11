class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    greet() {
        console.log(`This object is an animal with the following attributes\nname: ${this.name}\nage: ${this.age}\ncolor: ${this.color}\nlegs: ${this.legs}`)
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.name =name;
        this.breed=breed;
    }
    bark() {
        console.log(`Bark Bark Bark`);
    }
    greet() {
        console.log(`This object is a dog of breed '${this.breed}' called ${this.name}.`);
    }
}

const new_dog = new Dog('Rocky', 4, 'brown', 4, 'Pitbull');
new_dog.greet();