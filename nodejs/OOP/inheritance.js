class Animal{
    speak(){
        console.log("some generic sound ghur ghur");
    }
}
class dog extends Animal{
    speak(){
        console.log("woof woof");
    }
}
class cat extends Animal{
    speak(){
        console.log("meow meow");
        }
}
const dog1 = new dog();
const cat1 = new cat();
dog1.speak();
cat1.speak();
const anm1=new Animal();
anm1.speak();