import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.scss']
})
export class ReactiveFormsExampleComponent implements OnInit {

  courseDetails = [
    {
      course: 'Bachelors of ENgineering',
      Collage: 'MIT',
      University: 'PU',
      Duration: '4',
      Name: 'Akshay',
      Location: 'Pune'
    },
    {
      course: 'Masters of computer',
      Collage: 'CPIT',
      University: 'PU',
      Duration: '3',
      Name: 'Akshay',
      Location: 'solapur'
    },
    {
      course: 'Bachelors of pharma',
      Collage: 'MIT',
      University: 'PU',
      Duration: '4',
      Name: 'Neha',
      Location: 'kolhapur'
    },
    {
      course: 'Bachelors of Computers',
      Collage: 'BVP',
      University: 'PU',
      Duration: '3',
      Name: 'Rahul',
      Location: 'Mahabalehwar'
    }
  ]

  constructor() { }

  username = new FormControl('')

  educationDetails = new FormGroup({
    course: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Collage: new FormControl(''),
    University: new FormControl(''),
    Duration: new FormControl('', [Validators.maxLength(1), Validators.required])
  })

  personaledetails = new FormGroup({
    Name: new FormControl(''),
    Location: new FormControl('')
  })

  ngOnInit(): void {
    //  this.updateEductionDetails()
  }

  SubmitForm() {
    console.log(this.username.value)
  }

  updateForm() {
    this.username.setValue('James')
  }

  submitEductionDetails() {
    console.log(this.educationDetails)
    let temp_object = {
      course: this.educationDetails.value.course,
      Collage: this.educationDetails.value.Collage,
      University:this.educationDetails.value.University, 
      Duration: this.educationDetails.value.Duration,
      Name: this.personaledetails.value.Name,
      Location: this.personaledetails.value.Location,
    }

    this.courseDetails.push(temp_object)
    console.log("update records details", this.courseDetails)
  }

  updateEductionDetails(rowdetails: any) {
    console.log("rowdetails ", rowdetails)

    this.educationDetails.patchValue({
      course: rowdetails.course,
      Collage: rowdetails.Collage,
      University: rowdetails.University,
      Duration: rowdetails.Duration
    });

    this.personaledetails.patchValue({
      Name: rowdetails.Name,
      Location: rowdetails.Location
    })


  }

}
