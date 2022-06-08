import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  itemdetails = 'Hello i am sendinf message from parent component'
todayDate = Date.now()

  birthday = new Date(2000,12,27);

  totalcost = 4563;
 
  parentmessage :any
  constructor() { }

  ngOnInit(): void {
  }

  listentochild(event:any){
    console.log("message",event)
    this.parentmessage = event;

  }

}
