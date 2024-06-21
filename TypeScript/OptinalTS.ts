function sayHi(id:number,fname :string, lname?: string): void
{

    console.log("Id", id);
    console.log("Name", fname);
    if(lname != undefined)
    console.log("surname", lname);

}
sayHi(1, "vikram");
sayHi(2, "RAJ", "RAVI")

