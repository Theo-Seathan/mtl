import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { SideTvComponent } from './side-tv/side-tv.component';
import { SideAvComponent } from './side-av/side-av.component';
import { DepartmentComponent } from './department/department.component';
import { TableModule } from 'primeng/table';
import { SideDepartmentComponent } from './side-department/side-department.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SearchFormModule } from '../search-form/search-form.module';

@NgModule({
  declarations: [ProductsComponent, EmployeesComponent, SideTvComponent, SideAvComponent, DepartmentComponent, SideDepartmentComponent],
  imports: [
    CommonModule,
    TableModule,
    InputNumberModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    SearchFormModule
  ],
  exports: [ProductsComponent, EmployeesComponent, SideTvComponent, SideAvComponent, DepartmentComponent, SideDepartmentComponent]
})
export class LearnRouteModule { }
