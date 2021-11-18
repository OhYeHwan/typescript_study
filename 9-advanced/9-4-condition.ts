// 조건에 따라 타입을 선택
type Check<T> = T extends string ? boolean : number;

type Type = Check<string>; // boolean
