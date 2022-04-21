import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="your prefect banking partner"
accnum="username"
acno=""
pwd=""




 


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // acNochnage(event:any){
  //   this.acno =event.target.value

  // }
  // pwdchnage(event:any){
  //   this.pwd=event.target.value
  // }


  login(){
    var acno=this.acno
    console.log(this.acno);
    var pwd=this.pwd
    console.log(this.pwd);
    const result=this.ds.login(acno,pwd)
    if(result){
      alert("login successful")
      this.router.navigateByUrl("dashboard")
    }
    
  }


 
}




// template referencing variables
// login(a:any,p:any){
//   console.log(a);
  
//   var acno=a.value
//   console.log(acno);
//   var pwd=p.value
//   console.log(pwd);
//   let database=this.database

//   if( acno in database){
//    //  acno matched
//    if(pwd ==database[acno]["password"]){
//      // pass match
//      alert("login success")}
//    else{
//      alert("incorrect password")
//    }

//   }
//   else{
//     alert("does not exit")
//   }
// }
// }
