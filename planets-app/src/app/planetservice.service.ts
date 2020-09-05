import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetserviceService {
  PlanetList: Planet[] = [
    new Planet('Mercury', 0, 0.4,"https://scx1.b-cdn.net/csz/news/800/2015/whatsimporta.jpg"),
    new Planet('Venus', 0, 0.7,"https://astronomy.com/~/media/B7DF836CEEAB4B8A8CDE77314092E412.jpg"),
    new Planet('Earth', 1, 1,"https://i2.wp.com/kashmirobserver.net/wp-content/uploads/2020/07/earth.jpg?fit=800%2C772&ssl=1"),
    new Planet('Marcs', 2, 1.5,"https://cdn.mos.cms.futurecdn.net/nXhWJyFcp9i7vKcaoB5h9f-320-80.jpg"),
    new Planet('Jupiter', 79, 5.2,"https://cdn.mos.cms.futurecdn.net/iEv6pmS4gfbefs5JbwHWiJ.png"),
    new Planet('Saturn', 62, 9.5,"https://www.nasa.gov/sites/default/files/thumbnails/image/edu_ring_a-round_the_saturn.jpg"),
    new Planet('Uranus', 27, 19.8,"https://cdn.mos.cms.futurecdn.net/NVAnBwuGufg8cf2RXkZigd-1200-80.jpg"),
    new Planet('Neptune', 14, 30.1,"https://cdn.mos.cms.futurecdn.net/eNTJrysq4A6DqXncBtsRrB.jpg"), 
  ];

  constructor() {}

  public Add(Newplanet: Planet) {
    this.PlanetList.push(Newplanet);
    this.PlanetList.sort(function (a, b) {
      return a.distancefromSun - b.distancefromSun;
    });

    // for (var i in this.PlanetList) document.writeln(this.PlanetList[i].name);
  }
}
