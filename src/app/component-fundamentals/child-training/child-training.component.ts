import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-training',
  templateUrl: './child-training.component.html',
  styleUrls: ['./child-training.component.scss']
})
export class ChildTrainingComponent implements OnInit {

  //alias
@Input() childlisten :any

@Input()studentDetails:any

@Output() childmessageEvent = new EventEmitter<any>();

color=''

messagestyle={
  'background-color': 'aqua',
  'font-size': 'large'
}

day = 'friday'

myStyle ={}


userInfo={}

  constructor() { }

  ngOnInit(): void {

    console.log("i got the messge from parent ",this.childlisten)

    this.myStyle={
      'background-color' : (this.day == 'friday') ? 'yellow' : 'blue'
    }

    // if(this.day == 'friday'){
    //   this.myStyle = {
    //     'background-color' : 'yellow'
    //   }
    // }else{
    //   this.myStyle = {
    //     'background-color' : 'blue'
    //   }
    // }


  }

  passDataToParent(){
  let   Objectname :any = [{
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
    
    
    this.childmessageEvent.emit(Objectname);
  }

}
