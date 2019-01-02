import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product.service';
import { IProduct } from '../../product';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(ps => this.productList = ps);

    this.activatedRoute.queryParamMap.subscribe(
      query => {
        const orderBy = query.get('orderby');
        console.log(orderBy);
      }
    );
  }

}
