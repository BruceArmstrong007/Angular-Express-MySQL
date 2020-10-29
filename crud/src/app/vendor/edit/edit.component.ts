import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';

import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: number;
type : string;
vendorName : string;
vid : number;
contactEmail : string;
websiteURL: string;
category : string[] = ['Payment','Insurance','Character Development','Transportation'];
  constructor(private edit : EditService,private router : Router,private route : ActivatedRoute) {

   }

  ngOnInit(): void {

this.id = parseInt(this.route.snapshot.paramMap.get('id'),10);
console.log(this.id);
   this.edit.getData(this.id).subscribe(data => {
    this.vid = data[0].id;
    this.vendorName = data[0].vendorName;
    this.type = data[0].type;
    this.contactEmail =  data[0].contactEmail;
    this.websiteURL = data[0].websiteURL;
    console.log(this.type);
   });
  }

  postData(form : NgForm){
    if(form.value.contactEmail == ""){
      form.value.contactEmail = this.contactEmail;
    }
    if(form.value.id == ""){
      form.value.id = this.vid;
    }
    if(form.value.type == ""){
      form.value.type = this.type;
    }
    if(form.value.vendorName == ""){
      form.value.vendorName = this.vendorName;
    }
    if(form.value.websiteURL == ""){
      form.value.websiteURL = this.websiteURL;
    }
    console.log("form Value",form.value);
    this.edit.postEdit(form).subscribe(data => {
        this.router.navigate(['/']);
      });  }

}
