import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  fetchedStudent: Student = {
    id: 0,
    studentPhoto: '',
    studentName: '',
    studentTotalMarks: 0,
    studentDOB: new Date(),
    studentGender: ''
  }

  // Router is injected to navaigate from this component to student-list-http component
  // ActivatedRoute is injected to extract the route paramenter from the current route url
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private studentHttpService: StudentHttpService) { }

  ngOnInit(): void {
    let studId = this.activatedRoute.snapshot.paramMap.get('sid');
    console.log(studId);

    if(studId!=null){
      this.studentHttpService.getAStudent(+studId).subscribe({
        next: (response)=>{ this.fetchedStudent = response},
        error: (err)=>{ console.log(err) }
      })
    }
  }

  back(){
    this.router.navigate(['student-list-http']);
  }
}
