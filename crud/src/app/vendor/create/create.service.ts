import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http : HttpClient) { }

  postCreate(form : NgForm){
   return this.http.post('http://localhost:3000/create',form.value);

  }

}
