{
  // discriminated union차별화하는, 구별할수있는
  // 이름이 동일한 타입을 둠으로써 간편하게 구분할수 있게 해준다.
  // 조금더 직관적으로 코드를 작성할 수 있다.

  type SuccessState = {
    result: "success"; // discriminated
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail"; // discriminated
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🤣 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
