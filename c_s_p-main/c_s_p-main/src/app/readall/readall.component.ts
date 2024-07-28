import { Component ,OnInit ,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  MedicineDetails,
  UniqueConstraintError,
  Read, 
  } from '../farm';
import { Subscription } from 'rxjs';
import { FarmService } from '../farm.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-readall',
  templateUrl: './readall.component.html',
  styleUrls: ['./readall.component.css']
})
export class ReadallComponent implements OnInit , OnDestroy {
  res:any=[];
  dat=[]
  show:boolean=false;
  canshow:boolean=false;
  tablepop:boolean=false;
  mainpop:boolean=true;
  

  constructor(private Service:FarmService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: MedicineDetails = {
    
pest_name:'',
pesticide:'',
how_to_use:'',
quantity:'',
precautions:'',
when_will_use:''


  };
  SuccessMsg = '';
  ErrorMsg = '';
  sample=this.User;
  ph_num:number=0;

  read(){
    this.tablepop=true
    this.mainpop=false
    this.Service.read().subscribe(
      {
        next:(Data)=>{
          console.log(Data);
          this.res=Data.Result;
        },
        error:(Err)=>{
          console.log(Err);
        }
      }
    )
  }

  Delete3(ph_num:string){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete1(ph_num).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          document.write('Successfully deleted');

        }
        else{
          console.log("failed");
        }
      }
    )
  }

  read3(S_NO:number){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.show=true;
    this.canshow=true;
    this.Subscription=this.Service.read3(this.ph_num).subscribe(
      (data : any)=>{
        if(data){
          this.dat=data.Result[0];
          console.log(data);
          this.sample={
          pest_name:this.dat[0],
          pesticide:this.dat[1],
          how_to_use:this.dat[2],
          quantity:this.dat[3],
          precautions:this.dat[4],
          when_will_use:this.dat[5]



          }
          

        }
        else{
          console.log("failed");
        }
      }
    )
  }

  update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.sample.pest_name,this.sample).subscribe(
      (data:any)=>{
        if(data){
          this.SuccessMsg="updated successfully";
          document.write("updated successfully");

        }
        else{
          console.log("can't update");
        }
      }
    )
    console.log(this.User);
  }


  
  closepopup(){
    this.show=false;
   }



  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}