import { Input } from '@angular/core';

export class Contact {
    name:string;
    title:string;
    imageUrl:string;
    address:string;
    constructor(Name:string,Title:string,ImageUrl:string,Address:string,){
        this.name=Name;
        this.title=Title;
 
        this.imageUrl=ImageUrl;
        this.address=Address;

    }
}
