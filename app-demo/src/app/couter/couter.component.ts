import { Component, OnInit, EventEmitter, Output,Input} from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CouterComponent implements OnInit {
  @Output()
  // add the output() symble right on top of the eventemitter
counted:EventEmitter<number>=new EventEmitter;
// type of counted is event, eventemitter need a parameter 
// in the bracket to indicate the type of the value
@Input()
name="xiaoxiao"
  counter:number =0;
  fontcolor="red"
  isError=false;
 
  constructor() { }

  ngOnInit(): void {
  }
divclick(){
 this. counter+=1;
 this.counted.emit(1);
//  because once we click the sum increase by 1
// now go to parent component to bind this in the html tag
 if(this.counter>10){
   this.isError=true;
 }

}
}
