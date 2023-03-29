import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddHttpComponent } from './student-add-http.component';

describe('StudentAddHttpComponent', () => {
  let component: StudentAddHttpComponent;
  let fixture: ComponentFixture<StudentAddHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAddHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
