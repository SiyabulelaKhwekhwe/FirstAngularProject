import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private service:UserService) { }
  user: User= new User(0,"","","","","");
  message:any;
  a:any;
  ngOnInit(): void {
  }


  public registerNow(){
    //validation
    if(this.user.userID == null|| this.user.name == null || this.user.surname  ==null || this.user.username  ==null || this.user.password  ==null || this.user.phoneNumber ==null ){
      
      this.message="Fill in all required fields!" ;
      
    }else{

      let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    }
    
    
    
  }

}
