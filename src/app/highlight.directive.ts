import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Quote } from './quote';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

   @Input() quote: Quote;

  constructor(private elem: ElementRef) {
  }

    @HostListener('click') onClicks() {
      this.highlight('red');
    }

    private highlight(action: string){

      this.elem.nativeElement.style.backgroundColor = action;
    }




}
