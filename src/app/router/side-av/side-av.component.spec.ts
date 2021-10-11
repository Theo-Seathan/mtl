import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAvComponent } from './side-av.component';

describe('SideAvComponent', () => {
  let component: SideAvComponent;
  let fixture: ComponentFixture<SideAvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
