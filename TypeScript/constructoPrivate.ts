class Person{
   
    constructor(private fname:string, private lname: string) {
        
    
    }
    fullname():string{
        return this.fname +" "+
        this.lname
    }
    disp(): void{
        console.log("hi " + this.fullname())
    }
    getFname():string{
        return this.fname
        
    }
    getLname():string{
        
        return this.lname
    }
}


let p: Person = new Person("Vikram", "roy");
let q : Person= new Person("Soniya", "roy");
let r:Person = new Person("Laxmi", "roy");

var arr:Person[] =[p,q,r]
console.log(arr.sort((a:Person,b:Person): number=>{
    if(a.getFname<b.getLname)
    return -1;
    else if (a.getFname>b.getFname)
    return 1
    else
    return 0

}));
console.log(JSON.stringify(arr));

