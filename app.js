// let person = {
//     name: 'Micheal',
//     age: 121,
//     occupation:'soft guy',
//     eat () {
//         console.log('Micheal is eating');
//             console.log(`$this.name`is Eating) ; 
//     },
//     walk () {
//         console.log('Micheal is walking');
//     }
// }

// // delete person.walk;

// let person2 = {
//     name: 'Funke',
//     age: 21,
//     occupation:'Fashion Designer',
//     eat () {
//         console.log('Funke is eating');
             
//     },
//     walk () {
//         console.log('Funke is walking');
//     }
// }


// console.log(person);
// person. name = 'chuk'
// parson.walk = 'Precious'

class Person {
    constructor() {

    }
}
// class BankAccount {
//     acctName = 'Eze Micheal';
//     acctNumber = '2087558658';
//     balance = 0;
// }

class BankAccount {
    // acctName = 'hgsdgtg jhihsadkxl';
    // acctNumber = '7973525332';
    // balance = 9;
    constructor(name, num, balance) {
        this.acctName = name;
        this.acctNumber = num;
        this.acctbalance = balance;
    }
}

class Car {
    constructor(name, tyreNum, plateNum) {
        this.carName = name;
        this.cartyreNum = tyreNum;
        this.carplateNum = plateNum
    }
}






 let person = new Person()
 console.log(person);

 let account1 = new BankAccount('yyhgfg', '2354678', 23456)
 console.log(account1);

 let account2 = new BankAccount('Alabi Pasuma', '09876543',45678)
 console.log(account2);
 let car1 = new Car('Venza', 89, 90)
 console.log(car1);