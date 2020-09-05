import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetserviceService } from '../planetservice.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css'],
})
export class PlanetsCreateComponent implements OnInit {
  constructor(public planetsService: PlanetserviceService) {}
  // remerber put public in front of the service instance

  ngOnInit(): void {}

  CreatePlanet(Distance: number) {
    if (Distance <= 0) {
      alert('Distance need to be greater than 0');
      return;
    }
    this.planetsService.Add(
      new Planet("newplanet",0,Distance,"heets://placeholde.it/200*200")
    )
  }
}
