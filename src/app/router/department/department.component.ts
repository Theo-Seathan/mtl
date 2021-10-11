import { Component, OnInit } from '@angular/core';
import { Department, DepartmentCondition } from 'src/app/search-form/table-form/table-form';
import { DepartmentService } from 'src/app/search-form/department.service';
import { LearnRouteService } from '../learn-route.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  loading = false;

  departmentList: Department[];
  constructor(private service: DepartmentService, private leartRouteService: LearnRouteService) { }

  ngOnInit(): void {
    this.queryDepartment();
  }

  queryDepartment() {

    this.loading = true;

    //วิธีที่ 1
    // const budgetFromFormControl = this.leartRouteService.budgetFrom.value;
    // const budgetToFormControl = this.leartRouteService.budgetTo.value;
    // const departmentNameFromControl = this.leartRouteService.departmentName.value;
    //const condition: DepartmentCondition = { budgetFrom: budgetFromFormControl, budgetTo: budgetToFormControl, departmentName: departmentNameFromControl };
    //วิธีที่ 2

    const condition = this.leartRouteService.departmentFormGroup.getRawValue();

    this.service.getDepartmentCondition(condition).subscribe(res => {
      this.loading = false;
      this.departmentList = res;
    })
  }

}
