import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reister',
  templateUrl: './reister.component.html',
  styleUrls: ['./reister.component.css']
})
export class ReisterComponent implements OnInit {
  usname=""
  acno=""
  pwd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
   var acno=this.acno
   var pwd=this.pwd
   var uname=this.usname
  //--call-register in Dataservice
  const result= this.ds.register(acno,pwd,uname)
  if(result){
    alert("succesfull Register")
    this.router.navigateByUrl("")
  }
  else{
    alert("already exiting plz..login")
   
  }
 
}
}
