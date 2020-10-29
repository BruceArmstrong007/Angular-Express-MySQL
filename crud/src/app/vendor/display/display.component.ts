import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayedColumns: string[] = ['id','vendorName', 'type', 'contactEmail', 'websiteURL','edit','delete'];
  ELEMENT_DATA;
  dataSource;
  constructor(private display : DisplayService,private route : Router) { }

  ngOnInit(): void {
    this.display.getData().subscribe(data => {
      this.ELEMENT_DATA = data;
      console.log(data);
     this.dataSource = this.ELEMENT_DATA;
     });

  }

  postDelete(id : number){
    this.display.postDelete(id).subscribe(data => {
      window.location.reload();
    });
  }

}
