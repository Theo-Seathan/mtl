import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LearnRouteService } from '../learn-route.service';

@Component({
  selector: 'app-side-department',
  templateUrl: './side-department.component.html',
  styleUrls: ['./side-department.component.css']
})
export class SideDepartmentComponent implements OnInit {

  // budgetFrom: FormControl;
  // budgetTo: FormControl;
  // departmentName: FormControl;

  departmentFormGroup: FormGroup;
  constructor(private learnRouteService: LearnRouteService) {
    //วิธีที่ 1
    // this.budgetFrom = this.learnRouteService.budgetFrom;
    // this.budgetTo = this.learnRouteService.budgetTo;
    // this.departmentName = this.learnRouteService.departmentName;

    this.departmentFormGroup = this.learnRouteService.departmentFormGroup;
  }

  ngOnInit(): void {
  }

}
