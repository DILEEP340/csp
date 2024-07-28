import { Component,OnInit,OnDestroy} from '@angular/core';


 import {
   InsertedSuccess,
   MedicineDetails,
   UniqueConstraintError,
   Read} from '../farm';
 import { Subscription } from 'rxjs';
 import { FarmService  } from '../farm.service';
 import { NgForm } from '@angular/forms';


 @Component({
  selector: 'app-paddy',
  templateUrl: './paddy.component.html',
   styleUrls: ['./paddy.component.css']
 })
export class PaddyComponent  {
  
  public dat=[];

  constructor(private Service:FarmService){}
  show:string='red'
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: MedicineDetails = {
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
     
     this.Subscription = this.Service.Insert(this.User).subscribe({
       next: (Data: InsertedSuccess | UniqueConstraintError) => {
         if ('errorNum' in Data) {
           this.ErrorMsg = `${this.User.pest_name} alredy Exists`;
         } else {
          this.show='red'
         this. SuccessMsg=this.User.pest_name+' uploaded successfully';       }
    
        },
       error: (Error:any) => {
         console.log(Error);

       },
  });
  }

  Delete(){
   
     this.Subscription=this.Service.Delete(this.User.pest_name).subscribe(
      (data)=>{
         if(data){
           console.log(data);
           this.show='red'
          this. SuccessMsg= this.User.pest_name+'Deleted  successfully';     

          
        }
        else{
          this.show='red'

          this.ErrorMsg ="Deletion failed";
        }
      }
    )
  }
  
   Read(){
     this.ErrorMsg='';
     this.SuccessMsg='';
     this.Subscription=this.Service.Read(this.User.pest_name).subscribe(
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
     this.ErrorMsg='';
     this.SuccessMsg='';
     this.Subscription=this.Service.Update(this.User.pest_name,this.User).subscribe(
       (data:any)=>{
         if(data){
          this.show='red'
           this.SuccessMsg="updated successfully";
          

         }
         else{
          this.show='red'

          this.ErrorMsg="can't update";
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
