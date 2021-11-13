{
  // Type Inference

  // 타입을 string으로 명시하지 않아도 에러발생 X
  let text = "hello";
  text = "1"; // 숫자를 넣을 시 에러발생
  // 타입스크립트가 자동으로 타입을 명시

  // 따로 타입을 명시하지않으면 any로 설정된다
  // any는 좋지 않다.
  function print(message) {
    console.log(message);
  }

  // 타입을 명시하지않아도 타입스크립트가 알아서 추론한다.

  function add(x: number, y: number) {
    // return 값 추론
    return x + y;
  }

  const result = add(1, 2); // result값 추론

  // 웬만하면은 타입을 정확하게 명시하는게 좋다
  // but 원시타입인경우 생략
  // 함수에서는 정확하게 타입을 명시해라
  // 타입추론에 관련된것은 팀이나 프로젝트할때 스타일 가이드를 확정하는것이 좋다. => 가독성 일관성
}
