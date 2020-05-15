import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //da para converter para number/strings tbm colocando o mais na frente do this
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe( product => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    //poderia tbm usar o template string ou mudar o tipo no metodo do serviço
    this.productService.delete(this.product.id.toString()).subscribe( () => {
      this.productService.showMessage('Produto excluído com sucesso!');
      this.router.navigate(['products']);
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
