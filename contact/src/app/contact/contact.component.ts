import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  imageUrl="https://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
