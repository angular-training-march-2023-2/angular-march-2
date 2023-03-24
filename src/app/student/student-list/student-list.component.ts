import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  

  filterData: string = '';

  emptyData: string = 'Student Data is empty!';

  allStudents: Student[] = [];

  // allStudents: Student[] = [
  //   {
  //     id: 101,
  //     studentName: 'Ram Mohan',
  //     studentPhoto: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
  //     studentTotalMarks: 358,
  //     studentDOB: new Date(5,5,1990),
  //     studentGender: 'Male'
  //   },
  //   {
  //     id: 102,
  //     studentName: 'Nithya Mahadevan',
  //     studentPhoto: 'https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  //     studentTotalMarks: 240,
  //     studentDOB: new Date(7,7,1992),
  //     studentGender: 'Female'
  //   },
  //   {
  //     id: 103,
  //     studentName: 'Rakesh Roy',
  //     studentPhoto: 'https://plus.unsplash.com/premium_photo-1658506911229-3a57ef5fc84c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     studentTotalMarks: 427,
  //     studentDOB: new Date(2,2,1991),
  //     studentGender: 'Male'
  //   },
  //   {
  //     id: 104,
  //     studentName: 'Meena Kumari',
  //     studentPhoto: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     studentTotalMarks: 353,
  //     studentDOB: new Date(7,7,1992),
  //     studentGender: 'Female'
  //   }
  // ];

  // here we are going to create an object of StudentService.
  // studentService: StudentService; // commented because private is used

  constructor(private studentService: StudentService) {
    // here we have create the object of StudentService
    // this.studentService = new StudentService(); // line commented because studentService 
                                                    //object is passed in the constructor argument

    // this.studentService = studentService; // commented because private is used
   }

  ngOnInit(): void {
    this.allStudents = this.studentService.getAllStudents();
  }

  removeStudent(student: Student){
    this.allStudents.splice(this.allStudents.indexOf(student),1);
  }

  isStudentDataEmpty(): boolean{
    return (this.allStudents.length==0);
  }

  addTestStudent(){
    let testStudent: Student = {
      id: 0,
      studentName: 'Test',
      studentPhoto: 'https://plus.unsplash.com/premium_photo-1658506911229-3a57ef5fc84c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      studentTotalMarks: 427,
      studentDOB: new Date(2,2,1991),
      studentGender: 'Male'
    }
    this.allStudents.push(testStudent);
  }
}
