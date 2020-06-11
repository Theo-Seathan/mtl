import { Directive, Input, OnChanges, SimpleChanges, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyInputText]'
})
export class MyInputTextDirective implements OnChanges {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  // inject ไปที่ตัวที่แปะ ดึง element
  constructor(private el: ElementRef<HTMLInputElement>) { }

  // ทำงานเมื่อ @Input() มีการเปลี่ยนค่า (Life Cycle Hook ของ Angular เหมือนกับ ngOnInit, ngOnDestroy มะวาน)
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      // นำค่าที่ส่งมาจาก input นำไปแสดงใน inputTextElement
      this.el.nativeElement.value = this.value;
    }
  }

  @HostListener('input', ['$event']) onInput(event: MouseEvent) {
    // ทำเมื่อเกิด event input ของตัว component ที่เราแปะ
    this.valueChange.emit(this.el.nativeElement.value);
  }

}
