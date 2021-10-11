import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule, PAGES_COMPONENTS } from './home-page-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { CreateUserProfileComponent } from './create-user-profile/create-user-profile.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';


@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule,
    MenuModule,
    TabMenuModule,
    MegaMenuModule,
    MenubarModule,
    HomePageRoutingModule,
    CalendarModule,
    RadioButtonModule,
    InputTextareaModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule,
    CardModule,
    TableModule

  ]
})
export class HomePageModule { }
