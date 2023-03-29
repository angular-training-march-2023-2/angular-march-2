import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

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

  constructor(private studentHttpService: StudentHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  addStudent(myForm: any){
    console.log(myForm);
    console.log(myForm.value);

    // let us construct newStudent Object using the data in myForm.value
    let newStudent: Student = {
      id: 0,
      // studentPhoto: myForm.value.sPhoto,
      // studentName: myForm.value.sName,
      studentPhoto: myForm.value.personalData.sPhoto,
      studentName: myForm.value.personalData.sName,
      studentTotalMarks: myForm.value.sMark,
      studentDOB: myForm.value.sDOB,
      studentGender: myForm.value.sGender
    }

    // now send this newStudent Object to the service layer to be inserted into db.json file
    this.studentHttpService.addStudent(newStudent).subscribe({
      next: (response)=>{
        console.log(response);
        // once the newStudent is added in db.json, we no longer have to stay here
        // lets navigate back to student-list-http
        this.router.navigate(['student-list-http']);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
