import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-training',
  templateUrl: './child-training.component.html',
  styleUrls: ['./child-training.component.scss']
})
export class ChildTrainingComponent implements OnInit {

  //alias
@Input() messagefromParent :any

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
    this.childmessageEvent.emit("Hello From child component");
  }

}
