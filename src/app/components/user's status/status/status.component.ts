import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { DropdownModule } from 'primeng/dropdown';

import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'app-status',
    standalone: true,
    imports: [TableModule, FormsModule, ButtonModule, RatingModule, TagModule, CommonModule,
        PaginatorModule, DropdownModule, NgxPaginationModule
    ],
    templateUrl: './status.component.html',
    styleUrl: './status.component.css'
})

export class StatusComponent {
    data!: Array<any> ;
    p: number = 1;
  // products: Array<any> = [];

  // constructor(private statusService: StatusService) {
    //     statusService.showData().subscribe((response: any)=>{
    //         this.data = response.products;
    //     })
    // }
  // ngOnInit() {
  //   this.allProductService.products.then((data) => {
  //       this.products = data;
  // });

  // products.length

  // ngOnInit() {
  //   this.allProductService.products.then((data) => {
  //       this.products = data;
  // });

  // products.length

    products: Array<any> = [
        {
            id: '1',
            cover: 'bamboo-watch.jpg',
            name: 'Bamboo Watch',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 5,
            items: 'Read'
        },
        {
            id: '2',
            cover: 'blue-band.jpg',
            name: 'Blue Band',
            author: "Mohamed Sadek",
            avgRate: 5,
            rating: 3,
            items: 'Reading'
        },
        {
            id: '3',
            cover: 'blue-t-shirt.jpg',
            name: 'Blue T-Shirt',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 5,
            items: 'Want to read'
        },
        {
            id: '4',
            cover: 'bracelet.jpg',
            name: 'Bracelet',
            author: "Mohamed Sadek",
            avgRate: 2,
            rating: 4,
            items: 'Want to read'
        },
        {
        id: '5',
        cover: 'bamboo-watch.jpg',
        name: 'Bamboo Watch',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 5,
        items: 'Want to read'
    },
    {
        id: '6',
        cover: 'black-watch.jpg',
        name: 'Black Watch',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 4,
        items: 'Reading'
    },
    {
        id: '7',
        cover: 'blue-band.jpg',
        name: 'Blue Band',
        author: "Mohamed Sadek",
        avgRate: 5,
        rating: 3,
        items: 'Read'
    },
    {
        id: '8',
        cover: 'blue-t-shirt.jpg',
        name: 'Blue T-Shirt',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 5,
        items: 'Read'
    },
    {
        id: '9',
        cover: 'bracelet.jpg',
        name: 'Bra',
        author: "Mohamed Sadek",
        avgRate: 2,
        rating: 4,
        items: 'Reading'
    }
    ]

    // filter read, wanttoread, reading
    filteredProducts: Array<any> = [...this.products];
    currentFilter: string = 'All';

    filterProducts(status: string) {
        if (status === 'All') {
            this.filteredProducts = [...this.products];
            this.currentFilter = status;            
        } else {
            this.filteredProducts = this.products.filter(product => product.items === status);
            this.currentFilter = status;
        }
    }
}
