class node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}
class doublelinklist{
    constructor(){
        this.head=null;
    }
    addfirst(data){
        const n = new node(data);
        n.next=this.head;
        if(this.head){
            this.head.prev = n;
        }
        this.head=n;
    }
    addlast(data){
        const n = new node(data);
        if(!this.head){
            this.head = n;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        n.prev=current;
        current.next=n;
    }
    size(){
        let counter = 0;
        let current = this.head;
        while(current){
            counter++;
            current=current.next;
        }
        return counter;
    }
    addat(index,data){
        if(index<0||index>this.size()){
            console.error("invalid index");
            return;
        }
        const n = new node(data);
        if(index===0){
            n.next = this.head;
            if(this.head){
                this.head.prev=n;
                
            }
            this.head=n
            return;
        }
        let current = this.head;
        for(let i =0;i<index-1;i++){
            current=current.next;
        }
        
        n.next=current.next;
        n.prev = current;

        if(current.next){
            current.next.prev = n;
        }
        current.next=n;
    }

    removetop(){
        if(!this.head)
            return;

       this.head = this.head.next;
       
       if(this.head){
        this.head.prev = null;
       }
    }
    removelast(){
         if(!this.head)
            return;
         if(!this.head.next){
            this.head=null;
            return;
         }
         let current = this.head;
         while(current.next.next){
            current = current.next;
         }
         current.next = null;
    }

    removeat(index){
        if(index<0||index>this.size()){
            console.error("invalid index");
            return;
        }
        if(index===0){
            this.head=this.head.next
          if(this.head){
            this.head.prev=null;
          }
          return;
        }
        let current = this.head;
        for(let i =0;i<index-1;i++){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;

            if(current.next){
                current.next.prev = current;
            }
        }

    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    reverseprint(){
        if(!this.head){
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next; 
        }

        while(current){
            console.log(current.data);
            current=current.prev;
        }
    }
}