import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'yellow', opacity: 0}),
        animate(2000, style({backgroundColor: 'transparent', opacity: 1, transform: 'translateX(20px)'}))
      ]),
      transition('* => void', [
        style({backgroundColor: 'transparent', opacity: 1}),
        animate(2000, style({backgroundColor: 'pink', opacity: 0, transform: 'translateX(-20px)'}))
      ])
    ])
  ]
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
