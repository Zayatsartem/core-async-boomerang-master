// Сделаем отдельный класс для отображения игры в консоли.
class View {
  // eslint-disable-next-line class-methods-use-this
  render(track, score, scoreOfSpiders, lives, timePlay) {
    const yourTeamName = 'The best team ever';
    // Тут всё рисуем.
    // eslint-disable-next-line no-console
    console.clear();
    // eslint-disable-next-line no-console
    console.log(track.join(''));
    // eslint-disable-next-line no-console
    console.log('\n\n');
    // eslint-disable-next-line no-console
    console.log('Your lives:', lives);
    // eslint-disable-next-line no-console
    console.log('Enemies killed:', score);
    // eslint-disable-next-line no-console
    console.log('Spiders scores(1 for 5 points):', scoreOfSpiders);
    // eslint-disable-next-line no-console
    console.log('Game time', timePlay);
    // eslint-disable-next-line no-console
    console.log(`\nCreated by "${yourTeamName}" with love`);
  }

  // eslint-disable-next-line class-methods-use-this
  renderRegister() {
    // eslint-disable-next-line no-console
    console.clear();
    // eslint-disable-next-line no-console
    console.log('Enter your name, hero:');
  }
}

module.exports = View;
