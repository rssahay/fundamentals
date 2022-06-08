import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  
studentDetails = [{
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
  constructor() { }

  ngOnInit(): void {
  }

}
