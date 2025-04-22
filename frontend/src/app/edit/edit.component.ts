import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from '../notice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any = null;
  data: any={};

  constructor(private route: ActivatedRoute, private notice: NoticeService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.notice.getDataID(this.id).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  updateData(){
    this.notice.updateDataId(this.id,this.data).subscribe((data)=>{
      console.log(data);
      this.getData();
    })
  }

}
