import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-add-http',
  templateUrl: './student-add-http.component.html',
  styleUrls: ['./student-add-http.component.css']
})
export class StudentAddHttpComponent implements OnInit {

  allMark: number[] = [100, 200, 300, 400, 500];
  allGender = [
    {
      id: 1,
      gender: "Male"
    },
    {
      id: 2,
      gender: "Female"
    },
    {
      id: 3,
      gender: "Other"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(myForm: any){
    console.log(myForm);

  }
}
