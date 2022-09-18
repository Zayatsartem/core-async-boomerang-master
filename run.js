// Основной файл.
// Запускает игру.
const readline = require('readline');
const Game = require('./src/Game');


// Инициализация игры с настройками.
const game = new Game({
  trackLength: 70,
});

// Запуск игры.
game.init();

function runIn() {
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
}

runIn();
