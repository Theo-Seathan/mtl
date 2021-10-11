import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  value2;
  items: MenuItem[];
  activeItem: MenuItem;
  business_date = '18/09/2021'
  user_number = 'MTL84878'
  role = 'System Admin'
  @ViewChild('menuItems') menu: MenuItem[];

  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Customer Management',
        routerLink: ["user-profile"]
      },
      {
        label: 'Survey Questions Management',
        routerLink: '/dashboard'
      },
      {
        label: 'Channel Management',
        routerLink: '/dashboard'
      },
      {
        label: 'Ticket Management',
        routerLink: '/dashboard'
      },
      {
        label: 'User Management',
        items: [
          {
            label: 'Create User Profile',
            routerLink: ['create-user-profile']
          },
          {
            label: 'User Profile',
            routerLink: ["user-profile"]
          },
          {
            label: 'User Role',
            routerLink: '/dashboard'
          }
        ]
      },

    ]

    this.activeItem = this.items[0];
  }


  activateMenu() {
    this.activeItem = this.menu['activeItem'];
  }

  logout() {
    this.router.navigate(['/login']).then(r => { });;
  }



  // items = [
  //   { label: 'Home', icon: 'pi pi-fw pi-home' },
  //   { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
  //   { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
  //   { label: 'Documentation', icon: 'pi pi-fw pi-file' },
  //   { label: 'Settings', icon: 'pi pi-fw pi-cog' }
  // ];
  gogo() {
    this.router.navigate(['/home']).then(r => { });;
  }


}
