import Character from '../characters/character';

test('error name test', () => {
  expect(() => {
    new Character('t', 'testType').toThrowError('Имя персонажа задано некорректно');
    console.error('Ошибка класса Character');
  });
});

test('error type test', () => {
  expect(() => {
    new Character('testName', 'testTyp').toThrowError('Такой тип персонажа не существует');
    console.error('Ошибка класса Character');
  });
});

test('error levelUp health = 0 test', () => {
  expect(() => {
    const charTest = new Character('testName', 'testType');
    charTest.health = 0;
    charTest.levelUp();
    charTest.toThrowError('Нельзя повысить левел умершего');
    console.error('Ошибка в методе Character.levelUp()');
  });
});

test('error levelUp health != 0 test', () => {
  const charTest = new Character('testName', 'testType');
  charTest.health = 1;
  charTest.levelUp();
  expect(charTest).toEqual({
    name: 'testName', type: 'testType', health: 100, level: 2, attack: NaN,
  });
});

test('error damage health < 0 test', () => {
  expect(() => {
    const charTest = new Character('testName', 'testType');
    charTest.health = -1;
    charTest.damage(15);
    charTest.toThrowError('Нельзя убить умершего');
    console.error('Ошибка в методе Character.damage()');
  });
});
