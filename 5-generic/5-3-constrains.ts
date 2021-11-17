{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }

    workFullTime() {}
  }

  class PartTimeEmpolyee implements Employee {
    pay() {
      console.log(`part time!!`);
    }

    workPartTime() {}
  }

  //   function payBad(employee: Employee): Employee {
  //     employee.pay();
  //     return employee;
  //   }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmpolyee();
  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = pay(ellie);
  ellieAfterPay.workFullTime();
}
