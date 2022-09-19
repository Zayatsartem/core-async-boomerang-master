// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    return this.position;
  }

  die() {
    this.position = '?';
  }

  // randomPos() {
  //   return this.position.Math.round(Math.random() * (70 - 40) + 40);
  // }
}

module.exports = Enemy;
