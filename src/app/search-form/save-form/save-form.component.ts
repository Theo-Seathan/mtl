import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../table-form/table-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {
  formGroup = new FormGroup({
    departmentName: new FormControl(null, Validators.required),
    province: new FormControl(null, Validators.required),
    budget: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    remark: new FormControl(null, Validators.required),
    telephone : new FormControl(null, Validators.required),
  });


  @Input() set department(value: Department) {
    // const example = {
    //   departmentName: 'สภากาชาด',
    //   province: 'Bangkok',
    //   budget: 100,
    //   status: 'Active',
    //   remark: '...',
    //   telephone : '053222',
    // };

    // object มาจาก rowSelected หรือการเลือกค่าจากตาราง
    // {
    //   "departmentCode": "01",
    //   "departmentName": "Red",
    //   "budget": 100,
    //   "province": "Bangkok",
    //   "remark": "...",
    //   "status": "Active",
    //   "telephone": "1152"
    // }
    // this.formGroup.setValue(value);
    // error เพราะมี departmentCode เกิน

    // ถ้า property ใน object เกิน ก็ให้ทำเท่าที่ตรงกัน (เพราะมี departmentCode เกิน)
    if (value) {
      this.formGroup.patchValue(value);
    } else {
      this.formGroup.reset({status: 'Active'});
    }
  }

  get department() {
    return this.formGroup.value;
  }

  // @Input() department: Department =
  // {
  //   departmentName: '',
  //   departmentCode: '',
  //   budget: 0,
  //   province: '',
  //   remark: '',
  //   status: '',
  //   telephone: ''
  // };
  provinceOptions = [
    {label: 'None', value: null},
    {label: 'Bangkok', value: 'Bangkok'},
    {label: 'Ratchaburi', value: 'Ratchaburi'},
];
  constructor() { }

  ngOnInit(): void {
    // let depart =  this.department;
  }

}
