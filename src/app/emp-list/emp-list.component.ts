import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  emps=[]
  httpClient : HttpClient
  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient
   }

  ngOnInit(): void {
  }

  loadEmps(){
    const url = "http://localhost:4400/emp"
    const request = this.httpClient.get(url)
    request.subscribe(response=> {
      if(response["status"]=="success") {
        this.emps = response["data"]
      }
    })
  }
}
