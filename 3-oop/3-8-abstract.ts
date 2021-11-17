{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shohs: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 생성자를 이용하여 오브젝트를 만드는 것을 금지한다.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const latteMachine = new CaffeLatteMachine(32, "1233");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);

  const sweetMachine = new SweetCoffeeMaker(10);
  sweetMachine.makeCoffee(1);

  const machines = [new CaffeLatteMachine(16, "223"), new SweetCoffeeMaker(16)];

  machines.forEach((machine) => {
    console.log("========");
    machine.makeCoffee(1);
  });
}
