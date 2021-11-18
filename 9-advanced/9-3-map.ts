{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in과 비슷한 문법 [P in keyof T]
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "e",
  };

  type Animal = {
    name: string;
    age: number;
  };
  type AnimalOptional = Optional<Animal>;
  const animal: Optional<Animal> = {
    name: "dog",
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const video: ReadOnly<Video> = {
    title: "name",
    author: "hello",
    description: "de",
  };

  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     description?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //     readonly description: string;
  //   };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj3: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };

  const obj4: Nullable<VideoOptional> = {
    title: null,
  };
}
