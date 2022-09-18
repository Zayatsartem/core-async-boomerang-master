// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const runInteractiveConsole = require('./keyboard');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Score = require('./game-models/Score');
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(0); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(this.trackLength - 1);
    this.score = new Score();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.moveLeft()] = this.enemy.skin;
    this.track[this.score.position] = this.score.skin;

    if (this.hero.boomerang) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
      this.hero.boomerang.fly();
    }
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      this.enemy = new Enemy(Math.round(Math.random() * (70 - 45) + 45));
      this.hero.boomerang.direction = 'left';
    }
    if (this.hero.boomerang.position <= this.hero.position) {
      this.hero.boomerang.position = undefined;
    }
    if (this.hero.position === this.score.position) {
      // Добавить очки герою (написать код)
      this.score.pick();
      setTimeout(() => {
        this.score = new Score();
      }, 4000);
    }
  }

  play() {
    runInteractiveConsole(this.hero, (this.trackLength - 1));
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 40);
  }
}

module.exports = Game;
