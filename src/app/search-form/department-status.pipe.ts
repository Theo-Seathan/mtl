import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentStatus'
})
export class DepartmentStatusPipe implements PipeTransform {
  //status : 'Y', status 'N'
  transform(value: string): string {
    if (value == 'Y') {
      return 'Active';
    } else if (value == 'N') {
      return 'Deactive'
    }
  }

}
