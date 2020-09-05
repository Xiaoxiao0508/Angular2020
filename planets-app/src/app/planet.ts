export class Planet {
    name: string;
    moons: number;
    distancefromSun: number;
    imageUrl:string

    constructor (Name:string,Moons:number,DistanceFromSun:number,Imageurl:string){
        this.name=Name;
        this.moons=Moons;
        this.distancefromSun=DistanceFromSun;
        this.imageUrl=Imageurl
    }
}


