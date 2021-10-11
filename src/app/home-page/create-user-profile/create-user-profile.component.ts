import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CreateUserProfileComponent implements OnInit {

  city: string;
  display: boolean = false;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }



  showDialog() {

  }

  confirm() {
    this.display = true;
  }


  confirm_create() {
    this.display = false;
    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
  }

}
