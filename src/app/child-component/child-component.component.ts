import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  template :`
    <h2>{{"Hello  " +parentData}}</h2>   
    <button (click)="fireEvent()">Send Event</button>
  `
})
export class ChildComponentComponent implements OnInit {

  @Input() public parentData;   //or @Input('parentData') public name;   and <h2>{{"Hello  " +name}}</h2>

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Data sent to Parent Component");
  }

}
