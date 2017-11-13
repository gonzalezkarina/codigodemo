import { Component, OnInit } from '@angular/core';
import {Http,Headers} from '@angular/http';

@Component({
  selector: 'home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})

export class Home2Componect implements OnInit {
  isLoggedIn: boolean = false;  
  public Email=localStorage.getItem('email');
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http:Http) {

  }
 
// metodo automatico 
ngOnInit(): void {
 
}

// valida datos vacios
valida(email,password,msg)
{
  if(email && password && msg){
    alert('email'+email+'password'+password+'mensaje'+msg); 
    const data=[{email,password,msg}];
    console.log(data);
    this.guarda(data);
  }else{
   alert('Datos vacios');
  }
}

//conecta al servidor  
guarda(user)
{
  let url: string = `http://localhost:8000/auth/login`;
  this.http.post(url, user, {headers: this.headers}).toPromise();
}
}
