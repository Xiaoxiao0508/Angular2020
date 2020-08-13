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
  showerror:boolean=true;
  contacts:Contact[]=[
    new Contact("Bob","Mr","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street"),
    new Contact("James","Mr","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street"),
    new Contact("Olivia","Miss","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street"),
    new Contact("Jo","Mrs","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street")
   
   ];
//  function(){
//     this.showerror=!this.showerror;
//   }
}
