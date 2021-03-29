import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
 
  public username: string;
  public password: string;
  public agreeTerms = false;


  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm){
    if(form.valid){
      this.router.navigate(['/main']);
    }
  }
}
