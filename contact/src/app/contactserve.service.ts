import { Injectable } from '@angular/core';
import {Contact} from './contact/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactserveService {
  contacts:Contact[]=[
    new Contact("Bob","Mr","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street"),
    new Contact("James","Mr","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street"),
    new Contact("Olivia","Miss","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street"),
    new Contact("Jo","Mrs","https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg","23 King street")
   
   ];
   showerror:boolean=true;
  constructor() { }
}
