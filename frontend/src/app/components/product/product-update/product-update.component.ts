import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  //chamando o service e pegando o id do item a ser alterado.
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') //pegando o id pela rota
    this.productService.readById(id).subscribe(product => {
      this.product = product
    }) // O Item já virá preenchido
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
