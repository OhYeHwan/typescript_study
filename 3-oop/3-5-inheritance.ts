{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shohs: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 생성자를 이용하여 오브젝트를 만드는 것을 금지한다.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static method를 이용하여 오브젝트를 생성하도록 권장
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up...🔥");
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling`);
      return {
        shots,
        hasMilk: false,
      };
    }

    clean(): void {
      console.log("cleaning the machine...");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Streaming some milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CaffeLatteMachine(32, "1233");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
