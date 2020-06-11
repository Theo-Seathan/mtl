import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectItemComponent } from './select-item/select-item.component';
import { MyInputTextDirective } from './my-input-text.directive';
import { DebounceDirective } from './debounce.directive';



@NgModule({
  declarations: [SelectItemComponent, MyInputTextDirective, DebounceDirective],
  imports: [
    CommonModule
  ],
  exports: [SelectItemComponent, MyInputTextDirective, DebounceDirective]
})
export class SelectItemModule { }
