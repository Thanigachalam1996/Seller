import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class AppService{
    url="http://localhost:4200/seller"
    //rooturl="http://localhost:4200/"

    constructor(private http:HttpClient){ }

    getList(){
        return this.http.get(this.url);
    }
    saveSeller(data:any){
        return this.http.post(this.url,data);
    }
    deleteSeller(id:any){
        return this.http.delete(`${this.url}/${id}`)
    }
    updateSeller(id:any,data:any){
        return this.http.put(`${this.url}/${id}`,data);
    }
    getCurrentSeller(id:any){
        return this.http.get(`${this.url}/${id}`);
    }

}