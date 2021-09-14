import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <div style = "text-align:center">
  <h1>
      {{message}}
  </h1>
  </div>
  <app-child-component (childEvent)= "message=$event" [parentData]="name"></app-child-component>
  
  `
})
export class AppComponent {
  title = 'Component Interaction';
  public name = "Ankit";
  public message = "";
}
