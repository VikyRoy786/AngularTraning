import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Project2';
  addFname : string = "";
  addLname : string ="";
  addEmail : string ="";
  names : any[]= [{fname : "vikram", lname: "Roy", email: "abc@email.com"}] 
  remove(n1:number):void{
    this.names.splice(n1,1);
  }
  add():void{
    this.names.push({fname:this.addFname, lname:this.addLname, email:this.addEmail});
  }
  sort():void{
    this.names.reverse();
  }

  
}
