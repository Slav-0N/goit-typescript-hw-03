// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// export {};

class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Відчинено");
    } else {
      console.log("Зачинено");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      console.log("Ключ неправильний");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
