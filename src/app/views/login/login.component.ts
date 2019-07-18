import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: ['login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  username: string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username && this.username.toLowerCase() === 'admin' && this.password === 'admin') {
      this._router.navigate(['home']);
    }else{
      alert('Usuário ou senha inválido')
    }
  }

}
