{
  // Type alias : 새로운 타입을 정의
  type Text = string;
  const name: Text = "hello";
  type Num = number;

  // obj 형태로도 정의를 할 수 있다.
  type Student = {
    name: string;
    age: number;
  };
  const st: Student = {
    name: "hello",
    age: 12,
  };
  console.log(st);

  // String Literal Types : 타입을 문자열로 지정
  type Name = "name"; // Name 타입이 설정된 변수는 name값만 할당할 수 있다.
  let yh: Name;
  yh = "name";
}
