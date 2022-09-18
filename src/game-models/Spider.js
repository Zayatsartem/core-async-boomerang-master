class Spider {
  constructor() {
    // this.generateScore();
    this.skin = '🕷';
    this.position = this.randomPos();
  }

  randomPos() {
    // Идём влево.
    return Math.round(Math.random() * (40 - 20) + 20);
  }

  pick() {
    this.position = ' ';
  }
}
module.exports = Spider;
