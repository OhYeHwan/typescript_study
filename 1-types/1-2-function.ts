{
  //   // JS
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TS
  //   // 숫자가 인자로 들어오고 숫자가 리턴된다는 것을 명확히 알 수 있다.
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // ***************** //
  //   // JS
  //   function jsFetchNum(id) {
  //     // code ...

  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TS
  //   function fetchNum(id: string): Promise<number> {
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // JS => TS

  // Optional parameter => 인자를 전달해도 되고 전달 안해도될 때 사용
  // 인자에 ? 를 붙인다. => 전달해도되고 안해도된다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("YeHwan");

  // Default parameter
  // 아무것도 전달하지 않으면 기본 값을 전달할 수 있다.
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter : 배열형태로 전달되는 모든 인자를 받아올수있다.
  function addNumbers(...args: number[]): number {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(addNumbers(1, 2, 3, 4, 5));
}
