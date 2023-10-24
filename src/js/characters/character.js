import ErrorRepository from '../errorRepositiry';

const errCode = new ErrorRepository();

export default class Character {
  constructor(name, type, attack, defence) {
    try {
      const typeArr = [
        'Bowerman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
        'testType',
      ];

      if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
        this.name = name;
      } else {
        throw new Error(errCode.translate(1));
      }
      if (typeArr.includes(type)) {
        this.type = type;
      } else {
        throw new Error(errCode.translate(2));
      }
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    } catch (err) {
      console.error(errCode.translate(3));
      throw err;
    }
  }

  levelUp() {
    try {
      if (this.health !== 0) {
        this.level += 1;
        this.attack *= 1.2;
        this.health = 100;
      } else {
        throw new Error(errCode.translate(4));
      }
    } catch (err) {
      console.error(errCode.translate(5));
      throw err;
    }
  }

  damage(points) {
    try {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      } else {
        throw new Error(errCode.translate(6));
      }
    } catch (err) {
      console.error(errCode.translate(7));
      throw err;
    }
  }
}
