import { Component, OnInit, Input } from '@angular/core';
import{Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

@Input()
singlecontact:Contact;

  ngOnInit(): void {
  }

}
