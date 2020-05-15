import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  //essa é uma diretiva de atributo
  constructor(private el: ElementRef) { //ElementRef pega os elementos do html
    el.nativeElement.style.color = '#e35e6b'; //pega o elemento nativo do dom e manipula

   }

}
