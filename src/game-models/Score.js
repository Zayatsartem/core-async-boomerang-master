class Score {
  constructor() {
    // this.generateScore();
    this.position = this.randomPos();
  }

  generateCoin() {
    this.coinPic = '🕷';
  }

  randomPos() {
    return Math.floor(Math.random() * (70 - 20 + 1)) + 10;
  }

  pick() {
    this.position = ' ';
  }
}

module.exports = Score;