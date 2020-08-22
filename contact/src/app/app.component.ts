import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact';
 
//  function(){
//     this.showerror=!this.showerror;
//   }
}
