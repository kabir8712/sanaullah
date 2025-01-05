import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit() {
    alert('Your message has been sent successfully!');
    // You can implement actual form submission logic here, e.g., API integration.
  }
}
