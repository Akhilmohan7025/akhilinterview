import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any={
    100:{acno:100,uname:"akhil",password:100,balance:5000},
    101:{acno:101,uname:"jeevan",password:101,balance:3000},
    102:{acno:102,uname:"richu",password:102,balance:4000}
  }

  constructor() { }

  // register
 register(acno:any,password:any,uname:any){
   let database=this.database
   if(acno in database){
    //  already existing
    return false
   }
   else{
     database[acno]={
       acno,
       uname,
       password,
       balance:0
      }
    return true
   }
 }
// login
login(acno:any,pwd:any){
 
  let database=this.database

  if( acno in database){
   //  acno matched
   if(pwd ==database[acno]["password"]){
     // pass match
    return true
   
   }
   else{
     alert("incorrect password")
     return false
   }

  }
  else{
    alert("does not exit")
    return false
  }
}

}
