import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  islogin = false;
  ngOnInit(): void {
    if(localStorage.getItem("User")===null)
    {
      this.islogin = false;
    }
    else{
      this.islogin =true;
    }
  }

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
      title: 'PISTACIO',
      price: 600,
      description: 'Allspices powder',
      category: 'powder',
      image: './assets/newProducts/pista/p04.png',
      available:true,
    },
    {
      id: 2,
      title: 'ALMONDS',
      price: 200,
      description: 'Cinnamon Sticks Spice',
      category: 'grounded',
      image: './assets/newProducts/almonds/a1.png',
      available:true,
    },
    {
      id: 3,
      title: 'CASHEWS',
      price: 600,
      description: 'Dry Mint Leaves',
      category: 'grounded',
      image: './assets/newProducts/cashew/c2.png',
      available:true,
    },
    {
      id: 4,
      title: 'WALNUT (AKHROAT)',
      price: 250,
      description: 'Fennel Seeds Spice',
      category: 'grounded',
      image: './assets/newProducts/wallnut/w1.png',
      available:true,
    },
    {
      id: 5,
      title: 'DATES',
      price: 800,
      description: 'DATES',
      category: 'seeds',
      image: './assets/newProducts/dates/d1.png',
      available:true,
    },
    {
      id: 6,
      title: 'RAISINS (KISHMISH)',
      price: 600,
      available:false,
      description: 'Masala Seasonning',
      category: 'seeds',
      image: './assets/newProducts/raisins/r8.png',
    },
    {
      id: 7,
      title: 'FIG (ANJEER)',
      price: 500,
      available:false,
      description: 'FIG (ANJEER)',
      category: 'grounded',
      image: './assets/newProducts/fig/f1.png',
    },
    {
      id: 8,
      title: 'Oregano Spice',
      price: 600,
      available:false,
      description: 'Oregano Spice',
      category: 'seeds',
      image: './assets/products/oregano-spice.png',
    },
    {
      id: 9,
      title: 'Special Condiment',
      price: 400,
      available:true,
      description: 'Special Condiment',
      category: 'seeds',
      image: './assets/products/special-condiment.png',
    },
    {
      id: 10,
      title: 'Spice Tea',
      price: 400,
      description: 'Spice Tea',
      category: 'seeds',
      available:true,
      image: './assets/products/spice-tea.png',
    },
    {
      id: 11,
      title: 'Star Anise Powder Spices',
      price: 500,
      description: 'Star Anise Powder Spices',
      category: 'seeds',
      available:true,
      image: './assets/products/star-anise-powder-spices.png',
    },
    {
      id: 12,
      title: 'Turmeric Spice Powder',
      price: 500,
      description: 'Turmeric Spice Powder',
      category: 'seeds',
      image: './assets/products/turmeric-spice-powder.png',
      available:true,
    },
  ]
}
