/* eslint-disable no-unused-expressions */
// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const readlineSync = require('readline-sync');
const music = require('play-sound')();

const runInteractiveConsole = require('./keyboard');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Spider = require('./game-models/Spider');
// const registerUser = require('../index');
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
    this.timePlay = 0;
    this.regenerateTrack();
    this.timeDelay = 170;
    this.interval;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill('  ');
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
      this.hero.lives -= 1;
      this.enemy.position = undefined;
      this.enemy = new Enemy(this.trackLength - 1);
      this.hero.position = 0;
    }
    if (this.hero.lives === 0) {
      this.hero.die();
      clearInterval(this.interval);
    }
    if (this.hero.position < 0) {
      this.hero.position = 0;
    }
    if (this.hero.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      // if (this.timeDelay >= 30) this.timeDelay -= 10;
      // this.gameCycle();
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
      music.play('./src/sounds/congratulations.wav', (err) => {
        if (err) throw err;
      });
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
    this.gameCycle();
  }

  gameCycle() {
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.timePlay += 0.04;
      // Let's play!
      this.check();
      this.regenerateTrack();
      // eslint-disable-next-line max-len
      this.view.render(this.track, this.hero.score, this.hero.scoreOfSpiders, this.hero.lives, this.timePlay.toFixed(2));
    }, 40);
  }

  async init() {
    this.register();
    await this.play();
  }
}

module.exports = Game;
