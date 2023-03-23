import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css']
})
export class NumberDisplayComponent implements OnInit {

  allNumber: number[] = [2, 5, 8, 1, 6];
  
  constructor() { }

  ngOnInit(): void {
  }

}
