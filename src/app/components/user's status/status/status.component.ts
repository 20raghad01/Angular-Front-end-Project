import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';

@Component({
    selector: 'app-status',
    standalone: true,
    imports: [TableModule, FormsModule, ButtonModule, RatingModule, TagModule, CommonModule,
        PaginatorModule, DropdownModule
    ],
    templateUrl: './status.component.html',
    styleUrl: './status.component.css'
})

export class StatusComponent {
  // products: Array<any> = [];

  // constructor(private allProductService: AllProductsService) {}

  // ngOnInit() {
  //   this.allProductService.products.then((data) => {
  //       this.products = data;
  // });

    products: Array<any> = [
        {
            id: '1000',
            cover: 'bamboo-watch.jpg',
            name: 'Bamboo Watch',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 5,
            items: ['read','want to read', 'reading']
        },
        {
            id: '1001',
            cover: 'black-watch.jpg',
            name: 'Black Watch',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 4,
            items: ['read','want to read', 'reading']
        },
        {
            id: '1002',
            cover: 'blue-band.jpg',
            name: 'Blue Band',
            author: "Mohamed Sadek",
            avgRate: 5,
            rating: 3,
            items: ['read','want to read', 'reading']
        },
        {
            id: '1003',
            cover: 'blue-t-shirt.jpg',
            name: 'Blue T-Shirt',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 5,
            items: ['read','want to read', 'reading']
        },
        {
            id: '1004',
            cover: 'bracelet.jpg',
            name: 'Bracelet',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 4,
            items: ['read','want to read', 'reading']
        },
        {
        id: '1000',
        cover: 'bamboo-watch.jpg',
        name: 'Bamboo Watch',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 5,
        items: ['read','want to read', 'reading']
    },
    {
        id: '1001',
        cover: 'black-watch.jpg',
        name: 'Black Watch',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 4,
        items: ['read','want to read', 'reading']
    },
    {
        id: '1002',
        cover: 'blue-band.jpg',
        name: 'Blue Band',
        author: "Mohamed Sadek",
        avgRate: 5,
        rating: 3,
        items: ['read','want to read', 'reading']
    },
    {
        id: '1003',
        cover: 'blue-t-shirt.jpg',
        name: 'Blue T-Shirt',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 5,
        items: ['read','want to read', 'reading']
    },
    {
        id: '1004',
        cover: 'bracelet.jpg',
        name: 'Bra',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 4,
        items: ['read','want to read', 'reading']
    }
    ]

    currentFilter:any;
    filteredProducts = this.products;
    filterProducts(name:string){

    }

}

