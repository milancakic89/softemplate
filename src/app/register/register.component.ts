import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public username: string;
  public password: string;
  public repeatPassword: string;
  public agreeTerms = false;

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm){
    console.log(form.value);
  }


}
