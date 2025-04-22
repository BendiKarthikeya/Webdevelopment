export class Product{
    _name;
    _price;
    _qty;
    
    set name(newName){
        this._name=newName;
    }
    set price(newPrice){
        this._price=newPrice;
    }
    set qty(newQty){
        this._qty=newQty;
    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;

    }
    get qty(){
        return this._qty;
    }
}
export class Student{
    insert(){
        console.log("The student is called");
    }
}
export class Product{

}