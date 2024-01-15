import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ApiFetchService } from '../../Services/ConfigService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  httpService = inject(ApiFetchService)

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });

  handleSubmit(){
    const user = {
      name: this.loginForm.value.user,
      password: this.loginForm.value.password
    }

    this.httpService.login(user);
  }
}
