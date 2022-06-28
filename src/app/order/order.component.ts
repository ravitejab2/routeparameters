import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  id:number=-1;
  observerId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Snapshot way
    this.id= this.route.snapshot.params['id'];

    //Observer way
     this.route.paramMap.subscribe(params=>{
      this.observerId= params.get('id');
    });

  }

}
