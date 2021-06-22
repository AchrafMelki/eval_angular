import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<input type="text" [(ngModel)]="text"/>' +
  '<span> {{ text }} </span>' +
  '<button (click)="raz()">Reset</button>' +
  '<app-list-component></app-list-component>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex1';
  text: '';
 // @Input() count = 0;
  // tslint:disable-next-line:typedef
  raz(){
    this.text = '';
  }
}
