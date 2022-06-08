import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  // name = new FormControl('');
  name = ''
  password = ''
  username = ''
  ngOnInit(): void {
  }


  onSubmit(login: NgModel) {

    console.log("FOrm details", login)



  }


  //NgModel - 

  // NgForm - <form ng> 

  //#Template Refrence variable


}
