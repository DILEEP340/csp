import { Component,OnInit,OnDestroy} from '@angular/core';


 import {
   InsertedSuccess,
   maizedetails,
   UniqueConstraintError,
   Read} from '../farm';
 import { Subscription } from 'rxjs';
 import { FarmService  } from '../farm.service';
 import { NgForm } from '@angular/forms';


 @Component({
  selector: 'app-maize',
  templateUrl: './maize.component.html',
   styleUrls: ['./maize.component.css']
 })
export class MaizeComponent  {

  show:string='red'

  public dat=[];

  constructor(private Service:FarmService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: maizedetails = {
    pest_name:'',
    pesticide:'',
     how_to_use:'',
     quantity:'',
     precautions :'',
     when_will_use :''
   };
   SuccessMsg = '';
   ErrorMsg = '';
   Insert() {
    
     this.Subscription = this.Service.Insert2(this.User).subscribe({
       next: (Data: InsertedSuccess | UniqueConstraintError) => {
         if ('errorNum' in Data) {
          this.show='red'

           this.ErrorMsg = `${this.User.pest_name} alredy Exists`;
         } else {
          this.show='red'

         this. SuccessMsg=this.User.pest_name+'uploaded successfully';       }
    },
       error: (Error:any) => {
         console.log(Error);
         this.ErrorMsg='failed'
       },
  });
  }

  Delete(){
  
     this.Subscription=this.Service.Delete2(this.User.pest_name).subscribe(
      (data)=>{
         if(data){
           console.log(data);
           this.show='red'

           this.SuccessMsg=this.User.pest_name+'Deleted  successfully';       

          
        }
        else{
          this.show='red'

          this.ErrorMsg="failed";
        }
      }
    )
  }
  
   Read(){
     
     this.Subscription=this.Service.Read2(this.User.pest_name).subscribe(
       (data : any)=>{
         if(data){
           this.dat=data.Result[0];
           console.log(data);
           this.User={
             pest_name:this.dat[0],
             pesticide:this.dat[1],
             how_to_use:this.dat[2],
             quantity:this.dat[3],
             precautions:this.dat[4],
             when_will_use:this.dat[5]
           }
         }
        else{
          this.show='red'

          this.ErrorMsg="failed";
         }
       }
   )
   }

  


   update(){
   
    this.Subscription=this.Service.Update2(this.User.pest_name,this.User).subscribe(
      (data:any)=>{
        if(data){
          this.show='red'

          this.SuccessMsg="updated successfully";
          

        }
        else{
          this.show='red'

         this.ErrorMsg='can not update';
        }
      }
    )
    console.log(this.User);
  }
  ngOnDestroy() {
     this.Subscription.unsubscribe();
   }

   a(){
    this.show='cadetblue'
   }


 }
