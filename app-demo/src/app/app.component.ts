import { Component } from '@angular/core';

@Component({
  selector: 'myapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message:number=0;
  sum:number=0;
  PassMessage(value:number) {
    // because the child emit a number 1 to the parent 
    // so the parameter type is number

    this.sum+=value;

    
  }
}