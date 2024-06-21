class Person{
    fname: string;
    lname :string;
    /**
     *
     */
    constructor(fname:string, lname: string) {
        
    this.fname = fname;
    this.lname = lname;
    }
    fullname():string{
        return this.fname +" "+
        this.lname
    }
    disp(): void{
        console.log("hi " + this.fullname())
    }
}

let p: Person = new Person("Vikram", "roy");
let q : Person= new Person("Soniya", "roy");
let r:Person = new Person("Laxmi", "roy");

var arr:Person[] =[p,q,r]
console.log(arr.sort((a:Person,b:Person): number=>{
    if(a.fname<b.fname)
    return -1;
    else if (a.fname>b.fname)
    return 1
    else
    return 0

}));
console.log(JSON.stringify(arr));

