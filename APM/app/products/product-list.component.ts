import { Component, OnInit} from '@angular/core';
import {LoggerService} from '../logging/logger-service';
import {IProduct} from './product';
import {ProductService}  from './product.service'

@Component ({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter : string ;
    showImage: boolean = false;
    products: IProduct[] ;

    constructor( private logger: LoggerService, private _productService : ProductService) {
    }

    toggleImage(): void 
    {
       this.logger.log.info('Toggle pressed ');
        this.showImage = !this.showImage;
    }

    ngOnInit(): void 
    {
        this.logger.log.info('On Init called')
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string){
        this.pageTitle = 'Product List: ' + message;    
    }
}