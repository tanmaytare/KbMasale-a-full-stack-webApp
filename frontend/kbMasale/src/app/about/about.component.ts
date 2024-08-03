import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddProductsComponent } from "../add-products/add-products.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, AddProductsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faqItems = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows for returns within 30 days of purchase. Please refer to our Returns & Refunds page for more information.',
      isOpen: true
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your order on our website.',
      isOpen: false
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to select countries. Please check our Shipping & Delivery page for more details.',
      isOpen: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. For more information, please visit our Payment Options page.',
      isOpen: false
    },
    {
      question: 'Can I cancel my order?',
      answer: 'You can cancel your order within 24 hours of placing it. Please contact our customer support team for assistance.',
      isOpen: false
    }
  ];

  toggleCollapse(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

}
