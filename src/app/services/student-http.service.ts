import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Student } from '../student/student.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  baseUrl: string = 'http://localhost:3000/students';

  newHeader: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer '+this.authService.fetchUserInfo().token)

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllStudent(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseUrl,{ headers: this.newHeader}).pipe(catchError((error: HttpErrorResponse)=> throwError(()=>error.message)));
  }

  //http://localhost:3000/students/102
  getAStudent(studId: number): Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl + '/' + studId, { headers: this.newHeader});
  }

  addStudent(newStudent: Student): Observable<Student>{
    return this.httpClient.post<Student>(this.baseUrl, newStudent, { headers: this.newHeader});
  }

  updateStudent(updateStudent: Student): Observable<Student>{
    return this.httpClient.put<Student>(this.baseUrl+'/'+updateStudent.id, updateStudent, { headers: this.newHeader});
  }
  
  //http://localhost:3000/students/102
  deleteStudent(studId: number): Observable<void>{
    //return this.httpClient.delete<void>(this.baseUrl + '/' + studId);
    return this.httpClient.delete<void>(`${this.baseUrl}/${studId}`, { headers: this.newHeader}); // here we are using template string, 
                                                                        //avaible from ES6 version of JS

  }
}
