import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[RendererStyle]'
})
export class RendererStyleDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) { 
      // console.log(this.elementRef)
      // console.log(this.renderer)
      this.renderer.setStyle(
        this.elementRef.nativeElement, 
        'background-color',
        '#c2f3f3'
        )

    }

}
