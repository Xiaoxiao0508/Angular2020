import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';
import{PlanetserviceService}from '../planetservice.service'

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
@Input()
planet:Planet;
IsDeleted:boolean=true;
editting:boolean=false;
  constructor(public planetsService: PlanetserviceService) { }

  ngOnInit(): void {
  }
  DeletePlanet(){
    this.IsDeleted=false;
    this.planetsService.PlanetList.splice(this.planetsService.PlanetList.indexOf(this.planet),1);
    //  for (var i in this.planetsService.PlanetList) document.writeln(this.planetsService.PlanetList[i].name);
  }
  starteditting(){
    this.editting=true;
  }
  endeditting(distance:number){
this.editting=false;
this.planet.distancefromSun=distance;
this.planetsService.PlanetList.sort(function (a, b) {
  return a.distancefromSun - b.distancefromSun;
})
  }
}
