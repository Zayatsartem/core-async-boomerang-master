// Сделаем отдельный класс для отображения игры в консоли.
class View {
  render(track, score, scoreOfSpiders) {
    const yourTeamName = 'Elbrus';
    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log('Enemies killed: ', score);
    console.log('Spiders scores(1 for 5 points): ', scoreOfSpiders);
    console.log(`\nCreated by "${yourTeamName}" with love`);
  }

  renderRegister() {
    console.clear();
    console.log('Enter your name, hero:');
  }
}

module.exports = View;
