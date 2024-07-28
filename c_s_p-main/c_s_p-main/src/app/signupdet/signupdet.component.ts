import { Component ,OnInit,OnDestroy} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';




import {
  InsertedSuccess,
  signup,
  UniqueConstraintError,
  Read} from '../farm';
import { Subscription } from 'rxjs';
import { FarmService  } from '../farm.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signupdet',
  templateUrl: './signupdet.component.html',
  styleUrls: ['./signupdet.component.css']
})
export class SignupdetComponent  {

  public dat=[];

  constructor(private Service:FarmService){}
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
          alert('Does Not Exist');
         }
       }
   )
   }

   Delete(){
    this.ErrorMsg='';
    this.SuccessMsg='';
      this.Subscription=this.Service.Delete1(this.User.email).subscribe(
       (data)=>{
          if(data){
            console.log(data);
            alert(this.User.first_name+'Deleted successfully');           
 
         }
         else{
           alert("failed");
         }
       }
     )
   }


   update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update1(this.User.email,this.User).subscribe(
      (data:any)=>{
        if(data){
          this.SuccessMsg="updated successfully";
          alert(this.User.first_name+' Updated successfully');           


        }
        else{
          console.log("can't update");
          alert('Validate Your Credentials')
        }
      }
    )
    console.log(this.User);
 }
  
   ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  
  
  
  }