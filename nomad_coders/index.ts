let num: number[] = [1, 2];
let string: string[] = ["ema", "arst"];
let boolean: boolean[] = [true, false];

type Age = number;
type Player = {
  readonly name: string; // readonly : 읽기 전용, 읽기 전용이 된 변수는 불변성을 가짐
  age?: Age; // ? = 선택적 타입 : age는 써도 되고 안 써도 됌
};

const playerMaker = (name: string): Player => {
  return {
    name,
  };
};

const EMA = playerMaker("EMA");
EMA.age = 21;

const champion: readonly [string, number, boolean] = ["wraith", 1, true];

// any : Typescript를 빠져나올수 있는 유일한 방법, 영어 뜻 그대로 어느 타입이든 될 수 있음 *별로 사용하지 않는 것을 추천*
const a: any[] = [1, 2, 3, 4];
const b: any = true;
a + b;

// unknown : 변수의 타입을 미리 알지 못할 때 사용, 타입 확인 작업 필요
let c: unknown;
if (typeof c === "number") {
  let d = c + 1;
}
if (typeof c === "string") {
  let d = c.toUpperCase;
}

// void : 아무것도 return 하지 않는 함수를 대상으로 사용, 따로 지정할 필요 없음
function hello(): void {
  // void는 써도 되고 쓰지 않아도 됨
  console.log("x");
}

// never : 함수가 절대 return 하지 않을 때 발생
function bye(name: string | number): never {
  if (typeof name === "string") {
    name; // name의 타입은 String
  } else if (typeof name === "number") {
    name; // name의 타입은 Number
  } else {
    name; // name의 타입은 Never
  }
  throw new Error("404 Error");
}

type Add = (a: number, b: number) => number; // Call Signiture
const add: Add = (a, b) => a + b;

// OverLoading : 함수가 서로 다른 여러 개의 Call Signiture를 보유할 때 발생
// OverLoading 은 동일한 함수가 다른 인수 유형을 허용할 수 있는 경우에 사용
// 가장 많이 볼 OverLoading 예시
type Config = {
  path: string; // 위와 같은 Call Signiture
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// 두 개의 Call Signiture 의 파라미터의 갯수가 다를 때
type Minus = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; // c는 옵션처리
};

const minus: Minus = (a, b, c?: number) => {
  if (c) return a - b - c;
  return a - b;
};

minus(2, 1);
minus(3, 2, 1);

// Polymorphism = 다형성 : Call Signiture에 여러 타입을 넣을 때 사용
type SuperPrint = <T, M>(arr: T[], b: M) => T;

const superPrint: SuperPrint = (arr) => arr[0];

const first = superPrint([1, 2, 3, 4], "x");
const second = superPrint([true, false], 1);
const third = superPrint(["1", "b", "ㄷ"], true);
const fourth = superPrint([1, 2, "Hello", true, false], false);

// any 와 Generic(다형성)의 차이
// any 사용 시 toUpperCase()를 하면 오류가 날 수 있지만
// Generic 을 사용하면 Call Signiture 를 concrete type으로 추가해주기 때문에 에러를 일으켜 보호받을 수 있음

function sexyPrint<V>(a: V[]) {
  return oh[0];
}

const oh = superPrint([1, 2, 3, 4], "x");

type Mani<P> = {
  name: string;
  extraInfo: P;
};
type IreFavFood = {
  favFood: string;
};
type FavFood = Mani<IreFavFood>;

const Ire: FavFood = {
  name: "Ire",
  extraInfo: { favFood: "뻥이요" },
};

const Illzoo: Mani<null> = {
  name: "Illzoo",
  extraInfo: null,
};

// TypeScript 객체 지향 프로그래밍

// abstract class : 추상 클래스, 다른 클래스가 상속받을 수 있는 클래스
// 직접 새로운 인스턴스는 만들 수 없음, 추상 클래스에 상속받는 모든 것들은 구현되여야만 함

abstract class User {
  constructor(
    private firstName: string, // private : 인스턴스 밖에서 접근 불가, 다른 자식 클래스에서도 접근 불가
    private lastName: string,
    protected nickname: string // protected : 클래스 밖에서는 접근할 수 없지만 상속받은 클래스에서는 접근 가능
  ) {}
  abstract getNickname(): void;
  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Person extends User {
  getNickname() {
    console.log(this.nickname);
  }
}

const Ranon = new Person("Ranon", "nico", "라논"); // 인스턴스
Ranon.getFullName();

type Words = {
  [key: string]: string;
};

class Dictionary {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // class를 타입으로 사용
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  del(word: Words) {
    delete this.words[word.term];
  }
  update(term: string, def: string) {
    if (this.words[term]) {
      this.words[term] = def;
    }
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {} // readonly : 값은 보여주지만 수정은 불가
}

const kimchi = new Word("kimchi", "한국 음식");
const ramen = new Word("ramen", "열라면");

const dict = new Dictionary();
dict.add(kimchi);
dict.def("kimchi");

dict.add(ramen);
dict.def("ramen");

dict.update("kimchi", "김치");
dict.update("ramen", "라면");

type Team = "red" | "blue" | "yellow"; // 특정 값들을 지정하는 타입

// interface : type과 같이 오브젝트 모양을 특정함, 오로지 오브젝트 모양을 설명하기 위한 목적을 가짐
// Color1과 Color2의 역할을 완전히 같음

interface Color1 {
  name: string;
  team: Team;
}

type Color2 = {
  name: string;
  team: Team;
};

interface Food1 {
  name: string;
}

interface Breakfast1 extends Food1 {}

const firedEgg: Breakfast1 = {
  name: "Egg",
};

// 위의 코드와 아래의 코드는 동일함

type Food2 = {
  name: string;
};

type Breakfast2 = Food2 & {};

const rawEgg: Breakfast2 = {
  name: "Egg",
};

// 클래스의 모양을 알려준다는 점에서 유용함
// abstract class 는 자바스크립트로 컴파일 되기 때문에 파일 크기가 커짐
// 자바스크립트로 컴파일 되지 않기 때문에 파일 크기가 가벼워짐 -> 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위해 사용할 시 interface 가 더 좋음
// constructer 가 없기 때문에 private 를 사용하지 못함
interface Bokaro {
  orange: string;
  star: string;
  kase(name: string): string;
  mikan(): string;
}

interface Kase {
  mikansei: string;
}

// implements : 상속, extends 보다 가벼움
class Orangestar implements Bokaro, Kase {
  constructor(
    public orange: string,
    public star: string,
    public mikansei: string
  ) {}
  mikan() {
    return `${this.orange} ${this.star}`;
  }
  kase(name: string) {
    return `${name} ${this.mikan}`;
  }
}

function makeSong(song: Bokaro): Bokaro {
  return {
    orange: "composer",
    star: "guitar",
    kase: () => "vocal",
    mikan: () => "IA",
  };
}

// 로컬 스토리지 API
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key");
stringStorage.set("hello", "how are you");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("False");
booleanStorage.set("hello", true);
