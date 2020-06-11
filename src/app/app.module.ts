import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjusterComponent } from './adjuster/adjuster.component';
import { SelectItemModule } from './select-item/select-item.module';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AdjusterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectItemModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
