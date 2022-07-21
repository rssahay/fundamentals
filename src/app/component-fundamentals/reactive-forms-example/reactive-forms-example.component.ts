import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssetDataService } from 'src/app/Services/asset-data.service';

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
      Location: 'Mahabalehwar',
      id :4
    }
  ]

  buttoncolor = 'red'
  buttonpadding = ' '
  constructor(private assetDataservice :AssetDataService) { }

  username = new FormControl('R@gmail');
  location = new FormControl('');

  educationDetails = new FormGroup({
    course: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Collage: new FormControl(''),
    University: new FormControl('',Validators.required),
    Duration: new FormControl('', [Validators.maxLength(1), Validators.required])
  })

  personaledetails = new FormGroup({
    Name: new FormControl(''),
    Location: new FormControl('')
  })

  userDetails = new FormGroup({
    name: new FormControl(''),
    userName : new FormControl(''),
    password :new FormControl('')
  })


  ngOnInit(): void {
    //  this.updateEductionDetails()]

    console.log("USer role is = ",localStorage.getItem("Role"))
  }

  SubmitUserDetails(){
    let body={
      "name" : this.userDetails.get('name')?.value,
      "userName" : this.userDetails.get('userName')?.value,
      "password" : this.userDetails.get('password')?.value
    }
    this.assetDataservice.saveData(body).subscribe((res:any)=>{
      console.log("data saved succesfully");
    })
  }

  SubmitForm() {
    console.log(this.username.value)
  }

  updateForm() {
    this.username.setValue('James')
    this.location.setValue('Pune');
    console.log(this)
  
  }

CollageDetailsSubmit(){
  this.educationDetails.patchValue({
    //formcontrolname : value
    Collage : 'PSIT',
    course : 'BE'
  })
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

    console.log(temp_object)
    this.courseDetails.push(temp_object)
    console.log("update records details", this.courseDetails)
  }

  updateEductionDetails(rowdetails: any) {
    console.log("rowdetails ", rowdetails)
    this.assetDataservice.sendDatatocomponent(rowdetails)

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


  deleteRecord(id :any){

    //this.courseDetails.

  }

}
