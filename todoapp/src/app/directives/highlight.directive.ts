import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    let cls = 'alert-warning';
    el.nativeElement.classList.add('appHighlight');
    el.nativeElement.onmouseover = function() {
      this.classList.add(cls);
    }
    el.nativeElement.onmouseleave = function() {
      this.classList.remove(cls);
    }
   }

}
