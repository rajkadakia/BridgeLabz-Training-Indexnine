class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class linkedlist{
    constructor(){
        this.head = null
    }

    addfirst(data){
        const n = new node(data);
        n.next = this.head;
        this.head = n;
    }

    addlast(data){
        const n = new node(data);

        if(!this.head){
            this.head=n;
            return;
        }

        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next = n;
    }

    size(){
        let counter = 0;
        let current = this.head;
        while(current){
            counter++;
            current = current.next;
        }
        return counter;
    }

    addatindex(index,data){
        if(index<0||index>this.size()){
            console.error("invalid index");
            return;
        }
        const n = new node(data);
        if(index===0){
            n.next = this.head;
            this.head = n;
            return;
        }
        let current = this.head;
        for(let i =0;i<index-1;i++){
            current=current.next;
        }
        n.next=current.next;
        current.next=n;
    }
}
const ll = new linkedlist;
ll.addfirst(200);
ll.addfirst(300);
ll.addfirst(400);
ll.addlast(100);
ll.addlast(0);
ll.addatindex(3,400);
ll.addatindex(5,700);
ll.addatindex(3,600);
ll.addatindex(0,300);

console.log(ll.size());
