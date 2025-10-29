/*
const user ={
  name:"Raj",
  age: 21,
  height : "5'9",
  greet:function(){
    console.log("hello",this.name)
  }
};
user.greet();
user.name="arihant";
user.greet();
user.country="India";
console.log(user.country);*/

/*
const user={
  name:null,
  greet(){
    console.log("hello",this.name)
  }
};
const raj = Object.create(user);
raj.name="raj";
raj.greet();
const arihant = Object.create(user);
arihant.name="arihant";
arihant.greet();*/

/*
class user{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
 sayhi(){
  console.log("hello",this.name);
 }
 
}
const u1= new user("raj",20);
u1.sayhi();*/

/*
class bankacc{
  constructor(user){
    this.user=user;
    this.balance=0;
  }
   deposit(amount){
      this.balance=this.balance+amount;
      console.log("amount deposited",amount);   
  }
    withdraw(amount){
      if(amount>this.balance){
        console.log("not enough funds");
        return;
          }
          this.balance=this.balance-amount;
          console.log("amount withdrawn",amount);
    }
    getbalance(){
      return this.balance;
    }

}
const raj=new bankacc("raj");
raj.deposit(500);
console.log(raj.getbalance());
raj.deposit(700);
raj.withdraw(200);
console.log(raj.getbalance());
raj.deposit(1000);
raj.withdraw(400);
console.log(raj.getbalance());*/