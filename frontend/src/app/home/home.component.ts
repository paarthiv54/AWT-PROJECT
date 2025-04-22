import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoticeService } from '../notice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'frontend';
  noticeData:any
  constructor(private noticesService:NoticeService,private cookie:CookieService){

  }
  ngOnInit(){
    this.fetchData()
  }
  fetchData(){
    if(this.cookie.get("isLogin").includes("true")){
    this.noticesService.getData()
    .subscribe((data)=>{
      this.noticeData=data;
    })
    }
  }
}
