import { Component, OnInit } from '@angular/core';
import{ContactserveService} from '../contactserve.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public service:ContactserveService) { }

  ngOnInit(): void {
  }

}
