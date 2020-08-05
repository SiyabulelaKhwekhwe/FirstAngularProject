import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { ProductsService } from '../../products.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
  constructor(private service: UserService) {

  }

users: any;

  ngOnInit() {
    this.users = this.service.getusers().subscribe(data=>this.users=data);
    // http://localhost:8080/users
    //this.resp = this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
