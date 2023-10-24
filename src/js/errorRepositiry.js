export default class ErrorRepository {
  constructor() {
    this.errorsCodes = new Map([
      [1, 'Имя персонажа задано некорректно'],
      [2, 'Такой тип персонажа не существует'],
      [3, 'Ошибка класса Character'],
      [4, 'Нельзя повысить левел умершего'],
      [5, 'Ошибка в методе Character.levelUp()'],
      [6, 'Нельзя убить умершего'],
      [7, 'Ошибка в методе Character.damage()'],
      [8, 'Такой персонаж уже есть в команде'],
    ]);
  }

  translate(code) {
    if (this.errorsCodes.has(code)) {
      return this.errorsCodes.get(code);
    }
    return 'Unknown error';
  }
}
