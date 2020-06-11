import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.css']
})
export class AdjusterComponent implements OnInit, OnDestroy {
  @Input() max = 10;
  @Input() min = 0;
  @Input() step = 1;
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  @Output() add = new EventEmitter<number>();
  @Output() subtract = new EventEmitter<number>();

  increValue() {
    if ((this.value + this.step) < this.max) {
      this.value += this.step;
      this.valueChange.emit(this.value);
      this.add.emit(this.step);
    }
  }

  decreValue() {
    if ((this.value - this.step) > this.min) {
      this.value -= this.step;
      this.valueChange.emit(this.value);
      this.subtract.emit(this.step);
    }
  }

  constructor() { }

  // ทำเมื่อ component เกิด
  ngOnInit() {
    console.log('เกิดแล้ว');
  }

  // ทำก่อนตาย
  ngOnDestroy(): void {
   console.log('ก่อนตาย');
  }

}
