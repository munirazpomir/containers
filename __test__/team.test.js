import Team from '../src/team.js';
import Character from '../src/character.js';

describe('Team', () => {
  test('constructor: starts with empty Set', () => {
    const team = new Team();
    expect(team.members instanceof Set).toBe(true);
    expect(team.toArray()).toEqual([]);
  });

  test('add: adds Character instance', () => {
    const team = new Team();
    const c = new Character('Hero');
    team.add(c);
    expect(team.members.has(c)).toBe(true);
    expect(team.toArray()).toEqual([c]);
  });

  test('add: throws on duplicate instance', () => {
    const team = new Team();
    const c = new Character('Mage');
    team.add(c);
    expect(() => team.add(c)).toThrow('Character already in team');
  });

  test('add: throws when adding non-Character', () => {
    const team = new Team();
    expect(() => team.add({})).toThrow('Only Character instances can be added');
  });

  test('addAll: adds multiple characters and ignores duplicates', () => {
    const team = new Team();
    const a = new Character('A');
    const b = new Character('B');
    const c = new Character('C');
    team.addAll(a, b, a, c, b);
    expect(team.toArray()).toEqual([a, b, c]);
    expect(team.toArray().length).toBe(3);
  });

  test('addAll: throws when any argument is not Character', () => {
    const team = new Team();
    const a = new Character('A');
    expect(() => team.addAll(a, {})).toThrow('Only Character instances can be added');
  });

  test('toArray returns shallow copy (mutating array does not change set)', () => {
    const team = new Team();
    const a = new Character('A');
    team.add(a);
    const arr = team.toArray();
    arr.push(new Character('X'));
    expect(team.toArray()).toEqual([a]);
  });
});