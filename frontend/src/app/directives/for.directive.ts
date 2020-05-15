import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]; //está pegando o 'myForm' do html e interpretando o que vem depois do 'em'
  
  /*@Input('myForUsando') texto: string 
    está pegando o 'myForm' e resolvendo a variavel 'usando'
    pode ser qualquer nome depois do nome da diretiva
  */
  
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit():void {
    /*o createEmbeddedView é um metodo da classe ViewContainerRef que foi injetado no construtor, 
    esse metodo vai criar o elemento em que a diretiva está aplicada, no caso, as <li>
    que foi passada por paramentro que variavel template (que tbm é uma case do angular)
    ** a variavel numbers foi linkada a variavel 'n' que foi criada no html (dentro da diretiva) **
    */ 
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number});
    }
    /* o variavel 'n' que foi criada no template(html) nao esta exibindo o valor pq ele esta inplicito, 
    para que o valor seja exibido nesse template que sera criado pelo for,
    é necessario passar esse valor implicito como segundo paramentro pelo for
     */
    console.log(this.numbers);    
    
  }

}
