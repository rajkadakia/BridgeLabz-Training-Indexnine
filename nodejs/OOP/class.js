class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayinfo(){
        console.log("product name:" + this.name);
        console.log("product price:" + this.price);
    }
    totalprice(tax){
        return this.price + (this.price * tax);
    }
}
const tax = 0.18;
const product1 = new product("laptop",60000);
const product2 = new product("phone",30000);
product2.displayinfo();

const totalprice = product2.totalprice(tax);
console.log("price with tax:" + totalprice);