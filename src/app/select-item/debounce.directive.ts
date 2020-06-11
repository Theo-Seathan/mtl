import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective {
  @Output() debounce = new EventEmitter();
  timeout: any;
  constructor() { }


  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.debounce.emit();
    }, 300);
  }
}
