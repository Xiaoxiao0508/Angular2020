import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact';
  showerror:boolean=true;
  contacts=[
    "xiaoxiao",
    "Kang Hu",
    "Magnolia",
    "Hanke"
  ]
 function(){
    this.showerror=!this.showerror;
  }
}
