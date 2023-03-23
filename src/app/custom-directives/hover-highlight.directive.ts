import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  // element1: ElementRef = new ElementRef(null);

  // constructor(element1: ElementRef) { 
  //   this.element1 = element1;
  // }


  @HostBinding('style.background') bgColor: string = 'tranparent';
  @HostBinding('style.fontWeight') fWeight: string = '';

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  anyNameMouseOver(): void{
    // here we will define the styles of the host element when the mouse moves over the host element
    // for this we need a refernce to the host element
    // we get the reference by injecting ElementRef in the contructor

    // this.element.nativeElement.style.backgroundColor = "yellow";
    // this.element.nativeElement.style.fontWeight = "bold";

    this.bgColor = "yellow";
    this.fWeight = "bold";
  }

  @HostListener('mouseleave')
  anyNameMouseLeft(): void{
    // this.element.nativeElement.style.backgroundColor = "initial";
    // this.element.nativeElement.style.fontWeight = "initial";

    this.bgColor = "initial";
    this.fWeight = "initial";
  }

}
