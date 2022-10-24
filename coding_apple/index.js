// 타입스크립트 기본 타입 정리 (primitive types)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 이름 = "김준석";
var 나이 = 16;
var 출생지역 = "서울";
var 회원들 = ["kim", "park"];
var 회원정보 = {
    name: "EMA",
    song: "메트로놈",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// 타입을 미리 정하기 애매할 때 (union type, any, unknown)
var 회원 = "kim";
회원 = 123;
var 문자열 = [1, "2", true];
var 오브젝트 = {
    a: "123",
};
// any 사용 금물, 구지 쓸거면 unknown 사용
var 언노운;
언노운 = 123;
언노운 = [];
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "Silva",
};
학교.score[4] = false;
학교.friend = ["lee", 학교.teacher];
// 함수에 타입 지정하는 법 & void 타입
// 파라미터 지정 시 사용 하지 않으면 에러가 남
function 함수(x) {
    return x * 2;
}
함수(50);
// void : return 하지 않고 싶을 시 사용
// ? : | undefined 와 같은 뜻. 파라미터 뒤에 ? 사용 시 옵션으로 변경
function 보이드(x) {
    x + 1;
}
보이드();
function 이름입력(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다");
    }
}
이름입력("홍길동");
function 숫자세기(x) {
    if (typeof x === "number") {
        return x.toString().length;
    }
    else if (typeof x === "string") {
        return x.length;
    }
}
숫자세기("555");
function 결혼가능하냐(월소득, 집, 매력) {
    var score = 0;
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
function 내함수(x) {
    var arr = [];
    arr[0] = x;
    // assertion 문법 - 타입 덮어쓰기, if 대용(에러 못잡으니까 쓰지 마셈)
    // 용도 1. union 문법에서 타입 한개를 확정할 때 사용
    // 용도 2. 어떤 타입이 들어올지 확실히 할 때만 사용, 타입 에러를 잡아주지 못해서
}
내함수(123);
function 클리닝함수(x) {
    var 클리닝 = [];
    x.forEach(function (element) {
        if (typeof element === "string") {
            클리닝.push(parseFloat(element));
        }
        else {
            클리닝.push(element);
        }
    });
    return 클리닝;
}
console.log(클리닝함수(["1", 2, "3"]));
function 맨뒤리턴(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        var last = x.subject[x.subject.length - 1];
        return last;
    }
    else {
        return "X";
    }
}
console.log(맨뒤리턴({ subject: "math" }));
console.log(맨뒤리턴({ subject: ["science", "english"] }));
console.log(맨뒤리턴({ subject: ["science", "art", "korean"] }));
var 동물 = "Kim";
var 동물옵젝 = { name: "kim", age: 16 };
var 여친 = {
    name: "EMA",
};
var postition = { x: 10, y: 20 };
var 사각형 = {
    color: "red",
    size: 123,
    position: [10, 30],
};
var 개인정보 = {
    name: "kim",
    phone: 8409,
    email: "youiiyou",
    adult: false,
};
// Literal Types로 만드는 const 변수 유사품
var 성;
성 = "kim";
var 접니다;
접니다 = "솔로";
function 함수야(a) {
    return 0;
}
함수야("안뇽");
function 가위바위보(a) {
    return ["보"];
}
가위바위보("바위");
// const 변수의 한계 : 변하면 안되는 값을 저장할 때 사용하지만
// 오브젝트 안의 내용물은 맘대로 바꿀 수 있음
// Literal type = 자료를 여러개 저장할 수 있는 const 변수
var 자료 = {
    name: "kim",
};
// as const = object value의 값을 그대로 타입으로 지정해줌
//          = object 속성들에 모두 readonly를 붙여줌
function 함수수(a) { }
// 자료.name의 타입은 string이기 때문에 타입 'kim'인 파라미터 a 자리에 올 수 없음
내함수(자료.name);
var 함수1 = function (a) {
    return 11;
};
// 콜백함수 : 함수 안에 함수가 들어가는 것, 함수2 실행 후 함수3 실행
function 함수2(a) {
    a();
}
function 함수3() { }
함수2(함수3);
var 회원정보1 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (a) { },
};
// /^0+/ , /-/g : replace 정규식
// https://url.kr/wo495n , +는 연속된 것 전부 다
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
console.log(cutZero("00000001"));
var removeDash = function (a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
};
// type 콜백타입 = (str: string, func1: 함수타입1, func2: 함수타입2) => void;
var 콜백함수 = function (str, func1, func2) {
    var 결과값 = func1(str);
    var 결과값2 = func2(결과값);
    console.log(결과값2);
};
콜백함수("010-1111-2222", cutZero, removeDash);
// class 만들 때 타입지정 가능
var Person11 = /** @class */ (function () {
    function Person11(name, age) {
        this.data = 0;
        this.name = name;
        this.age = age;
    }
    Person11.prototype.함수더하기 = function (x) {
        console.log(x + 1);
    };
    return Person11;
}());
var 사람1 = new Person11("KIM", 16);
var 사람2 = new Person11("PARK", 18);
사람1.함수더하기(5);
var Car1 = /** @class */ (function () {
    function Car1(name, price) {
        this.model = name;
        this.price = price;
    }
    Car1.prototype.tax = function () {
        return this.price / 10;
    };
    return Car1;
}());
var car1 = new Car1("소나타", 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var word = new Word("kim", 3, 5, "park");
console.log(word.num);
console.log(word.str);
var 네모 = {
    color: "red",
    width: 100,
};
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
    { product: "청소기", price: 7000, card: false },
];
var 함수오브젝트 = {
    plus: function plus(a, b) {
        return a + b;
    },
    minus: function mimnus(a, b) {
        return a - b;
    },
};
// 함수 rest 파라미터, destructuring 할 때 타입지정
function 함수에요() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수에요(1, 3, 4, 5, 6, 6, 7);
// ...문법의 용도 - 괄호를 벗기고 합칠 때
var 어레이에요1 = [1, 2, 3, 4];
var 어레이에요2 = [1, 2, 3, 4, 6];
var 어레이에요3 = __spreadArray(__spreadArray([], 어레이에요1, true), 어레이에요2, true);
console.log(어레이에요3); // [1, 2, 3, 4, 1, 2, 3, 4, 6]
// destructing 문법
var _a = ["중요", 100], 변수에요 = _a[0], 변수2에요 = _a[1];
console.log(변수에요); // 중요
console.log(변수2에요); // 100
var _b = { student1: true, age33: 33 }, student1 = _b.student1, age33 = _b.age33;
console.log(student1); // true
console.log(age33); // 33
function 함3수(_a) {
    var student33 = _a.student33, age43 = _a.age43;
    console.log(student33, age43);
}
함3수({ student33: false, age43: 43 });
// 최대값리턴
function 최대값리턴함수() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return console.log(Math.max.apply(Math, num));
}
최대값리턴함수(3, 4, 5, 6, 1, 3, 9);
function 함4수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    return console.log(user, comment, admin);
}
함4수({ user: "kim", comment: [3, 5, 4], admin: false });
function 함5수(_a) {
    var num = _a[0], str = _a[1], bool = _a[2];
    console.log(num, str, bool);
}
함5수([40, "wine", false]);
function 물새(animal) {
    if ("swim" in animal) {
        // Fish 타입인지 검사 가능
        return animal.swim;
    }
    return animal.fly;
}
// undefined
function 언디파인드(a) {
    if (a && typeof a === "string") {
        // a가 undefined 이면 조건식이 undefined가 되어 if문이 실행되지 않음, string이면 실행
        return a;
    }
}
// 오브젝트 instanceof 부모class
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 차전거(x) {
    if (x.wheel === "4개") {
        console.log("차");
    }
    else {
        console.log("자전거");
    }
}
// 함수에 사용하는 never 타입도 있긴 합니다
// never 타입의 조건 - return 값이 없어야 함, endpoint가 없어야 함( 함수 실행이 끝나지 않아야함 )
// 사실 코드짤때 never 타입 쓸데없음 -> void 쓰면 됌
function 함수실행안끝내기() {
    // 방법 1
    throw new Error();
    // 방법 2
    while (true) { }
}
// never 타입이 등장하는 경우
function 네버등장(param) {
    // 경우 1 - 뭔가 이상한 Narrowing
    if (typeof param === "string") {
        console.log("난 문자열이다~");
    }
    else {
        // never 두둥등장 - else문은 필요가 없을 뿐만 아니라 Narrowing 할 필요도 없음
        console.log(param);
    }
}
// 경우 2 - 어떤 함수 표현식은 return 타입이 자동으로 never
var 네버등장2 = function () {
    throw new Error();
};
// public, private 쓰는거 보니까 타입스크립트 귀여운편
var User1 = /** @class */ (function () {
    function User1(a) {
        // private는 class 내부에서만 수정, 이용가능
        this.familyName = "시";
        this.name = this.familyName + a;
    }
    User1.prototype.이름변경함수 = function () {
        this.familyName = "이";
    };
    return User1;
}());
var 유저1 = new User1("바라");
유저1.name = "안뇽";
// private class 밖에서 바꾸는 법
유저1.이름변경함수();
var 사람인 = /** @class */ (function () {
    // this 생략 가능
    function 사람인(name) {
        this.name = name;
    }
    return 사람인;
}());
var 자식 = new 사람인("kkk");
