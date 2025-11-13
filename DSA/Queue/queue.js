class queue{
    constructor(){
        this.itmes = [];
    }
    enqueue(element){
        this.itmes.push(element);
    }
    dequeue(){
        if(this.isempty()){
            return "underflow"
        }
       return this.itmes.shift();
    }

    isempty(){
        return this.itmes.length === 0;
    }

    front(){
        if(this.isempty()){
            return "empty queue"
        }
        return this.itmes[0];
    }
    size(){
        return this.itmes.length;
    }
    printqueue(){
        let string = ""
        for(let i =0;i<this.itmes.length;i++){
            string += this.itmes[i]+","
        }
        console.log(string);

    }
}