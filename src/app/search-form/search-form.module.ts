import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TableFormComponent } from './table-form/table-form.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveFormComponent } from './save-form/save-form.component';
import { InputMaskModule } from 'primeng/inputmask';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DepartmentStatusPipe } from './department-status.pipe';
@NgModule({
  declarations: [SearchFormComponent, TableFormComponent, SaveFormComponent, DepartmentStatusPipe],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    InputMaskModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
  ],
  exports: [SearchFormComponent, TableFormComponent, SaveFormComponent, DepartmentStatusPipe]
})
export class SearchFormModule { }
