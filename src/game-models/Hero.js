// Наш герой.

const Boomerang = require('./Boomerang');

class Hero {
  constructor(position) {
    this.skin = '💃'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang(this.position);
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
    console.log('YOU ARE DEAD!💀');
    process.exit();
    // setInterval(() => {
    process.exit();
    // }, 1000);
  }
}

module.exports = Hero;
