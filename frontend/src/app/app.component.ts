import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NoticeService } from './notice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isAdmin:boolean=false
  isLoggedIn: boolean = false;
  constructor(private cookie:CookieService,private router:Router){
  }
  ngOnInit(){
    this.checkRole()
    this.login()
  }

  login(){
    this.isLoggedIn = this.cookie.get("isLogin").includes("true")
    return this.isLoggedIn
  }
  checkRole(){
    this.isAdmin = this.cookie.get("role").includes("Admin")
  }

  logout() {
    this.cookie.delete("isLogin");
    this.cookie.delete("username");
    this.cookie.delete("role");
    this.router.navigate(["/login"])
    
  }
  
}
