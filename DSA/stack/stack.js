class stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isempty()){
            return"stack is empty"
        }
       return this.stack.pop();

    }
    isempty(){
        return this.stack.length===0;
    }

    peek(){
        if(this.isempty()){
            return "stack is empty"
        }
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
}