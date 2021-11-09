// module or {} 으로 코드를 작성하지 않으면
// global scope로 설정되어 다른 파일과 이름의 충돌!

{
  // JavaScript
  /*
   var : bad
   hoisting
   변수선언, 함수선언을 코드가 실행하기전
   선언을 파일의 최상단으로 끌어올리는 것
   정확히는 함수와 변수를 코드 실행전에 실행 컨텍스트를 위해 메모리에 저장하는 것
  */

  // let
  let name = "hello";
  name = "hi";

  // const
  const age = 5;

  /*
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  // TypeScript
  //변수선언 변수명:타입 = 값;
  const num: number = 123;
  const str: string = "hello";
  const bool: boolean = true;

  //undefined : 값이 있는지 없는지 결정되지 않은 상태
  let b: undefined; // undefined만 단독으로 잘 사용하지않는다.
  let a: number | undefined; // optional type일때사용 -> 보편적으로 많이 사용된다.

  //null : 비어있다고 명확하게 알려주는 것
  let person: null; // 단독으로 사용 X
  let person2: string | null;

  // unknow : 어떤 종류의 데이터가 담길지 알수가 없다.
  // 어떤 데이터든 담을 수 있다.
  // 💩
  // 구체적을 타입을 지정하는게 좋다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any : 어떤 것이든 넣을 수 있다.
  // 💩
  let anything: any = 0;

  // void : 아무것도 리턴하지 않는다
  // 반환 티입을 지정하는게 좋지만
  // void는 생략가능
  function print(): void {}

  // never : return 하지않는 함수
  function throwError(message: string): never {
    // 에러메세지를 서버로그에 저장하고 에러를 던지고 종료 -> 반환이 없다
    throw new Error(message);
  }

  // object : 모든 object를 넣을 수 있다 -> 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
