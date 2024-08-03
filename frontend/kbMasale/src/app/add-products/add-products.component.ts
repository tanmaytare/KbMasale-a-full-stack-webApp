import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddProService } from '../Service/add-pro.service';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private service: AddProService) {}

  isAddProduct: boolean = false;
  isEditProduct: boolean = false;
  currentProductId: string | null = null;
  productInfo: any;
  products: any[] = [];

  productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  toggleForm() {
    this.isAddProduct = !this.isAddProduct;
    this.isEditProduct = false;
    this.productForm.reset();
  }

  onSubmit() {
    this.productInfo = this.productForm.value;
    if (this.productForm.valid) {
      if (this.isEditProduct && this.currentProductId) {
        this.updateProduct(this.currentProductId, this.productInfo);
      } else {
        this.addProduct(this.productInfo);
      }
    }
  }

  addProduct(productInfo: any) {
    this.service.OnSubmit(productInfo).subscribe({
      next: response => {
        alert('Product added successfully!');
        this.isAddProduct = false;
        this.productForm.reset();
        this.fetchProducts();
      },
      error: error => {
        alert('Failed to add Product. Please try again.');
      }
    });
  }

  updateProduct(productId: string, productInfo: any) {
    this.service.updateProduct(productId, productInfo).subscribe({
      next: response => {
        alert('Product updated successfully!');
        this.isEditProduct = false;
        this.isAddProduct = false;
        this.productForm.reset();
        this.fetchProducts();
      },
      error: error => {
        alert('Failed to update Product. Please try again.');
      }
    });
  }

  fetchProducts(): void {
    this.service.GetProducts().subscribe({
      next: (response: any) => {
        this.products = response;
      },
      error: (error: any) => {
        console.error('Failed to fetch products', error);
        alert('Failed to fetch products. Please try again later.');
      }
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.service.DeleteProduct(productId).subscribe({
        next: () => {
          alert('Product deleted successfully!');
          this.fetchProducts();
        },
        error: (error: any) => {
          console.error('Failed to delete product', error);
          alert('Failed to delete product. Please try again later.');
        }
      });
    }
  }

  editProduct(product: any) {
    this.isEditProduct = true;
    this.isAddProduct = true;
    this.currentProductId = product._id;
    this.productForm.patchValue(product);
  }
}
