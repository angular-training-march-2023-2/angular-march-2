import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditHttpComponent } from './student-edit-http.component';

describe('StudentEditHttpComponent', () => {
  let component: StudentEditHttpComponent;
  let fixture: ComponentFixture<StudentEditHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEditHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
