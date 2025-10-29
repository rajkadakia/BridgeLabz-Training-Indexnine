/*
default parameter 

function sun(a,b=10){
    return a+b;
}
console.log(sun(5));*/

/*
rest parameter

function input(x,...y){
    console.log(x);
    console.log(y);
}
input(1,2,3,4,5,6,7,8,9);*/

/*
arrow func 

const add = (a,b)=>a+b;
console.log(add(5,6));*/

/*nested function 

function outter(){
    inner();
    console.log("outter");
    function inner(){
        console.log("inner")
    }
    
}
console.log(outter());*/
/*
closure

function outter(x){
    function inner(y){
        return x+y;
    }
    return inner;
}
const ans = outter(10); 
console.log(ans(2));*/

/*function multiplyBy(n) {
  function mul(y){
    return n*y;
  }
  return mul;

}
const multi = multiplyBy(3);
console.log(multi(5));*/

/*
closures

function bankAccount() {
  let balance = 0;
  function deposit(amount){
    balance = balance + amount;
    console.log("deposited",amount);
  }
  function withdraw(amount){
    if (amount>balance){
        console.log("not enough funds")
    }
    balance = balance-amount;
    console.log("withdrawn",amount);
  }
  function getbal(){
    return balance;
  }
return {deposit,withdraw,getbal};
}

const myAccount = bankAccount();
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getbal()); // 300
console.log(myAccount.balance); // undefined*/

