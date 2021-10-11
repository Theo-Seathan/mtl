import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LearnRouteService {
  // budgetFrom = new FormControl();
  // budgetTo = new FormControl();
  // departmentName = new FormControl();

  departmentFormGroup = new FormGroup({
    budgetFrom: new FormControl(),
    budgetTo: new FormControl(),
    departmentName: new FormControl(),
    province: new FormControl()
  });
  constructor() { }
}
