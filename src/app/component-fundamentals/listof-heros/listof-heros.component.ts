import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject, take } from 'rxjs';
import { AssetDataService } from 'src/app/Services/asset-data.service';

@Component({
  selector: 'app-listof-heros',
  templateUrl: './listof-heros.component.html',
  styleUrls: ['./listof-heros.component.scss']
})
export class ListofHerosComponent implements OnInit {

  heroDetails = [{
    //key : value
    Firstname: 'akshay',
    lastname: 'kumar',
    address: 'pune',
    mobilenumber: 489658
  },
  {

    Firstname: 'salman',
    lastname: 'khan',
    address: 'Mumbai',
    mobilenumber: 489688899
  },
  {
    //key : value
    Firstname: 'shahid',
    lastname: 'kapoor',
    address: 'pune',
    mobilenumber: 489688899
  }]

  subject$ = new Subject();
  studentName: any

  myData = this.assetDataService.serviceData;

  constructor(private route: Router, private abc: ActivatedRoute,
    private assetDataService: AssetDataService) { }


  ngOnInit(): void {

   
    this.assetDataService.setData("Hello")

    console.log("Name check", this.studentName)

    this.assetDataService.servicesubject$.subscribe((value: any) => {
      console.log("observable value" + value.Name)
      this.studentName = value?.Name
    })

    // this.route.navigateByUrl('/path',{state:{}})

    //   this.subject$.subscribe((value:any) =>{
    //     console.log("value = " ,value)
    //   })

    //   this.assetDataService.servicesubject$.next("value from")
    // this.assetDataService.servicesubject$.next("Hello from list ofHeros")

    //     this.subject$.next("hello")
    //     this.subject$.next("developers")
    //     this.subject$.complete();





  }

  showDetails(heroDetails: any) {
    if (heroDetails.address == 'Mumbai') {
      // this.route.navigateByUrl('/listofMovies',{state:heroDetails}) // '/user/details' fragment - pathA , pathB

      this.route.navigate(['/', 'listofMovies'], { state: heroDetails }) //this.route(['/','user','/','details'],{state:Data})
    }
    else {
      console.log("location not accessible")
      this.route.navigateByUrl('/path')
    }

    //this.route.navigateByUrl('/listofMovies',{state:hero})
  }



}
