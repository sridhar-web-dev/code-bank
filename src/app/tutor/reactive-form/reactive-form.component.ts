import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  title = 'reactive-form';
  myform!: FormGroup;
  options: string[] = ['Service 1', 'Service 2', 'Service 3'];
  radioOptions: string[] = ['Male', 'Female'];
  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(15)]),
      radioGroup: new FormControl('', Validators.required),
      services: new FormControl('', Validators.required),
      agreeTerms: new FormControl(false, Validators.requiredTrue),
      dateOfBirth: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required, Validators.pattern('^(https?|ftp)://(?:www\\.)?[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+/?$')])
    });
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log(this.myform.value);
    }
  }
}
