import { Component, OnInit } from '@angular/core';
import { Department } from './table-form';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {
  rowSelected: Department;
  departmentList: Department[] = [
    {departmentCode: '01',
    departmentName: 'Red',
    budget: 100,
    province: 'Bangkok',
    remark: '...',
    status: 'Active',
    telephone: '(123) 123-1231'}
  ];
  // ตัวแปร เปิด dialog
  display = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(isValid: boolean) {
    if (isValid) {
      this.display = false;
      this.rowSelected = null;
    }
  }

  openDialogModeAdd() {
    // เคลียร์หน้าฟอร์ม save-form
    this.rowSelected = null;
    // เปิด dialog
    this.display = true;
  }

}
