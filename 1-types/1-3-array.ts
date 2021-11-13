{
  const fruits: string[] = ["1", "2"];

  const scores: number[] = [1, 2];
  const score: Array<number> = [1, 2, 3];

  // readonly 사용시 타입[] 형태로 사용해야한다.
  function printArray(fruits: readonly string[]) {}

  // Tuple : 서로다른타입의 데이터를 넣을 수 있다.
  let student: [string, number];
  student = ["yehwan", 123];
  student[0]; // name
  student[1]; // 123
  // 가독성 💩
  // tuple 사용은 권장하지 않는다. => interface, type alias, class 사용
  const [name, age] = student; // object destructuring
}
