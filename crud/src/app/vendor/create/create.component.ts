import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from './create.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private route : Router,private create : CreateService) { }

  ngOnInit(): void {
  }

  postData(form : NgForm){
    console.log("form Value",form.value);
    this.create.postCreate(form).subscribe(data => {
        this.route.navigate(['/']);
      });
}

}
