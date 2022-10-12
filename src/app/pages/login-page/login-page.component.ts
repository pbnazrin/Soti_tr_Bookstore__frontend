import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //to diplaymessages on screen  :-
  loginResponse = '';
  loginClass = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private auth: AuthService
  ) {}

  loginForm = this.fb.group({
    //email:['abc'],
    //password:['123']
    //validation is applied from controlling class
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });
  //validation is applied from controlling class.But to display error messages go back to html and get elements

  get email() {
    return this.loginForm.get('email');
    //returns reference of the element
  }

  get password() {
    return this.loginForm.get('password');
    //returns reference of the element
  }
  res: any;
  ngOnInit(): void {}

  userModel = new User();
  result: any;

  onSubmitHandler() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((response) => {
      console.log('login', response);
      if (response.UserId != 0 && response.Name != 'admin') {
        // console.log(response);
        // if the password is correct,it will generate token
        this.loginResponse = 'login successfully,thank you';
        this.loginClass = 'alert-success';
        // //store the data in a local storage once the login is successful
        // localStorage.setItem('token', response.token);
        //As we cannot store object in local storage, we need to convert user data object into string
        localStorage.setItem('user', JSON.stringify(response));
        localStorage.setItem('userName', JSON.stringify(response.Name));
        localStorage.setItem('UserId', JSON.stringify(response.UserId));
        this.router.navigateByUrl('home');
      } else if (response.UserId != 0 && response.Name == 'admin') {
        this.loginResponse = 'Admin logged in successfully';
        this.loginClass = 'alert-success';
        localStorage.setItem('admin', JSON.stringify(response));
        localStorage.setItem('adminId', JSON.stringify(response.UserId));
        this.router.navigateByUrl('adminHome');
      } else {
        // console.log(error);
        this.loginResponse = 'login failed,try again';
        this.loginClass = 'alert-danger';
      }
    });
  }
}

//loginForm represents entire form group and formGroup has entire formData
//to display error message on screen,we need 2 prperties loginResponse and loginClass
