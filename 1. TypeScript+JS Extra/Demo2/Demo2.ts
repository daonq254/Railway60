import { Person, myName } from "./Person";

var person1 = new Person(1, "daonq1", "HN");
// person1.id = 1;
// person1.name = "Daonq1";
// person1.address = "HN";

person1.setId(1);

person1.go();

console.log("person1, ID: ", person1.getId());
