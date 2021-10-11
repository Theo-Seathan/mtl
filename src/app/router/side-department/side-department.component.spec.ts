import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDepartmentComponent } from './side-department.component';

describe('SideDepartmentComponent', () => {
  let component: SideDepartmentComponent;
  let fixture: ComponentFixture<SideDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
