import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoticeService } from '../notice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  data:any={};

  constructor(private notice:NoticeService,private route:Router){

  }
  
  addData(){
    this.notice.addData(this.data).subscribe((data)=>
      console.log(data)
    )
    this.route.navigate([""])
    console.log(this.data)
  }

}
