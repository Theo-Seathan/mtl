import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // formControl แบบ เดี่ยวๆ
  // department = new FormControl();
  // province = new FormControl();
  // budgetFrom = new FormControl();
  // budgetTo = new FormControl();
  // status = new FormControl();

  // formControl แบบอยู่ภายใต้ formGroup
  formGroup = new FormGroup({
    department: new FormControl(),
    province : new FormControl(),
    budgetFrom : new FormControl(),
    budgetTo : new FormControl(),
    status : new FormControl('Active')
  });
  // ค่าแสดงใน dropdown
  provinceOptions = [
    {label: 'None', value: null},
    {label: 'Bangkok', value: 'Bangkok'},
    {label: 'Ratchaburi', value: 'Ratchaburi'},
];
  constructor() { }

  ngOnInit(): void {
  }

  resetForm() {
    // this.department.setValue(null);
    // this.province.setValue(null);
    // this.budgetFrom.setValue(null);
    // this.budgetTo.setValue(null);
    // this.status.setValue(null);

    // clear วิธีแบบยาว แบบที่ 1
    // const valueObject = {
    //   department: null,
    //   province: null,
    //   budgetFrom: null,
    //   budgetTo: null,
    //   status: null,
    // };

    // this.formGroup.setValue(valueObject);

    // clear แบบสั้น แบบที่ 2 (ผลลัพธ์เหมือนแบบที่ 1)
    // ไม่ต้องใส่ parameter จะเป็น null เหมือนแบบที่ 1
    this.formGroup.reset({status: 'Active'});
  }

  setData() {
    // this.department.setValue('สภากาชาด');
    // this.province.setValue('Bangkok');
    // this.budgetFrom.setValue(0);
    // this.budgetTo.setValue(100);
    // this.status.setValue('Active');

    const valueObject = {
      department: 'สภากาชาด',
      province: 'Bangkok',
      budgetFrom: 0,
      budgetTo: 100,
      status: 'Active',
    };

    this.formGroup.setValue(valueObject);
  }

}
