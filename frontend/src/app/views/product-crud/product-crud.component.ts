import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/produtos'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate():void {
    console.log('Navegando');
    /* foi importado a dependencia do router, sendo assim é possivel usar os metodos da rota na funcao
    pra isso é só chamar o metodo navigate e passar a rota por parametro
    */
    this.router.navigate(['product/create'])
    
  }

}
