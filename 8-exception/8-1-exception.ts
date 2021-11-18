// Java: Exception
// JavaScript: Error

// 예상치 못한 에러
// const array = new Array(10000000000);

// Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "Not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

const fileName = "Not exist!";

function run() {
  try {
    // 정말 에러가 발생하는 부분만 try로 감쌀것
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // 에러가 발생해도, return이되어도 실행보장
    closeFile(fileName);
    console.log("finally!");
  }
}

run();
