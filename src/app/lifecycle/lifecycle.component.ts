import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
 
  firstname :string | undefined
  enablebutton :boolean |undefined = false
  studenDetails : any[] =[];

  
  constructor() { }



  ngOnInit() {
    this.firstname = 'James bond'
    this.enablebutton = false
    this.studenDetails = [{
      //key : value
      Firstname : 'Rahul',
      lastname : 'kumar',
      address : 'pune',
      mobilenumber : 489658
    },
    {
      //key : value
      Firstname : 'Amol',
      lastname : 'bharate',
      address : 'pune',
      mobilenumber : 489688899
    },
    {
      //key : value
      Firstname : 'sujit',
      lastname : 'taktode',
      address : 'pune',
      mobilenumber : 489688899
    }]




    console.log("Hello From onInit")
  }

 

}
