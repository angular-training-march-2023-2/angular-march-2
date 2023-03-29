import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Student } from '../student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  baseUrl: string = 'http://localhost:3000/students';

  constructor(private httpClient: HttpClient) { }

  getAllStudent(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseUrl).pipe(catchError((error: HttpErrorResponse)=> throwError(()=>error.message)));
  }

  //http://localhost:3000/students/102
  getAStudent(studId: number): Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl + '/' + studId);
  }

  addStudent(){}

  updateStudent(){}
  
  //http://localhost:3000/students/102
  deleteStudent(studId: number): Observable<void>{
    //return this.httpClient.delete<void>(this.baseUrl + '/' + studId);
    return this.httpClient.delete<void>(`${this.baseUrl}/${studId}`); // here we are using template string, 
                                                                        //avaible from ES6 version of JS

  }
}
