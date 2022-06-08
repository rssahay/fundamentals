import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  @Input() appHiglight = '';

  constructor(private el:ElementRef) {
   // this.el.nativeElement.style.backgroundColor = 'yellow'
 //  this.el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHiglight || 'violet')
   }

   @HostListener('mouseleave') onMouseLeave(){
     this.highlight('yellow')
   }

   highlight(color :any){
    this.el.nativeElement.style.backgroundColor = color
   }
}
