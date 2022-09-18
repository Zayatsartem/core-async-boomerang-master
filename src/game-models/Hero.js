// Наш герой.

const Boomerang = require('./Boomerang');

class Hero {
  constructor(position) {
    this.skin = '🦝'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang(this.position);
    this.name = '';
    this.score = 0;
    this.scoreOfSpiders = 0;
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
    // eslint-disable-next-line no-console
    console.clear();
    // eslint-disable-next-line no-console
    console.log(`YOU ARE DEAD, ${this.name}!💀`);
    // eslint-disable-next-line no-console
    console.log(`\nYour scores:\nEnemies killed: ${this.score}\nSpiders scores: ${this.scoreOfSpiders}\n\nTOTAL SCORE: ${this.score + this.scoreOfSpiders}`);
    process.exit();
    // setInterval(() => {
    process.exit();
    // }, 100);
  }
}

module.exports = Hero;
