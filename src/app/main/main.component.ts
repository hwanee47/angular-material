import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit() {
  }

  private url="http://localhost:8090/cors/";

  private dataArray = [];

  constructor(public http:HttpClient){}

  Http(){
    this.http.get(this.url).subscribe((result : any[])=>{
      this.dataArray = result;
      console.log(this.dataArray);
    });
  }

  columnDefs = [
    {headerName: 'id', field: 'idx', width: 80},
    {headerName: 'title', field: 'title'},
    {headerName: '생성시간', field: 'create_date'}
  ];
}
