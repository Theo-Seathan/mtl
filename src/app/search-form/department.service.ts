import { Injectable } from '@angular/core';
import { Department, Characters, DepartmentCondition } from './table-form/table-form';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'//app.module.ts
})
export class DepartmentService {
  departmentList: Department[] = [
    {
      departmentCode: '010',
      departmentName: 'CDGS',
      budget: 1000000000,
      province: 'Bangkok',
      remark: 'ไม่มี',
      status: 'Y',
      telephone: '012-1231231',
    },
    {
      departmentCode: '010',
      departmentName: 'CDGS',
      budget: 1000000000,
      province: 'Bangkok',
      remark: 'ไม่มี',
      status: 'Y',
      telephone: '012-1231231',
    },
    {
      departmentCode: '010',
      departmentName: 'CDGS',
      budget: 1000000000,
      province: 'Bangkok',
      remark: 'ไม่มี',
      status: 'N',
      telephone: '012-1231231',
    },
    {
      departmentCode: '010',
      departmentName: 'CDGS',
      budget: 1000000000,
      province: 'Bangkok',
      remark: 'ไม่มี',
      status: 'Y',
      telephone: '012-1231231',
    },
  ];

  constructor(private http: HttpClient) {
    this.http
  }

  getBooks(fromReleaseDate: Date, toReleaseDate: Date): Observable<any> {
    //javascript
    //method fetch('https://www.anapioficeandfire.com/api/books').then(response=>response.json()).then(data=>console.log(data));
    let requestParams = new HttpParams();
    if (fromReleaseDate || toReleaseDate) {

      if (fromReleaseDate) {
        requestParams = requestParams.set('fromReleastDate', fromReleaseDate.toISOString());
      }
      if (toReleaseDate) {
        requestParams = requestParams.set('toReleaseDate', toReleaseDate.toISOString());
      }
      const observable2 = this.http.get('https://www.anapioficeandfire.com/api/books', { params: requestParams });
      return observable2;
    }

    const observable = this.http.get('https://www.anapioficeandfire.com/api/books');
    return observable;
  }

  getCharacters(gender: string, alive: boolean): Observable<Characters[]> {

    let httpParams = new HttpParams();
    httpParams = httpParams.set('pageSize', '100');
    if (gender) {
      httpParams = httpParams.set('gender', gender);
    }

    //alive + '' แปลง boolean เป็น string
    httpParams = httpParams.set('isAlive', alive + '');

    const observable = this.http.get<Characters[]>('https://www.anapioficeandfire.com/api/characters', { params: httpParams });
    return observable;
  }

  getDepartmentCondition(condition?: DepartmentCondition) {

    if (!condition) {
      condition = {} as any;
    }

    let httpParams = new HttpParams();

    //วิธีแบบวนข้อมูลตาม propoties แต่ละตัว
    for (const item of Object.entries(condition)) {
      const propotyName = item[0];
      const value = item[1];
      if (value) {
        httpParams = httpParams.set(propotyName, value);
      }
    }

    // const status = condition.status;
    // const departmentName = condition.departmentName;

    //ดึงค่า propoty ของ object มาเก็บใส่ตัวแปรที่ชื่อเดียวกัน
    // const { status, departmentName, budgetFrom, budgetTo, province } = condition;

    // let httpParams = new HttpParams();
    // if (status) {
    //   httpParams = httpParams.set('status', status);
    // }
    // if (departmentName) {
    //   httpParams = httpParams.set('departmentName', departmentName);
    // }
    // if (budgetFrom) {
    //   httpParams = httpParams.set('budgetFrom', budgetFrom + '');
    // }
    // if (budgetTo) {
    //   httpParams = httpParams.set('budgetTo', budgetTo + '');
    // }



    //กำหนด type ของ response เป็น Department [];
    //const observable = this.http.get<Department[]>('/department-api/api/department', { params: httpParams });
    const observable = this.http.get<Department[]>('/workshop-api/api/department', { params: httpParams });
    return observable;
  }

  getDepartment(status?: string, departmentName?: string): Observable<Department[]> {
    let httpParams = new HttpParams();
    if (status) {
      httpParams = httpParams.set('status', status);
    }
    if (departmentName) {
      httpParams = httpParams.set('departmentName', departmentName);
    }
    //กำหนด type ของ response เป็น Department [];
    // const observable = this.http.get<Department[]>('/department-api/api/department', { params: httpParams });
    const observable = this.http.get<Department[]>('/workshop-api/api/department', { params: httpParams });
    return observable;
  }

  updateDepartment(saveDepartment: Department) {
    //const observable = this.http.put('/department-api/api/department', saveDepartment);
    const observable = this.http.put('/workshop-api/api/department', saveDepartment);
    return observable;
  }

  addDepartment(addDepartment: Department) {
    //const observable = this.http.post('/department-api/api/department', addDepartment);
    const observable = this.http.post('/workshop-api/api/department', addDepartment);
    return observable;
  }

  removeDepartment(departmentCode: string) {
    //const observable = this.http.delete('/department-api/api/department/' + departmentCode);
    const observable = this.http.delete('/workshop-api/api/department/' + departmentCode);
    return observable;
  }
}
