class Score {
  constructor() {
    // this.generateScore();
    this.position = this.randomPos();
  }

  generateCoin() {
    this.coinPic = '🕷';
  }

  randomPos() {
    return Math.round(Math.random() * (70 - 40) + 40);
  }

  pick() {
    this.position = ' ';
  }
}

module.exports = Score