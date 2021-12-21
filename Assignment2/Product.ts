class Product{
    pid:number;
    pname:string;
    amount:number
    discount:number
    qty:number;
    discountamount:number;

    constructor(pid:number,pname:string,amount:number,discount:number,qty:number)
    {
        this.pid=pid;
        this.pname=pname;
        this.amount=amount;
        this.discount=discount;
        this.qty=qty;
    }
    calculateDiscount():void
    {
        this.discountamount=this.amount*(this.discount/100)
    }
    displayData():void{
        console.log("PID:"+this.pid+" Pname:"+this.pname+" Amount:"+this.amount+" Discount:"+this.discount+" Quantity:"+this.qty+" DiscountAmount:"+this.discountamount);
    }
}

var pr=new Product(101,'Battery',25000,15,20);
pr.calculateDiscount();
pr.displayData();
