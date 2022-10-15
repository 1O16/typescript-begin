// 타입스크립트 기본 타입 정리 (primitive types)

let 이름: string = "김준석";
let 나이: number = 16;
let 출생지역: string = "서울";

let 회원들: string[] = ["kim", "park"];
let 회원정보: { name: string; song: string } = {
  name: "EMA",
  song: "메트로놈",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// 타입을 미리 정하기 애매할 때 (union type, any, unknown)

let 회원: number | string = "kim";
회원 = 123;

let 문자열: (string | number | boolean)[] = [1, "2", true];
let 오브젝트: { a: string | number } = {
  a: "123",
};

// any 사용 금물, 구지 쓸거면 unknown 사용
let 언노운: unknown;
언노운 = 123;
언노운 = [];

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string[] | string;
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "Silva",
};
학교.score[4] = false;
학교.friend = ["lee", 학교.teacher];

// 함수에 타입 지정하는 법 & void 타입

// 파라미터 지정 시 사용 하지 않으면 에러가 남
function 함수(x: number): number {
  return x * 2;
}
함수(50);

// void : return 하지 않고 싶을 시 사용
// ? : | undefined 와 같은 뜻. 파라미터 뒤에 ? 사용 시 옵션으로 변경
function 보이드(x?: number): void {
  x + 1;
}
보이드();

function 이름입력(x?: string): void {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("이름이 없습니다");
  }
}
이름입력("홍길동");

function 숫자세기(x: string | number): number {
  if (typeof x === "number") {
    return x.toString().length;
  } else if (typeof x === "string") {
    return x.length;
  }
}
숫자세기("555");

function 결혼가능하냐(월소득: number, 집: boolean, 매력: string): string {
  let score: number = 0;
  score += 월소득;
  if (집 === true) {
    score + 500;
  }
  if (매력 === "상") {
    score + 100;
  }
  if (score >= 600) {
    return "결혼 쌉가능";
  }
}
결혼가능하냐(700, false, "중");
결혼가능하냐(100, false, "상");

// 타입 확정하기 Narrowing & Assertion

function 내함수(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
  // assertion 문법 - 타입 덮어쓰기, if 대용(에러 못잡으니까 쓰지 마셈)
  // 용도 1. union 문법에서 타입 한개를 확정할 때 사용
  // 용도 2. 어떤 타입이 들어올지 확실히 할 때만 사용, 타입 에러를 잡아주지 못해서
}
내함수(123);

function 클리닝함수(x: (number | string)[]) {
  let 클리닝: number[] = [];

  x.forEach((element) => {
    if (typeof element === "string") {
      클리닝.push(parseFloat(element));
    } else {
      클리닝.push(element);
    }
  });
  return 클리닝;
}
console.log(클리닝함수(["1", 2, "3"]));

function 맨뒤리턴(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    let last = x.subject[x.subject.length - 1];
    return last;
  } else {
    return "X";
  }
}
console.log(맨뒤리턴({ subject: "math" }));
console.log(맨뒤리턴({ subject: ["science", "english"] }));
console.log(맨뒤리턴({ subject: ["science", "art", "korean"] }));

// 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly

// type 변수(alias)
type Animal = string | number | undefined;
type AnimalObject = { name: string; age: number };
let 동물: Animal = "Kim";
let 동물옵젝: AnimalObject = { name: "kim", age: 16 };

// readonly : 읽기 전용. 수정 불가.
type Girlfriend = {
  readonly name: string;
};
const 여친: Girlfriend = {
  name: "EMA",
};

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewPostition = PositionX & PositionY;
let postition: NewPostition = { x: 10, y: 20 };

type SquareObject = {
  color: string;
  size: number;
  readonly position: number[];
};
let 사각형: SquareObject = {
  color: "red",
  size: 123,
  position: [10, 30],
};

type PersonalInfo = {
  name: string;
  phone: number;
  email: string;
  adult: boolean;
};
let 개인정보 = {
  name: "kim",
  phone: 8409,
  email: "youiiyou",
  adult: false,
};

