import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pestguide';
  id:string='';
  showHeader=true;

constructor(private router:Router){
router.events.subscribe(

  (val)=>{

if(val instanceof NavigationEnd){

  if (val.url=='/'){
    this.showHeader=false
  }
  else if(val.url=='/signin'){
    this.showHeader=false

  }

  else if(val.url=='/signup'){
    this.showHeader=false

  }

  else if(val.url=='/signup/access'){
    this.showHeader=false

  }

  else if(val.url=='/main'){
    this.showHeader=false

  }
  else{
    this.showHeader=true

  }

  

  
  
}

  }
)
 
        

  }
             


               }

 

