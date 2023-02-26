import { Component, Input, OnInit } from '@angular/core';
import { SORTS } from '../mock-products';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { Sorts } from '../sort';
import Utils from '../utils';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
formatDate(arg0: number) {
throw new Error('Method not implemented.');
}
  products:Products[] = [];
  sortList:Sorts[] = SORTS;

  private _sortBy: number = 0;
  @Input() filterByCategory: string = "";
  
  @Input() set sortBy(value:number){
    this._sortBy = value;
    this.sortProduct(value);
  } 

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getproducts();//Hook
    this.sortProduct(0);
  }

  getproducts():void{
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  private sortProduct(sortIndex: number){
    let sortObj = this.sortList[sortIndex];
    if(sortObj.type === "number"){
      this.products = Utils.sortNumber(this.products, sortObj.key, sortObj.desc);
    }else{
      this.products = Utils.sortString(this.products, sortObj.key, sortObj.desc);
    }
  }
}
