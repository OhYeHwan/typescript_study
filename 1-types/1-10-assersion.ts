{
  // 타입을 강요시 type assertions 사용 => 사용하는 것은 별로 좋지않다.

  // 불가피하게 사용되는 경우
  function jsStrFunc(): any {
    return "hello";
  }

  // 타입을 확신할때 사용가능
  const result = jsStrFunc();

  // 문자열에서 사용가능한 api를 전부 사용할수있다.
  (result as string).length;

  // 하지만 실제 리턴 값의 타입이 다르다면 컴파일시에 에러를 찾을 수 없다.
  // 런타임시 버그가 발생할 수 있다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2); // 나는 이게 배열일것이라고 확신해! 100퍼센트! 무조건! => 좋지않아.

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }

  // 정말 장담할때
  const button2 = document.querySelector("class")!;
  button2.nodeValue;
}
