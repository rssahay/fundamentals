import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyhighlighter]'
})
export class MyhighlighterDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow'
   }

   @HostListener('mouseenter') mymouseEnter(){
    this.highlighter('blue')
   }

   @HostListener('mouseleave') mouseLeave(){
      this.highlighter('green')
   }

   highlighter(color :any){
    this.el.nativeElement.style.backgroundColor = color
   }
   

}
