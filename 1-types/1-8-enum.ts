{
  // Enum : 여러가지 관련된 상수 값들을 한곳에 모아서 정의할 수있게 도와주는 타입

  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  // 다음과 같이 묶기가 힘들다.
  const MONDAY = 0;
  const TUESDAY = 1;

  // JS에는 Enum이 없기 때문에 freeze를 이용하여 비슷하게 구성함
  // 여러가지의 상수값을 한곳에 모아두고 타입이 보장되고 타입이 변하지않으므로 안전
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfTody = DAYS_ENUM.MONDAY;

  // TS에서는 Enum을 사용한다.
  enum Days {
    Monday = 1, // 값을 지정하지 않으면 자동으로 0 으로 설정, 문자열로 지정하면 전부다 지정해줘야한다.
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);

  // but ! TS에서는 Enum을 가능한 쓰지않는 것을 추천
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 이런 경우 문제가된다. Days에는 10이 될 수가 없는데 컴파일 에러 경고가 없고 컴파일이 된다.
  // 타입이 정확하게 보장되지 않는다.

  // 상수들을 묶는 경우가 없나? => Union 타입을 활용하면된다.
  // Union String literal로 대체가능!!!! => 타입 보장
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfweek: DaysOfWeek = "Tuesday";
  dayOfweek = "Monday";

  // enum 사용하는경우 => 다른 클라이언트로 데이터를 보낼때
  // 웹 클라이언트에서만 사용한다면 사용 XXXX
}
