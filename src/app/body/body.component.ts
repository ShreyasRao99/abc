import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private services:GetApiService) { }

  list:any=[];

  ngOnInit(): void {
    this.services.getAPI().subscribe((res)=>{
      this.list=res;
      console.log(this.list.products);
      console.log(this.list.products.images)
    })
  }
  

}
