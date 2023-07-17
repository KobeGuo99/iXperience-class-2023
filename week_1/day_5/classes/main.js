//Classes

class Person {
  constructor(firstName, lastName, age, address, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    return `Good morning ${this.firstName} ${this.lastName}`;
  }

  addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
}

const Kobe = new Person("Kobe", "Guo", 20, "116 Daffodil Dr", "646-275-6596");

console.log(Kobe.getFullName());
console.log(Kobe.sayHello());
console.log(Kobe.addTwoNumbers(2, 3));

// Customer class
// Inheritance

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    address,
    phoneNumber,
    dob,
    membershipType
  ) {
    super(firstName, lastName, age, address, phoneNumber);
    this.dob = dob;
    this.membershipType = membershipType;
  }

  // static
  static getMembershipCost() {
    let cost = 500;
    return `Membership costs: $${cost}`;
  }

  getMembershipType() {
    return `${this.membershipType} membership`;
  }
}

const kobe = new Customer(
    "Kobe",
    "Guo",
    20,
    "116 Daffodil Dr",
    "6462756596",
    "07/24/2002",
    "Owner"
)

const jamie = new Customer(
  "Jamie",
  "Finnigan",
  30,
  "124 Giant Ave",
  "9176018836",
  "11/02/1992",
  "Premium"
);
console.log(jamie);
console.log(jamie.getMembershipType());
console.log(jamie.getFullName());
console.log(jamie.sayHello());

console.log(Customer.getMembershipCost());

const gertrude = new Customer(
  "Gertrude",
  "Von Blauschwits",
  60,
  "1408 N Jackson St",
  "9179696711",
  "08/24/1966",
  "Medallion"
);

const grant = new Customer(
  "Grant",
  "Jenkins",
  32,
  "WTF St",
  "8889990000",
  "09/28/1000",
  "Basic"
);

let customers = [];

customers.push(kobe)
customers.push(jamie);
customers.push(gertrude);
customers.push(grant);
console.log(customers);


class UI {
    constructor(){
       this.tableBody = document.getElementById("table-body");
    }

    renderCustomers(){
        this.tableBody.innerHTML = [];

        for(let i = 0; i < customers.length; ++i){
            const tr = document.createElement("tr");

            let firstName = document.createElement("td");
            let lastName = document.createElement("td");
            let age = document.createElement("td");
            let address = document.createElement("td");
            let phoneNumber = document.createElement("td");
            let dob = document.createElement("td");
            let membershipType = document.createElement("td");

            firstName.innerHTML = customers[i].firstName;
            lastName.innerHTML = customers[i].lastName;
            age.innerHTML = customers[i].age;
            address.innerHTML = customers[i].address;
            phoneNumber.innerHTML = customers[i].phoneNumber;
            dob.innerHTML = customers[i].dob;
            membershipType.innerHTML = customers[i].membershipType;

            tr.appendChild(firstName);
            tr.appendChild(lastName);
            tr.appendChild(age);
            tr.appendChild(address);
            tr.appendChild(phoneNumber);
            tr.appendChild(dob);
            tr.appendChild(membershipType);

            this.tableBody.appendChild(tr);
        }
    }
}

const ui = new UI();
console.log(ui.tableBody);
ui.renderCustomers();