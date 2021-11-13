{
  // Union Types : OR
  // 발생 할 수 있는 모든 경우중 하나만 할당할 수 있을 때 사용
  // 타입스크립트에서 많이 사용된다
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // 실전 예제
  // function: login -> success or fail

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  // Quiz printLoginState(state)
  // success -> 🤣
  // fail -> 😭

  // 별로 좋지 않은 방법
  function printLoginState2(state: LoginState) {
    if ("response" in state) {
      console.log(`🤣 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