// Literal Types로 만드는 const 변수 유사품

let 성: "kim";
성 = "kim";

let 접니다: "대머리" | "솔로";
접니다 = "솔로";

function 함수야(a: "안뇽"): 1 | 0 {
  return 0;
}
함수야("안뇽");

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["보"];
}
가위바위보("바위");

// const 변수의 한계 : 변하면 안되는 값을 저장할 때 사용하지만
// 오브젝트 안의 내용물은 맘대로 바꿀 수 있음
// Literal type = 자료를 여러개 저장할 수 있는 const 변수

var 자료 = {
  name: "kim",
} as const;
// as const = object value의 값을 그대로 타입으로 지정해줌
//          = object 속성들에 모두 readonly를 붙여줌

function 함수수(a: "kim") {}
// 자료.name의 타입은 string이기 때문에 타입 'kim'인 파라미터 a 자리에 올 수 없음
내함수(자료.name);

// 함수와 methods에 type alias 지정하는 법

// 함수 타입 alias 지정 시 arrow function을 사용해야 함
type 함수타입 = (a: string) => number;

let 함수1: 함수타입 = (a) => {
  return 11;
};

// 콜백함수 : 함수 안에 함수가 들어가는 것, 함수2 실행 후 함수3 실행
function 함수2(a) {
  a();
}
function 함수3() {}
함수2(함수3);

type 회원정보타입 = {
  name: string;
  plusOne: (a: number) => number;
  changeName: (a: string) => void;
};

let 회원정보1: 회원정보타입 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: (a) => {},
};

type 컷제로 = (a: string) => string;
type 하이폰삭제 = (a: string) => number;

// /^0+/ , /-/g : replace 정규식
// https://url.kr/wo495n , +는 연속된 것 전부 다
const cutZero: 컷제로 = (a) => {
  let result = a.replace(/^0+/, "");
  return result;
};
console.log(cutZero("00000001"));

const removeDash: 하이폰삭제 = (a) => {
  let result = a.replace(/-/g, "");
  return parseFloat(result);
};

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;
// type 콜백타입 = (str: string, func1: 함수타입1, func2: 함수타입2) => void;

const 콜백함수 = (str: string, func1: 함수타입1, func2: 함수타입2) => {
  let 결과값 = func1(str);
  let 결과값2 = func2(결과값);
  console.log(결과값2);
};

콜백함수("010-1111-2222", cutZero, removeDash);

// class 만들 때 타입지정 가능

class Person11 {
  name: string;
  age: number;
  data: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  함수더하기(x: number) {
    console.log(x + 1);
  }
}

let 사람1 = new Person11("KIM", 16);
let 사람2 = new Person11("PARK", 18);

사람1.함수더하기(5);

