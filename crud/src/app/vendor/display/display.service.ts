import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface VendorElement {
  id : number;
  vendorName: string;
  type: string;
  contactEmail: string;
  websiteURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get<VendorElement>("http://localhost:3000/");
  }

  postDelete(id : number){
    return this.http.post('http://localhost:3000/delete',{id: id});
  }
}
