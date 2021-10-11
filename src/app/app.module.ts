import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjusterComponent } from './adjuster/adjuster.component';
import { SelectItemModule } from './select-item/select-item.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SearchFormModule } from './search-form/search-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule, Routes } from '@angular/router';
import { LearnRouteModule } from './router/learn-route.module';
import { ProductsComponent } from './router/products/products.component';
import { EmployeesComponent } from './router/employees/employees.component';
import { SideAvComponent } from './router/side-av/side-av.component';
import { SideTvComponent } from './router/side-tv/side-tv.component';
import { DepartmentComponent } from './router/department/department.component';
import { SideDepartmentComponent } from './router/side-department/side-department.component';
import { PasswordModule } from 'primeng/password';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'tv', component: SideTvComponent, outlet: 'sidebar' },
  { path: 'av', component: SideAvComponent, outlet: 'sidebar' },
  { path: 'dp', component: SideDepartmentComponent, outlet: 'sidebar' },
];
@NgModule({
  declarations: [
    AppComponent,
    AdjusterComponent,
    LoginComponent,
  ],
  imports: [
    AccordionModule,
    MenuModule,
    TabMenuModule,
    MegaMenuModule,
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    SelectItemModule,
    ButtonModule,
    DropdownModule,
    SearchFormModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    TableModule,
    HttpClientModule,
    ProgressSpinnerModule,
    CalendarModule,
    DialogModule,
    InputNumberModule,
    ToastModule,
    PasswordModule,
    CheckboxModule,
    RouterModule.forRoot(routes),
    LearnRouteModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }