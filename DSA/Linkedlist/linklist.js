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

    removetop(){
        if(!this.head){
            return;
        }
        this.head=this.head.next;
    }

    removelast(){
        if(!this.head)
            return;
    let current = this.head;
    while(current.next.next){
        current=current.next
    }
    current.next=null;
    }
    removeatindex(index){
        if(index<0||index>this.size()){
            console.error("invalid index");
            return;
        }
        if(index===0){
            this.head=this.head.next;
        }
        let current = this.head
        for(let i = 0;i<index-1;i++){
            current = current.next;
        }
        if(current.next)
        current.next=current.next.next;

    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
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
ll.removetop();
ll.removetop();
ll.addatindex(3,500);
ll.addatindex(5,900);
ll.removelast();
ll.removetop();
ll.removeatindex(3);
ll.print();
