import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-training',
  templateUrl: './parent-training.component.html',
  styleUrls: ['./parent-training.component.scss']
})
export class ParentTrainingComponent implements OnInit {

  messagefromParent= 45689663

  displaymessage ='';

  Objectname :any = [{
    //key : value
    Firstname : 'akshay',
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
  
  //To create a object for passing Data from parent component to child component
  //and  display the data in tabular structure in child component.


  constructor() { }

  ngOnInit(): void {
  }

  listenTochild(event:any){
    this.displaymessage = event
  }

}
