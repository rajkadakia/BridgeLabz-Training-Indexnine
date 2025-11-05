class student{
    #marks = []

    addmarks(marks){
        if(typeof marks !== "number" || marks < 0 || marks > 100){
            console.log("invalid input");
        return;
    }
    this.#marks.push(marks);
        console.log("marks added"+marks);
    }
    marksavg(){
        if(this.#marks.length===0) return 0;
       const sum = this.#marks.reduce((a,b)=>a+b,0);
        return sum/this.#marks.length;
    }
    showgrade(){
        const avg = this.marksavg();
        if(avg>=90)return "grade A+"
        if(avg>=80)return "grade B+"
        if(avg>=70)return "grade C+"
        if(avg>=60)return "grade D+"
        return "F"
    }
    
}    
    
const student1 = new student();
student1.addmarks(88);
student1.addmarks(96);
student1.addmarks(76);
student1.addmarks(86);
student1.addmarks(99);
student1.addmarks(105);

console.log("studen1 avg:"+student1.marksavg());
console.log("studen1 grade:"+student1.showgrade());