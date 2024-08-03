import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    searchText:string="";
    count:number =0;

    increase()
    {
        this.count++;
    }
    decrease()
    {
        if(this.count>0)
            this.count--;
    }

  data= [
    {
      id: 1,
      title: 'Allspices powder',
      price: 600,
      description: 'Allspices powder',
      category: 'powder',
      image: '/assets/products/allspice-powder.png',
      available:true,
    },
    {
      id: 2,
      title: 'Cinnamon Sticks Spice',
      price: 200,
      description: 'Cinnamon Sticks Spice',
      category: 'grounded',
      image: '/assets/products/cinnamon-sticks-spice.png',
      available:true,
    },
    {
      id: 3,
      title: 'Dry Mint Leaves',
      price: 600,
      description: 'Dry Mint Leaves',
      category: 'grounded',
      image: '/assets/products/dry-mint-leaves.png',
      available:true,
    },
    {
      id: 4,
      title: 'Fennel Seeds Spice',
      price: 250,
      description: 'Fennel Seeds Spice',
      category: 'grounded',
      image: '/assets/products/fennel-seeds-spice.png',
      available:true,
    },
    {
      id: 5,
      title: 'Garam Masala',
      price: 800,
      description: 'Garam Masala',
      category: 'seeds',
      image: '/assets/products/garam-masala.png',
      available:true,
    },
    {
      id: 6,
      title: 'Masala Seasonning',
      price: 600,
      available:false,
      description: 'Masala Seasonning',
      category: 'seeds',
      image: '/assets/products/masala-seasoning.png',
    },
    {
      id: 7,
      title: 'Mix Masala',
      price: 500,
      available:false,
      description: 'Mix Masala',
      category: 'grounded',
      image: '/assets/products/mix-masala.png',
    },
    {
      id: 8,
      title: 'Oregano Spice',
      price: 600,
      available:false,
      description: 'Oregano Spice',
      category: 'seeds',
      image: '/assets/products/oregano-spice.png',
    },
    {
      id: 9,
      title: 'Special Condiment',
      price: 400,
      available:true,
      description: 'Special Condiment',
      category: 'seeds',
      image: '/assets/products/special-condiment.png',
    },
    {
      id: 10,
      title: 'Spice Tea',
      price: 400,
      description: 'Spice Tea',
      category: 'seeds',
      available:true,
      image: '/assets/products/spice-tea.png',
    },
    {
      id: 11,
      title: 'Star Anise Powder Spices',
      price: 500,
      description: 'Star Anise Powder Spices',
      category: 'seeds',
      available:true,
      image: '/assets/products/star-anise-powder-spices.png',
    },
    {
      id: 12,
      title: 'Turmeric Spice Powder',
      price: 500,
      description: 'Turmeric Spice Powder',
      category: 'seeds',
      image: '/assets/products/turmeric-spice-powder.png',
      available:true,
    },
  ]
}