class Car1 {
  model: string;
  price: number;
  constructor(name: string, price: number) {
    this.model = name;
    this.price = price;
  }

  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car1("소나타", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  num;
  str;

  constructor(...param: (string | number)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}

let word = new Word("kim", 3, 5, "park");
console.log(word.num);
console.log(word.str);

// Object에 타입지정하려면 interface 이것도 있음

// object 타입 지정시 interface 사용 가능
interface Square {
  color: string;
  width: number;
}

let 네모: Square = {
  color: "red",
  width: 100,
};

// interface SchoolPeople {
//   name: string;
//   age?: number;
// }

//interface 장점 : extends로 복사 가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// extends와 유사한 기능, 중복 속성 발생 시 에러가 나지 않음(사용 시 에러)
type 동물 = { name: string };
type 냥이 = { name: boolean; age: number } & 동물; // 양쪽 다 만족해야함

// type과 interface의 차이점
// interface는 중복 선언 가능, type은 중복 선언 불가능
// 중복 선언 시 자동으로 합쳐짐(자동 extends), 중복 속성 발생 시 에러
interface Happy {
  emotion: string;
}
interface Happy {
  angry: boolean;
}
// 다른 사람이 많이 이용할 것 같으면 interface 사용

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Shopping {
  product: string;
  price: number;
}

interface Cart extends Shopping {
  card?: boolean;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
  { product: "청소기", price: 7000, card: false },
];

interface PlusMinus {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 함수오브젝트: PlusMinus = {
  plus: function plus(a, b) {
    return a + b;
  },
  minus: function mimnus(a, b) {
    return a - b;
  },
};

// 함수 rest 파라미터, destructuring 할 때 타입지정

function 함수에요(...a: number[]) {
  console.log(a);
}
함수에요(1, 3, 4, 5, 6, 6, 7);

// ...문법의 용도 - 괄호를 벗기고 합칠 때
let 어레이에요1 = [1, 2, 3, 4];
let 어레이에요2 = [1, 2, 3, 4, 6];
let 어레이에요3 = [...어레이에요1, ...어레이에요2];
console.log(어레이에요3); // [1, 2, 3, 4, 1, 2, 3, 4, 6]

// destructing 문법
let [변수에요, 변수2에요] = ["중요", 100];
console.log(변수에요); // 중요
console.log(변수2에요); // 100

let { student1, age33 } = { student1: true, age33: 33 };
console.log(student1); // true
console.log(age33); // 33

interface SchoolAgain {
  student33: boolean;
  age43: number;
}

function 함3수({ student33, age43 }: SchoolAgain) {
  console.log(student33, age43);
}
함3수({ student33: false, age43: 43 });

// 최대값리턴
function 최대값리턴함수(...num: number[]) {
  return console.log(Math.max(...num));
}
최대값리턴함수(3, 4, 5, 6, 1, 3, 9);

interface Func4tion {
  user: string;
  comment: number[];
  admin: boolean;
}

function 함4수({ user, comment, admin }: Func4tion) {
  return console.log(user, comment, admin);
}
함4수({ user: "kim", comment: [3, 5, 4], admin: false });

type 어3레이 = (number | string | boolean)[];

function 함5수([num, str, bool]: 어3레이) {
  console.log(num, str, bool);
}
함5수([40, "wine", false]);

// Narrowing 할 수 있는 방법 더 알아보기

// 속성명 in 오브젝트 자료
type Fish = { swim: string };
type Bird = { fly: string };
function 물새(animal: Fish | Bird) {
  if ("swim" in animal) {
    // Fish 타입인지 검사 가능
    return animal.swim;
  }
  return animal.fly;
}

// undefined
function 언디파인드(a: string | undefined) {
  if (a && typeof a === "string") {
    // a가 undefined 이면 조건식이 undefined가 되어 if문이 실행되지 않음, string이면 실행
    return a;
  }
}

// 오브젝트 instanceof 부모class
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// 오브젝트 타입마다 literal type(ex: wheel) 만들어두면 편함
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike1 = {
  wheel: "2개";
  color: string;
};
function 차전거(x: Car2 | Bike1) {
  if (x.wheel === "4개") {
    console.log("차");
  } else {
    console.log("자전거");
  }
}

// 함수에 사용하는 never 타입도 있긴 합니다

// never 타입의 조건 - return 값이 없어야 함, endpoint가 없어야 함( 함수 실행이 끝나지 않아야함 )
// 사실 코드짤때 never 타입 쓸데없음 -> void 쓰면 됌
function 함수실행안끝내기(): never {
  // 방법 1
  throw new Error();

  // 방법 2
  while (true) {}
}

// never 타입이 등장하는 경우
function 네버등장(param: string) {
  // 경우 1 - 뭔가 이상한 Narrowing
  if (typeof param === "string") {
    console.log("난 문자열이다~");
  } else {
    // never 두둥등장 - else문은 필요가 없을 뿐만 아니라 Narrowing 할 필요도 없음
    console.log(param);
  }
}
// 경우 2 - 어떤 함수 표현식은 return 타입이 자동으로 never
let 네버등장2 = function () {
  throw new Error();
};

// public, private 쓰는거 보니까 타입스크립트 귀여운편
