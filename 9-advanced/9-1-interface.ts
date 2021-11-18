type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 공통점 : object를 만들 수 있다.

const obj1: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

const obj2: PositionType = {
  x: 1,
  y: 1,
};

// 공통점 : class를 구현할 수 있다.

class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// 공통점 : 확장 가능
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// 차이점
// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

type NumberType = number;
type Direction = "left" | "right";
