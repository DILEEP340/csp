import { Component ,OnInit,OnDestroy} from '@angular/core';


import {
  InsertedSuccess,
  MedicineDetails,
  UniqueConstraintError,
}from  '../farm';
import { from } from 'rxjs';
import { Subscription } from 'rxjs';
import { FarmService  } from '../farm.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent   {

}
