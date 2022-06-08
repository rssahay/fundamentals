import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('item') item ='';

  @Output() childevent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addnewItem(value :string){
    this.childevent.emit(value)
  }

}
