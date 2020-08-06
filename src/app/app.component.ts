import { Component } from '@angular/core';

@Component({
  selector: 'myapp',
  template: `<h1>where are you work hard please
  </h1>
  <button (click)="onclick()">mybutton</button>
  <h2>count up {{counter}}</h2>
  <div>{{title}}</div>
  {{title.toUpperCase()}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter=0;
  onclick(){
    this.counter++;
if(this.counter%5==0){
  this.title="mmm"
}
else if(this.counter%3==0){
  this.title="ddd"
}
else{
  this.title="boring"
}
  }
}
