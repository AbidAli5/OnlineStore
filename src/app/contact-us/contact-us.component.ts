import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {
  
  myForm = this.fb.group({
    name: '',
    email: '',
    message: ''
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    // Access the form data using this.myForm.value
    // console.warn('Your order has been submitted', this.myForm.value);
    console.log(this.myForm.value);
  }

}
