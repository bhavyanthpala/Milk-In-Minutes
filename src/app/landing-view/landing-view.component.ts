import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/products';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  allProducts: Product[] = [];
  filterProducts: Product[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  categories: string[] = [];

  constructor(private services: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.services.getAllProducts().subscribe({
      next: (data) => {
        this.allProducts = data;
        this.filterProducts = data; // Initialize filterProducts with all products
        this.extractCategories(); // Extract categories from products
        console.log(this.allProducts);
      },
      error: () => {
        alert("error occurred");
      }
    });
  }

  extractCategories() {
    const categorySet = new Set<string>();
    this.allProducts.forEach(product => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });
    this.categories = Array.from(categorySet);
  }

  search() {
    this.filterProducts = this.allProducts.filter((product: Product) =>
      this.searchQuery.trim() === '' || product.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  filter() {
    this.filterProducts = this.allProducts.filter((product: Product) =>
      this.selectedCategory === '' || product.category === this.selectedCategory
    );
  }
}
