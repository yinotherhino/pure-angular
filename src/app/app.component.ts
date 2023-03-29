import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup= new FormGroup({});
  title = 'pure-angular';
  link:string | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    this.link = form.value.link;
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
