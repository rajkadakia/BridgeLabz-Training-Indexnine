class Employee{
    constructor(name){
        this.name=name;
    }
    work(){
        console.log(`employee ${this.name} is working`);
    }
}
class Manager extends Employee{
    work(){
        console.log(`manger ${this.name} is working and managing`);
    }
}
class Developer extends Employee {
    work() {
        console.log(`${this.name} is writing code`);
    }
}
const employess =[
    new Manager("Raj"),
    new Employee("Ravdeep"),
    new Developer("Garv")
];
for(const emp of employess){
    emp.work();
}