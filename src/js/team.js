import ErrorRepository from './errorRepositiry';

import { bowerman } from './characters/bowerman';
import { swordsman } from './characters/swordsman';
import { magician } from './characters/magician';
import { daemon } from './characters/daemon';
import { zombie } from './characters/zombie';
import { undead } from './characters/undead';

const errCode = new ErrorRepository();

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(errCode.translate(8));
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((ch) => {
      this.members.add(ch);
    });
  }

  toArray() {
    const array = [];
    this.members.forEach((e) => {
      array.push(e);
    });
    console.log(array);
  }
}

// поверка add
const team1 = new Team();

team1.add(bowerman);
team1.add(zombie);
team1.add(daemon);
team1.addAll(bowerman, zombie, zombie, undead, swordsman, magician, magician);
// team1.add(zombie) // персонаж уже есть
console.log(team1);

// поверка addAll

const team2 = new Team();

team2.addAll(bowerman, zombie, zombie, undead, swordsman);
console.log(team2);

// проверка toArray

team1.toArray();
