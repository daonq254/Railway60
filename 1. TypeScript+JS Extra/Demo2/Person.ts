class Person {
  // Khai báo các thuộc tính
  private id: number;
  private name: string;
  private address: string;

  constructor(id: number, name: string, address: string) {
    //
    this.id = id;
    this.name = name;
    this.address = address;
  }

  //   Ctrl Ship P
  //   Khai báo hàm Getter Setter
  public setId(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public setName(value: string) {
    this.name = value;
  }

  public setAddress(value: string) {
    this.address = value;
  }

  public go(): void {
    console.log("I can go!!");
  }
}

var myName = "DAONQ";

export { Person, myName };

// var person1 = new Person();
// person1.id = 1;
// person1.name = "Daonq1";
// person1.address = "HN";

// console.log("person1: ", person1);
