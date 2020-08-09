const normalPerson={
            firstName:"sakil",
            lastName:"uddin",
            salary:15800,
            getFullName:function(){
                console.log(this.firstName, this.lastName);
            },

            chargeBil:function(amount,tips,tax){
                console.log(this);
                this.salary=this.salary-amount-tips-tax;
                return this.salary;
            }
}
// console.log(normalPerson.lastName);

    // normalPerson.chargeBil(800);
    // console.log(normalPerson.salary);

    const heroPerson={
        firstName:"Hero",
        lastName:"Lalon",
        salary:26000
    }
    const friendlyPerson={
        firstName:'Hero',
        lastName:'Golam',
        salary:25000
    }
    // normalPerson.chargeBil();

//  const heroChargeBill=normalPerson.chargeBil.bind(heroPerson);
//  heroChargeBill(2000);
//  heroChargeBill(3000);
//  console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill=normalPerson.chargeBil.bind(friendlyPerson);
// friendlyChargeBill(1500);

// difference between bind, call and apply

//  normalPerson.chargeBil.call(heroPerson,900,100,50);
//  normalPerson.chargeBil.call(heroPerson,100,2000,60);
//  console.log(heroPerson.salary);


//  normalPerson.chargeBil.call(friendlyPerson,10000,100,80);
//  console.log(friendlyPerson.salary);
//  console.log(normalPerson.salary);

normalPerson.chargeBil.apply(heroPerson,[3000,300,30]);
normalPerson.chargeBil.apply(heroPerson,[4000,500,80]);
console.log(heroPerson.salary);


 