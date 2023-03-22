import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemChildComponent } from './todo-item-child.component';

describe('TodoItemChildComponent', () => {
  let component: TodoItemChildComponent;
  let fixture: ComponentFixture<TodoItemChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
