// Наш герой.

const Boomerang = require('./Boomerang');

class Hero {
  constructor(position) {
    this.skin = '🦝'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang(this.position);
    this.name = '';
    this.score = 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    // this.boomerang.fly();
    this.boomerang = new Boomerang(this.position + 1);
  }

  die() {
    this.skin = '💀';
    console.clear()
    console.log(`YOU ARE DEAD, ${this.name}!💀`);
    console.log(`Your score is ${this.score}`);
    process.exit();
    // setInterval(() => {
    process.exit();
    // }, 100);
  }
}

module.exports = Hero;
