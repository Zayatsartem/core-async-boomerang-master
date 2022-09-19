class Spider {
  constructor() {
    // this.generateScore();
    this.skin = '🕷';
    this.position = this.randomPos();
  }

  // eslint-disable-next-line class-methods-use-this
  randomPos() {
    // Идём влево.
    return Math.round(Math.random() * (40 - 10) + 10);
  }

  pick() {
    this.position = ' ';
  }
}
module.exports = Spider;
