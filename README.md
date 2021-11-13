# TypeScript Study

타입스크립트 정리

- ts-node => .ts 파일을 바로 실행
- tsc => .ts 파일을 .js 파일로 컴파일

## 1.1 타입

- number : 숫자
- string : 문자
- boolean : 참거짓
- undefined : 값이 있는지 없는지 결정되지 않은 상태
- null : 비어있다고 명확하게 알려주는 것
- unknow : 어떤 종류의 데이터가 담길지 알수가 없다.
- any : 어떤 것이든 넣을 수 있다.
- void : 아무것도 리턴하지 않는다
- never : return 하지않는 함수
- object : 모든 object를 넣을 수 있다

<br>

## 1.2 함수

- [?] optional parameter : 함수내에 인자를 전달하지 않아도 주어진 함수의 기능을
  수행하도록 함 (있어도 되고 없어도 된다)
- default parameter : 매개변수에 값을 전달하지 않을 때 undefined 대신 기본 값으
  로 초기화
- rest parmeter : ...를 이용하여 배열형태로 전달되는 모든 인자를 받아올수있다.

<br>

## 1.3 배열

- sting[]
- number[]
- 타입[] or Array<타입>
  - readonly 사용시 타입[] 형태로 사용

<br>

## 1.4 alias

- type alias - 새로운 타입을 정의 한다.

## 1.5 union

- 발생할 수 있는 모든 경우중 하나만 할당을 필요로 할 때 사용

## 1.6 discriminated union

- 이름이 동일한 타입을 설정함으로 간편하게 구분 가능

## 1.7 intersection

- 다양한 타입을 하나롱 묶어서 사용

## 1.8 Enum

- 여러가지 관련된 상수 값들을 한곳에 모아서 정의
- 웬만하면 사용 X

## 1.9 type inference

- 타입을 명시하지 않아도 타입스크립트가 알아서 타입을 추론
- 웬만하면 타입을 명시하자

## 1.10 type assertions

- 타입을 강요한다
- 웬만하면 사용 X
