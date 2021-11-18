{
  const obj = {
    name: "ellie",
  };

  obj.name; // ellie
  obj["name"];

  // index 기반 타입 결정
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  const text: Name = "2";

  type Gender = Animal["gender"];

  type Keys = keyof Animal;
  const key: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "female",
  };
}
