// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const runInteractiveConsole = require('./keyboard')
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(0); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(this.trackLength - 1);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }


  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang.position === this.enemy.position) {
      this.enemy.die();
      this.hero.boomerang.direction = 'left';
    }
  }

  play() {
    runInteractiveConsole(this.hero, (this.trackLength - 1))
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.enemy.moveLeft();
      this.view.render(this.track);
    }, 200);
  }
}

module.exports = Game;
