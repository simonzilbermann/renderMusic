import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number = 1;
  maxId: number = 0;

  product: Products;



  constructor(
    private router: Router,
    private route: ActivatedRoute,// /:id
    private productService: ProductService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct():void{
    this.id=+this.route!.snapshot!.paramMap!.get('id');
    this.maxId = this.productService.productLength;
    this.productService.getProduct(this.id)
    .subscribe(product => this.product = product);
  }

  goBack():void{
    //this.location.back();//son router
    this.router.navigate([''], {relativeTo:this.route})//avec router
  }

}
