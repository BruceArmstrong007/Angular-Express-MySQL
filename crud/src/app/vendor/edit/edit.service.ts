import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http : HttpClient) { }

getData(id : number){
  return this.http.post('http://localhost:3000/edit',{id: id});
}

postEdit(form : NgForm){
  return this.http.post('http://localhost:3000/update',form.value);

 }

}
