import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

//  myMovie = "Harry Potter and the Half Blood Prince";
  myMovie: string = "Harry Potter and the Half Blood Prince"; // recommended with data type

  constructor() { }

  ngOnInit(): void {
  }

  changeMovie(){
    this.myMovie = "Harry Potter and the Deathly Hallows";
  }
}
