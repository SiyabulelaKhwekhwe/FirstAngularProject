import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }
  username="";
  password="";
  message:any;

  ngOnInit(): void {
  }

  public login(){
    
    //validation
    if(this.username == "" || this.password == ""  ){
      this.message= "fill in all fields";
    }else{
      let resp=this.service.getSpecificUser(this.username).subscribe((data:any[])=>{

        if(data.length)
        {

            if(this.password == data[0].password)
            {
              //this.message="Login successful!!!";
              this.router.navigate(['home']);

            }else{
              this.message="Incorrect Password";
            }

        }else{

          this.message="Incorrect Username";
          
        }
      });
    }
  }
   

}
