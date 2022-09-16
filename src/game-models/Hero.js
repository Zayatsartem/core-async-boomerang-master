// Наш герой.

const Boomerang = require('./Boomerang');

class Hero {
  constructor(position) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position || 0;
    this.boomerang = {};
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack(length) {
    this.boomerang = new Boomerang(this.position + 1);
    const interval = setInterval((() => {
      if (this.position === this.boomerang.position) {
        clearInterval(interval);
        this.boomerang = {};
      } else {
        this.boomerang.fly(length);
      }
    }), 300);
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
