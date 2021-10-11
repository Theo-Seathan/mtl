import { Component } from '@angular/core';
import { ProductAdjuster } from './adjuster/adjuster-shared';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Department, Characters } from './search-form/table-form/table-form';
import { DepartmentService } from './search-form/department.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  departmentList: Department[];

  fromReleaseDateControl = new FormControl();
  ToReleaseDateControl = new FormControl();
  http: any;

  constructor(private service: DepartmentService, private messageService: MessageService, private router: Router,) {
    //   this.departmentList = this.service.departmentList;
  }

  sample2Control = new FormControl(null, Validators.required);
  sampleControl = new FormControl('Hello FormControl');

  validatorNoSpace: ValidatorFn = (control: AbstractControl) => {


    const value: string = control.value;
    if (value && value.indexOf(' ') !== -1) {
      return { space: true };
    }
    return null;
  }

  //validatorsError: { [key: string]: any }
  //validator value
  validatorRequired: ValidatorFn = Validators.required;
  validatorMaxLenght: ValidatorFn = Validators.maxLength(20);
  validatorArray: ValidatorFn[] = [this.validatorRequired, this.validatorMaxLenght];

  sampleGroup = new FormGroup({
    email1Control: new FormControl('boppin@gmail.com', [Validators.required, Validators.maxLength(5)]),
    email2Control: new FormControl('pray@google.com', [Validators.required, this.dontKeyNamePrayut, this.validatorNoSpace, Validators.email]),
    email3Control: new FormControl('steph@thaimail.com', Validators.required),
    email4Control: new FormControl('xxx@thai.wa.com', Validators.required),
    carsControl: new FormControl('Honda'
      , Validators.required),
    telephoneControl: new FormControl(null, [Validators.required, this.telephoneValidator]),
    statusControl: new FormControl('active', Validators.required)
  });

  // telephoneControl = new FormControl('12-3123');
  // telephone = '12-3123';

  title = 'icoder';
  myDirectiveValue = 'Hello Directive';
  sum = 0;
  widthValue = 100;


  // ตัวแปรช่องกรอก product
  productName = '';
  productStep = '';
  productMin = '';
  productMax = '';

  cars = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
  ];

  //booklist
  appComponentBookList: any;

  products: ProductAdjuster[] = [
    { name: 'tomoto', value: 0, step: 5, min: 0, max: 50 },
    { name: 'pumpkin', value: 0, step: 10, min: 0, max: 100 },
    { name: 'cucumber', value: 0, step: 1, min: 0, max: 10 },
    { name: 'orange', value: 0, step: 100, min: 0, max: 1000 },
    { name: 'apple', value: 0, step: 500, min: 0, max: 5000 },
  ];
  displayProducts = this.products;
  departmentBackUp: Department;

  departmentFormGroup = new FormGroup({
    departmentCode: new FormControl(null, Validators.required),
    departmentName: new FormControl(null, Validators.required),
    status: new FormControl(),
    remark: new FormControl(),
    telephone: new FormControl(null, this.telephoneValidator),
    budget: new FormControl(null, Validators.maxLength(10)),
    province: new FormControl(),
  });

  genderOptions = [
    { label: 'ทั้งหมด', value: null },
    { label: 'Female', value: 'Female' },
    { label: 'Male', value: 'Male' }
  ];

  genderControl = new FormControl();

  // ตะกร้าสินค้า
  sumCart = 0;
  carts: ProductAdjuster[] = [];
  spinner = false;

  departmentStatus = new FormControl();
  departmentName = new FormControl();
  displayDepartment = false;
  departmentMode = null;

  isAliveControl = new FormControl();
  characters: Characters[];
  displayDialogCharacter = false;
  selectedCharacter: Characters;

  value2: string;


  gogo() {
    this.router.navigate(['/home']).then(r => { });;
  }

  showTvSeries(event: any) {
    const selected: Characters = event.data;
    this.selectedCharacter = selected;

    this.displayDialogCharacter = true;
  }

  getCharacters() {
    this.spinner = true;

    const gender = this.genderControl.value;
    const alive = this.isAliveControl.value;
    this.service.getCharacters(gender, alive).subscribe(res => {
      this.characters = res;
      this.spinner = false;
    })
  }

  removeDepartment() {
    this.spinner = true;
    const departmentCode = this.departmentFormGroup.get('departmentCode').value;
    this.service.removeDepartment(departmentCode).subscribe(res => {
      this.spinner = false;
      this.displayDepartment = false;

      this.clickDepartmentApi();
      //แสดง toast
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Deleted Department' });
    },
      err => {
        this.spinner = false;
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Cannot Delete Department' });
      });
  }

  clearDialogDepartment() {
    if (this.departmentBackUp) {
      this.departmentFormGroup.reset(this.departmentBackUp);
    } else {
      this.departmentFormGroup.reset();
    }
  }

  openAddDepartment() {
    this.departmentBackUp = null;
    this.departmentMode = "add";
    this.displayDepartment = true;
    this.departmentFormGroup.reset();
    this.departmentFormGroup.get('departmentCode').enable();
  }

  selectDepartment(event: any) {

    this.departmentBackUp = event.data;

    this.departmentMode = "update";
    //สั่ง disabled ใน edit เพื่อไม่ให้แก้ไข
    this.departmentFormGroup.get('departmentCode').disable();
    //เช็คข้อมูลที่เลือก
    //console.log(event.data);
    this.departmentFormGroup.patchValue(event.data);
    this.displayDepartment = true;


  }

  addDepartment() {
    if (this.departmentFormGroup.valid) {

      this.spinner = true;

      //.value ไม่ get ค่า disable
      //.getrawvalue get ค่า disable
      const formGroupValue = this.departmentFormGroup.getRawValue();

      this.service.addDepartment(formGroupValue).subscribe(res => {
        this.spinner = false;
        console.log('Update OK!!!');

        this.displayDepartment = false;
        //ค้นหาใหม่อีกรอบเพื่อ refresh
        this.clickDepartmentApi();
        //แสดง toast
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Added Department' });
      },
        err => {
          this.spinner = false;
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Cannot Add Department' });
        });
    }
  }

  updateDepartment() {

    if (this.departmentFormGroup.valid) {

      this.spinner = true;

      //.value ไม่ get ค่า disable
      //.getrawvalue get ค่า disable
      const formGroupValue = this.departmentFormGroup.getRawValue();
      this.service.updateDepartment(formGroupValue).subscribe(res => {
        this.spinner = false;
        console.log('Update OK!!!');

        this.displayDepartment = false;
        //ค้นหาใหม่อีกรอบเพื่อ refresh
        this.clickDepartmentApi();
        //แสดง toast
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Update Department' });
      },
        err => {
          this.spinner = false;
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Cannot Update Department' });
        });
    }
  }

  queryDepartment() {
    this.clickDepartmentApi();
  }

  clearDepartment() {
    this.departmentList = [];
  }


  clickDepartmentApi() {

    const status = this.departmentStatus.value;
    const departmentName = this.departmentName.value;
    this.spinner = true;

    this.service.getDepartment(status, departmentName).subscribe(
      departmentList => {
        this.departmentList = departmentList;
        this.spinner = false;
      }
    )
  }

  //shootApi
  clickTestApi() {
    this.spinner = true;
    const fromReleaseDate: Date = this.fromReleaseDateControl.value;
    const toReleaseDate: Date = this.ToReleaseDateControl.value;
    this.service.getBooks(fromReleaseDate, toReleaseDate).subscribe(
      bookList => {
        this.spinner = false;
        //console.log('bookList', bookList);
        this.appComponentBookList = bookList;
      }
    )
  }

  clearTestApi() {
    this.fromReleaseDateControl.reset();
    this.ToReleaseDateControl.reset();
    this.appComponentBookList = [];
  }


  //validate input telephone
  telephoneValidator(control: AbstractControl): ValidationErrors | null {
    const phoneNumber: string = control.value;

    if (phoneNumber && !/^\d{3}\-\d{7}\b/g.test(phoneNumber)) {
      return { phone: true }
    }
    return null;
  }



  clearSample() {
    // this.sampleControl.setValue(null);
    this.sampleControl.reset();
  }

  clearSampleGroup() {
    this.sampleGroup.reset({ email1Control: 'boppin@gmail.com' });
  }

  resetSample2() {
    this.sample2Control.reset();
  }

  submitApiSampleGroup() {
    // ng-valid
    if (this.sampleGroup.valid) {
      window.alert('ยิง api นะ');
    } else {
      window.alert('validate ยังไม่ผ่านนะ');
    }
  }

  mockSampleGroup() {
    const mockData = {
      email1Control: 'mock',
      email2Control: 'mock',
      email3Control: 'mock',
      email4Control: 'mock',
      carsControl: 'mock',
      telephoneControl: 'mock',
      statusControl: 'deactive'
    };

    this.sampleGroup.patchValue(mockData);
  }

  addCarts() {
    this.sumCart = 0;
    // this.products
    // .filter(pro => pro.value > 0)
    // .forEach(pro => {
    //   this.sumCart += pro.value;
    //   this.carts.push({...pro});
    //   pro.value = 0;
    // });

    this.products.forEach(product => {
      if (product.value > 0) {
        // this.sumCart += product.value;
        this.carts.push({ ...product });
        product.value = 0;
      }
    });

    // this.carts.forEach(cart => this.sumCart += cart.value);

    this.sumCart = this.carts.reduce((sum, cart) => sum + cart.value, 0);

    // for (const product of this.products) {
    //   if (product.value > 0) {
    //     this.sumCart += product.value;
    //     this.carts.push({...product});
    //     product.value = 0;
    //   }
    // }
    this.sum = 0;
  }

  addSummary(value: number) {
    this.sum += value;
  }

  subtractSummary(value: number) {
    this.sum -= value;
  }

  addProduct() {
    this.products.push({
      name: this.productName,
      value: 0,
      step: +this.productStep,
      min: +this.productMin,
      max: +this.productMax
    });
  }


  clearInput() {
    this.productName = '';
    this.productStep = '';
    this.productMin = '';
    this.productMax = '';
  }

  // clearInput(...elementList: HTMLInputElement[]) {
  //   for (const element of elementList) {
  //     element.value = '';
  //   }
  // }

  search(keyword: string) {
    this.displayProducts = this.products.filter(product => product.name.indexOf(keyword) !== -1);
  }

  //สร้าง requied ขึ้นมาเอง
  dontKeyNamePrayut(control: AbstractControl): ValidationErrors | null {
    if (control.value && (control.value === "prayut" || control.value === "ลุงตู่")) {
      return { dangerousName: true };
    }
    return null;
  }
}
