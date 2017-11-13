import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { 

  constructor(private router: Router ) {

  }

  login(email, password): void {
    if(email && password){
      localStorage.setItem('email',email);
      this.router.navigateByUrl('/home');
    }else{
      alert("Ingresa los datos");
    }
  
  }
}
