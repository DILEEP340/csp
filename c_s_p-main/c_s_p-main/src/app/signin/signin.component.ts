import { Component ,OnInit,OnDestroy} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';




import {
  InsertedSuccess,
  signup,
  UniqueConstraintError,
  Read,
  signin} from '../farm';
import { Subscription } from 'rxjs';
import { FarmService  } from '../farm.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
pasw:string='';
k:string='';
name='';
  
  public dat=[];

  constructor(private Service:FarmService,private router:Router){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: signup = {
    first_name:'',
    last_name:'',
     ph_num:0,
     email:'',
     password :'',
     c_password :'',
     location:''
   };
   SuccessMsg = '';
   ErrorMsg = '';



   User1:signin={
    email:'',
    password :''


   }

   Read(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read1(this.User.email).subscribe(
      (data : any)=>{
        if(data){
          this.dat=data.Result[0];
          console.log(data);
          this.User={
            first_name:this.dat[0],
            last_name:this.dat[1],
            ph_num:this.dat[2],
            email:this.dat[3],
            password:this.dat[4],
            c_password:this.dat[5],
            location:this.dat[6]

          }



        }
       else{
         console.log("failed");
        }
      }
  )
  }

username:string='';
password:string='';


  Read1(){
    this.username=this.User1.email;
    this.password=this.User1.password;
    this.Subscription=this.Service.view2(this.User1.email).subscribe(
      (data:any)=>{
        if(data){
          this.dat=data.Result[0];
          this.User1={
            email:this.dat[0],
            password:this.dat[1]
          }
          if(this.username==this.User1.email && this.password==this.User1.password )
          {
             this.router.navigate(['/home']);
             alert(this.username+'   login successfully' )
            this.name=this.username;
          }
          else{
            alert('failed');
          }
      }
        else{
         alert("Can't read");
        }
      }
    )
  }
login(){
  localStorage.setItem('name',this.name)
}

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }



  }
