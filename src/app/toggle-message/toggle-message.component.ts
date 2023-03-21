import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-message',
  templateUrl: './toggle-message.component.html',
  styleUrls: ['./toggle-message.component.css']
})
export class ToggleMessageComponent implements OnInit {

  greetings: string = "";
  toggleData: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleData = !this.toggleData;
    if(this.toggleData==true){
      // true part
      this.greetings = "Good Evening All!";
    }else{
      //false part
      this.greetings = "";
    }

  }
}
