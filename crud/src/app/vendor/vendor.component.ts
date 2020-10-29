import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  loc : string;
  constructor(private router: Router, private route : ActivatedRoute) {

  this.loc = this.router.url;

  if(this.loc.search(/vendor-edit/g) == 1){
    this.loc = '/vendor-edit';
  }



  }

  ngOnInit(): void {
  }

}
