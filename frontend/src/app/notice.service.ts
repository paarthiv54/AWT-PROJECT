import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private https :HttpClient) { }
  getData(){
    return this.https.get("http://localhost:2000/notices",{withCredentials:true})
  }
  getDataID(id:any){
    return this.https.get(`http://localhost:2000/notices/${id}`,{withCredentials:true})
  }
  deleteDataID(id:any){
    return this.https.delete(`http://localhost:2000/notices/${id}`,{withCredentials:true})
  }

  updateDataId(id:any,data:any){
    return this.https.put(`http://localhost:2000/notices/${id}`,data,{withCredentials:true})
  }

  addData(data:any){
    return this.https.post("http://localhost:2000/notices",data,{withCredentials:true})
  }
}
