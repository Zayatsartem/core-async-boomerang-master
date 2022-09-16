// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position) {
    this.skin = '🌀';
    this.position = position;
    this.direction = 'right';
  }

  fly(length) {
      if (this.direction === 'right') {
        this.moveRight();
      } else {
        this.moveLeft();
      }
      if (this.position + 1 === length + 1) {
        this.direction = 'left';
      }
    };

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
