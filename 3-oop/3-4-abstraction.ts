{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shohs: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shohs: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 생성자를 이용하여 오브젝트를 만드는 것을 금지한다.
    private constructor(coffeeBeans: number) {
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

  const maker: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);

  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
  maker.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  console.log("=======");
  const amatuer = new AmateurUser(maker);
  amatuer.makeCoffee();

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }

  console.log("=======");
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
