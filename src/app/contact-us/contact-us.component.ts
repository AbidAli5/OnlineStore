import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {
  myForm: FormGroup;
  formSubmitted(formData:any){
    console.log(formData)
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      message: ''
    });
  }

  onSubmit() {
    // Access the form data using this.myForm.value
    console.log(this.myForm.value);
  }

}
