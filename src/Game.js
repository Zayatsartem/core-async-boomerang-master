// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const readlineSync = require('readline-sync');
const music = require('play-sound')(args = {});

const runInteractiveConsole = require('./keyboard');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Spider = require('./game-models/Spider');
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(0); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(this.trackLength - 1);
    this.spider = new Spider();
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
    this.track[this.spider.position] = this.spider.skin;

    if (this.hero.boomerang) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
      this.hero.boomerang.fly();
    }
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      music.play('./src/sounds/twirl.wav', (err) => {
        if (err) throw err;
      });
      this.hero.die();
    }
    if (this.hero.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      music.play('./src/sounds/just-like-magic.wav', (err) => {
        if (err) throw err;
      });
      this.enemy = new Enemy(Math.round(Math.random() * (70 - 45) + 45));
      this.hero.score += 1;
      this.hero.boomerang.direction = 'left';
    }
    if (this.hero.boomerang.position <= this.hero.position) {
      this.hero.boomerang.position = undefined;
    }
    if (this.hero.position === this.spider.position) {
      this.hero.scoreOfSpiders += 5;
      // Добавить очки герою за пауков
      this.spider.pick();
      setTimeout(() => {
        this.spider = new Spider();
      }, 4000);
    }
  }

  async register() {
    this.view.renderRegister();
    const name = await readlineSync.question('> ');
    this.hero.name = name;
  }

  play() {
    runInteractiveConsole(this.hero, (this.trackLength - 1));
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.hero.score, this.hero.scoreOfSpiders);
    }, 40);
  }

  async init() {
    this.register();
    await this.play();
  }
}

module.exports = Game;
