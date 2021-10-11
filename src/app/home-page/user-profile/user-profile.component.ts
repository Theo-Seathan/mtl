import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  value2
  city: string;
  display: boolean = false;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  user_profile = [
    {
      No: 1,
      Username: 'MTL84878',
      Firstname: 'Sawasdee',
      Lastname: 'Muangthai',
      Role: 'System Admin',
      CreateDate: '24-09-2021 23:07:38',
      CreateBy: 'MTL84878',
      UpdateDate: '24-09-2021 23:07:38',
      UpdateBy: 'MTL84878',
      FirstLogin: '24-09-2021 23:07:38',
      LastLogin: '24-09-2021 23:07:38',
      Status: 'Active',
    },
    {
      No: 2,
      Username: 'MTL82314',
      Firstname: 'Sukjai',
      Lastname: 'Sansuk',
      Role: 'Operation Support',
      CreateDate: '24-09-2021 23:07:38',
      CreateBy: 'MTL84878',
      UpdateDate: '24-09-2021 23:07:38',
      UpdateBy: 'MTL84878',
      FirstLogin: '24-09-2021 23:07:38',
      LastLogin: '24-09-2021 23:07:38',
      Status: 'Active',
    },
    {
      No: 3,
      Username: 'MTL85691',
      Firstname: 'Manee',
      Lastname: 'Jiangam',
      Role: 'Business Owner',
      CreateDate: '24-09-2021 23:07:38',
      CreateBy: 'MTL84878',
      UpdateDate: '24-09-2021 23:07:38',
      UpdateBy: 'MTL84878',
      FirstLogin: '24-09-2021 23:07:38',
      LastLogin: '24-09-2021 23:07:38',
      Status: 'Active',
    },
    {
      No: 4,
      Username: 'MTL84999',
      Firstname: 'Phantara',
      Lastname: 'Methakul',
      Role: 'System Admin',
      CreateDate: '24-09-2021 23:07:38',
      CreateBy: 'MTL84878',
      UpdateDate: '24-09-2021 23:07:38',
      UpdateBy: 'MTL84878',
      FirstLogin: '24-09-2021 23:07:38',
      LastLogin: '24-09-2021 23:07:38',
      Status: 'Inactive',
    },
    {
      No: 5,
      Username: 'MTL89672',
      Firstname: 'Sonchai',
      Lastname: 'Wandee',
      Role: 'System Admin',
      CreateDate: '24-09-2021 23:07:38',
      CreateBy: 'MTL84878',
      UpdateDate: '24-09-2021 23:07:38',
      UpdateBy: 'MTL84878',
      FirstLogin: '24-09-2021 23:07:38',
      LastLogin: '24-09-2021 23:07:38',
      Status: 'Active',
    },
    {
      No: 6,
      Username: 'MTL86735',
      Firstname: 'Napa',
      Lastname: 'Srisuk',
      Role: 'System Admin',
      CreateDate: '24-09-2021 23:07:38',
      CreateBy: 'MTL84878',
      UpdateDate: '24-09-2021 23:07:38',
      UpdateBy: 'MTL84878',
      FirstLogin: '24-09-2021 23:07:38',
      LastLogin: '24-09-2021 23:07:38',
      Status: 'Inactive',
    }
  ]
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  showViewUser(user) {
    let data = user
    this.router.navigate(['/home/view-user-profile']).then(r => { });;
  }
}
