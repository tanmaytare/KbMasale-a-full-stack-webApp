import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactUsServiceService } from '../Service/contact-us-service.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private service:ContactUsServiceService) {}
  contactForm :FormGroup = new FormGroup(
    {
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      ph : new FormControl(),
      msg : new FormControl(),

    }
  );
  
  contactInfo:any;

  Onsend()
  {
    this.contactInfo = this.contactForm.value;
    this.service.onSend(this.contactInfo).subscribe(
      response => {
        alert('Form Sent !');
        console.log('Signup successful:', response);
      },
      error => {
        alert('failed. Please try again.');
        console.error('Signup error:', error);
      }
    );
  }
}
