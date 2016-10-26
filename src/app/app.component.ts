import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed Value'">Click to Change Content</button>
    <button (click)="boundValue = boundValue + 1000">Click to Change Binding</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delete = false;
  test = "Starting Value";
  boundValue = 1000;
}
