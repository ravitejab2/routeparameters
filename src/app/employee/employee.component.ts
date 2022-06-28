import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeName:string='';
  observerName:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeName= this.route.snapshot.params['empName'];

    this.route.paramMap.subscribe(params=>{
      this.observerName= params.get('empName');
    });
  }

}
