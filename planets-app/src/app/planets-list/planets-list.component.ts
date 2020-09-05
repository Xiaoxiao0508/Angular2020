import { Component, OnInit } from '@angular/core';
import{PlanetserviceService}from '../planetservice.service'
@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  constructor(public planetsService:PlanetserviceService) { }

  ngOnInit(): void {
  }

}
