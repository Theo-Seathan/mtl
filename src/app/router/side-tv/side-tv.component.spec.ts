import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTvComponent } from './side-tv.component';

describe('SideTvComponent', () => {
  let component: SideTvComponent;
  let fixture: ComponentFixture<SideTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
