import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NoticeService } from '../notice.service';
import { ActivatedRoute } from '@angular/router';
import { get } from 'http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-notice-details',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './notice-details.component.html',
  styleUrls: ['./notice-details.component.css']
})
export class NoticeDetailsComponent {
data:any={}
vals:any
id: string | null = null;
// isDisable=false
constructor(private route: ActivatedRoute,private noticeService:NoticeService,private router:Router,private cookie:CookieService,private check:AppComponent) {
  this.id = this.route.snapshot.paramMap.get('id');
}
isDisable(){
  this.vals= this.cookie.get('role') !== 'Admin';
  // console.log(this.vals);
  return this.vals;
}

ngOnInit(){
  this.fetch()
}

fetch(){
    this.noticeService.getDataID(this.id).subscribe((data)=>{
      this.data=data
      console.log(this.data);
    })
}

login(){
  return this.check.isLoggedIn;
}

delete(id:any){
  console.log(id)
  this.noticeService.deleteDataID(id).subscribe((data)=>{
    console.log(data)
    this.router.navigate([""])
  })
}


}
