import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };
  
  constructor(private productService: ProductService,
    private router: Router) { }
    
  ngOnInit(): void { }
  /*
  Aqui no componente o servico esta apenas sendo chamado, e o post esta sendo feito pelo servico
  Chamei o metodo create do produto e passei por paramento o produto, 
  depois chamei o metodo subscribe para saber o retorno do observable desse metodo, que esta la no servico
  quando essa resposta chegar, o meu subscribe aqui sera avisado e executara o que esta dentro da arrow function
  */
  createProduct(): void {
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage('Produto criado com sucesso!'); 
      this.router.navigate(['products']);
    });
  }
  
  cancel(): void {
    this.router.navigate(['products']);
  }
    
  // atributoLegal = 'qualquer';
  // fazerAlgo():void {
  //   console.log('Fazendo algo');
  // }

}
