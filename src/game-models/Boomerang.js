// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
    this.direction = 'right';
  }

  fly(length) {
    setInterval((() => {
      if (this.direction === 'right') {
        this.moveRight();
      } else {
        this.moveLeft();
      }
      if (this.position + 1 === length + 1) {
        this.direction = 'left';
      }
  }), 500);
  }

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
