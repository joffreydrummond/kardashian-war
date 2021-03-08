function Char(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.gender = gender;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function () {
        console.log(
            "Name: " + this.name +
            "\nProfession: " + this.profession +
            "\nAge: " + this.age +
            "\nGender: " + this.gender +
            "\nStrength: " + this.strength +
            "\nHitPoints: " + this.hitPoints
        );
        console.log("\n------------------------\n");
    };
    this.isAlive = function () {
        if (this.hitPoints > 0) {
            console.log(this.name + " is still alive. Fight on!");
        } else if (this.hitPoints <= 0) {
            console.log(this.name + " has been defeated!");
        }
    };
    this.attack = function (char2) {
        char2.hitPoints -= this.strength;
        }
}

let goon = new Char("Goon", "Fight", "M", 34, 100, 7);
let goon2 = new Char("Goonie", "Fighter", "M", 34, 100, 10);


goon.printStats();
goon.isAlive();
goon2.printStats();
goon2.attack(goon);
goon.printStats();
