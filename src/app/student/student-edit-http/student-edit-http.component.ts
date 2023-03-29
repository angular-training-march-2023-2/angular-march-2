import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-edit-http',
  templateUrl: './student-edit-http.component.html',
  styleUrls: ['./student-edit-http.component.css']
})
export class StudentEditHttpComponent implements OnInit {

  fetchedStudent: Student = {
    id: 0,
    studentPhoto: '',
    studentName: '',
    studentTotalMarks: 0,
    studentDOB: new Date(),
    studentGender: ''
  }

  myReactiveForm: FormGroup = new FormGroup({
    rsId: new FormControl(),
    personalData: new FormGroup({
      rsName: new FormControl(),
      rsPhoto: new FormControl()
    }),
    rsMark: new FormControl(),
    rsDob: new FormControl(),
    rsGender: new FormControl()
  });

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private studentHttpService: StudentHttpService) { }

  ngOnInit(): void {
    let studId = this.activatedRoute.snapshot.paramMap.get('sid');
    console.log(studId);

    if(studId!=null){
      this.studentHttpService.getAStudent(+studId).subscribe({
        next: (response)=>{ 
          this.fetchedStudent = response;
          // now set the value for myReactive form so the it is populted with the fetched student data
          this.myReactiveForm.setValue({
            rsId: this.fetchedStudent.id,
            personalData: {
              rsName: this.fetchedStudent.studentName,
              rsPhoto: this.fetchedStudent.studentPhoto
            },
            rsMark: this.fetchedStudent.studentTotalMarks,
            rsDob: this.fetchedStudent.studentDOB,
            rsGender: this.fetchedStudent.studentGender
          })
        },
        error: (err)=>{ console.log(err) }
      })
    }
  }

  editStudent(){
    console.log(this.myReactiveForm);
    this.fetchedStudent.studentName = this.myReactiveForm.value.personalData.rsName;
    this.fetchedStudent.studentPhoto = this.myReactiveForm.value.personalData.rsPhoto;
    this.fetchedStudent.studentTotalMarks = this.myReactiveForm.value.rsMark;
    this.fetchedStudent.studentDOB = this.myReactiveForm.value.rsDob;
    this.fetchedStudent.studentGender = this.myReactiveForm.value.rsGender;

    // nbow send the fetchedStudet object to the service to be updated in the backend appln
    this.studentHttpService.updateStudent(this.fetchedStudent).subscribe({
      next: (response)=>{
        console.log(response);
        // now we can navigate to student-list-http
        this.router.navigate(['student-list-http']);
      },
      error: (err)=>{
        console.log(err)
      }
    })

  }
}
