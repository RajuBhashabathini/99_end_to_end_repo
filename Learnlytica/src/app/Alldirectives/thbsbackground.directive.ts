import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThbsbackground]'
})
export class ThbsbackgroundDirective {

  @HostListener('mouseenter')
  onMouseEnter() {
    this.myelement.nativeElement.style.fontSize = "50px";
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.myelement.nativeElement.style.fontSize = "15px";
  }
  @HostListener('dblclick')
  onMouseDoubleClick() {
    this.myelement.nativeElement.style.color = "red";
  }
  @HostListener('click')
  onMouseClick() {
    this.myelement.nativeElement.style.color = "black";
  }

  constructor(private myelement: ElementRef) {

    this.myelement.nativeElement.style.backgroundColor = "lightblue";
    this.myelement.nativeElement.innerHTML = "RajuBhashabathini";
  }

}
