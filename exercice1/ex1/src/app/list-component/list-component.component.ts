import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: '',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  public text1: string[] = ['Jean', 'Jacques', 'Martin'];
  constructor() { }

  ngOnInit(): void {
  }

}
