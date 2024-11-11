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

const Dog = new Animal('Rocky', 6, 'brown', 4);
const Cat = new Animal('Alex', 5, 'gray', 4);