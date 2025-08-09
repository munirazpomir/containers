import Character from "./character";

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!(character instanceof Character)) {
            throw new Error('Only Character instances can be added');
        }
        if (this.members.has(character)) {
            throw new Error('Character already in team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for(const ch of characters) {
            if (!(ch instanceof Character)) {
                throw new Error('Only Character instances can be added');
            }
            this.members.add(ch);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}