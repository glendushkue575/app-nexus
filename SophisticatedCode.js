/* 
   Filename: SophisticatedCode.js

   Description: 
   This code demonstrates a complex JavaScript program that simulates a virtual world
   with multiple entities interacting with each other. It includes various classes, 
   inheritance, and advanced programming concepts.

   Usage: 
   Execute this code in a JavaScript environment such as a browser console or Node.js.

*/

// Class representing a generic entity in the virtual world
class Entity {
  constructor(name) {
    this.name = name;
    this.position = { x: 0, y: 0 };
  }

  move(x, y) {
    this.position.x += x;
    this.position.y += y;
    console.log(`${this.name} moved to (${this.position.x}, ${this.position.y})`);
  }

  attack(target) {
    console.log(`${this.name} is attacking ${target.name}`);
  }
}

// Class representing a player entity, inherits from Entity
class Player extends Entity {
  constructor(name, level) {
    super(name);
    this.level = level;
    this.health = 100;
  }

  attack(target) {
    super.attack(target);
    console.log(`${this.name} deals 10 damage to ${target.name}`);
    target.health -= 10;
    console.log(`${target.name} health: ${target.health}`);
  }
}

// Class representing an enemy entity, inherits from Entity
class Enemy extends Entity {
  constructor(name, difficulty) {
    super(name);
    this.difficulty = difficulty;
    this.health = 50 * difficulty;
  }

  attack(target) {
    super.attack(target);
    console.log(`${this.name} deals 5 damage to ${target.name}`);
    target.health -= 5;
    console.log(`${target.name} health: ${target.health}`);
  }
}

// Create the player and enemies
const player = new Player("Player 1", 5);
const enemy1 = new Enemy("Enemy 1", 2);
const enemy2 = new Enemy("Enemy 2", 3);

// Simulate interactions
player.move(2, 3);
player.attack(enemy1);
enemy1.attack(player);
enemy2.move(-1, 2);
enemy2.attack(player);

// More complex logic and functionality can be added here...
// ...
// ...

// Output:
// Player 1 moved to (2, 3)
// Player 1 is attacking Enemy 1
// Player 1 deals 10 damage to Enemy 1
// Enemy 1 health: 90
// Enemy 1 is attacking Player 1
// Enemy 1 deals 5 damage to Player 1
// Player 1 health: 95
// Enemy 2 moved to (-1, 2)
// Enemy 2 is attacking Player 1
// Enemy 2 deals 5 damage to Player 1
// Player 1 health: 90