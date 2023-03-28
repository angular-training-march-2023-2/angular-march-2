import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
  filterData: string = '';

  emptyData: string = 'Student Data is empty!';

  errorData: string = '';
  allStudents: Student[] = [];
  
  constructor(private studentHttpService: StudentHttpService, private router: Router) {
  }

  loadData(){
    this.studentHttpService.getAllStudent().subscribe({
      next: (response)=> this.allStudents = response,
      error: (err)=> this.errorData='Internal Error!! please try after sometime!!'
    })
  }

  ngOnInit(): void {
    this.loadData();  
  }

  viewStudent(stud: Student){
    // here we should navigate to student-view
    // to navigate we need an in-built API called Router
    // so let us inject Router in the constructor

    this.router.navigate(['student-view', stud.id]); 

    // here stud.id is passed as a route parameter
  }

  removeStudent(student: Student){
    this.studentHttpService.deleteStudent(student.id).subscribe({
      next: (response)=>this.loadData()
    })
  }

  isStudentDataEmpty(): boolean{
    return (this.allStudents.length==0);
  }

  addTestStudent(){
    // let testStudent: Student = {
    //   id: 0,
    //   studentName: 'Test',
    //   studentPhoto: 'https://plus.unsplash.com/premium_photo-1658506911229-3a57ef5fc84c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   studentTotalMarks: 427,
    //   studentDOB: new Date(2,2,1991),
    //   studentGender: 'Male'
    // }
    // this.allStudents.push(testStudent);
  }
}
