import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColoredBorder]',
})
export class ColoredBorderDirective implements OnInit {
  @Input() appColoredBorder!: string;

  private sixMonthsMs = 6 * 30 * 24 * 60 * 60 * 1000;

  private oneMonthMs = 30 * 24 * 60 * 60 * 1000;

  private oneWeekMs = 7 * 24 * 60 * 60 * 1000;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const currentDateMs = new Date().getTime();
    const itemDate = new Date(this.appColoredBorder).getTime();

    const dateDifference = currentDateMs - itemDate;

    switch (true) {
      case dateDifference >= this.sixMonthsMs:
        this.elementRef.nativeElement.style.backgroundColor = 'red';
        break;
      case dateDifference >= this.oneMonthMs:
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        break;
      case dateDifference >= this.oneWeekMs:
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        break;
      default:
        this.elementRef.nativeElement.style.backgroundColor = 'cornflowerblue';
        break;
    }
  }
}
