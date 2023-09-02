import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(  private router: Router  ){}

  ngOnInit() {}

  login() {
    const validUsername1 = 'juan'; // Nombre de usuario válido
    const validPassword1 = '8'; // Contraseña válida

    if (this.username === validUsername1 && this.password === validPassword1) {
      this.router.navigate(['/home']);
    } 
    else {   
      alert('Credenciales incorrectas intente nuevamente');      
    } 
    }
  }


