import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private router: Router ) {}
  onRegister(): void {
  
      localStorage.setItem('email', 'true');
      this.router.navigateByUrl('/home');
    
  }
}
