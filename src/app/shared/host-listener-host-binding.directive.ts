import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[HostListenerHostBinding]'
})
export class HostListenerHostBindingDirective {

@HostListener('mouseenter') onMouseOver() {
  this.backgroundColor = 'red'
}

@HostListener('mouseleave') onMouseLeave() {
this.backgroundColor = 'white'
}

@HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor() { }

}
