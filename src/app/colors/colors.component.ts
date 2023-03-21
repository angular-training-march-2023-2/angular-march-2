import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  allColors: string[] = ["Red", "Blue", "Green"];

  color: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addColor(){
    this.allColors.push(this.color);
    this.color="";
  }

  removeColor(receivedColor: string){
    this.allColors.splice(this.allColors.indexOf(receivedColor), 1);
  }
}
