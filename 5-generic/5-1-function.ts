{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullAndBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result1 = checkNotNullAndBad(123); // any => 타입보장X

  const result = checkNotNullBad(123);
  console.log(result);
  checkNotNullBad(null);

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
