import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { interval, from, map, Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { AssetDataService } from 'src/app/Services/asset-data.service';



@Component({
  selector: 'app-listof-movies',
  templateUrl: './listof-movies.component.html',
  styleUrls: ['./listof-movies.component.scss']
})
export class ListofMoviesComponent implements OnInit {

  sequenceOfnumbers = [5, 10, 15, 20, 25]

  tableNumbers = [1,2,3,4,5,6,7,8,9,10]
  observablesTableNUmber = from(this.tableNumbers)

  observablesnumber = from(this.sequenceOfnumbers)

  secondsCounter = interval(3000)

  geoLoactions : any [] = []
  geoLocationLinks :any

  isshowTable:boolean = false
  
  
  // observable$ = new Observable<number>(subscriber => {
  //   subscriber.next(Math.floor(Math.random() * 200) + 1);  
   
  // });

   digit =6
   //subject = new BehaviorSubject(0); 

 // subject = new ReplaySubject(2)

  subject = new AsyncSubject();
  data:any;

   constructor(private route: Router,  private xyz: AssetDataService,
    private activateroute: ActivatedRoute, private location: Location) { }


 ngOnInit(): void {

  this.data = this.xyz.getData()

  this.subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`),
    });
     
    this.subject.next(1);
    this.subject.next(2);
   //this.subject.complete();
     this.subject.next(3);
     this.subject.next(4);
     
    this.subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
    error: (v) => console.log(v)
    });
     
     this.subject.next(5);
     this.subject.error("error occured  in passing values");
    





  // this.subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`),
  // });

  //  this.subject.next(1);
  // this.subject.next(2);
  // this.subject.next(3);
  // this.subject.next(4);

  //  this.subject.subscribe({
  //   next: (v) => console.log(`observerB: ${v}`),
  // });
  //  this.subject.next(5);
  




    // this.subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });
    // this.subject.next(1);
    // this.subject.next(2);

    // this.subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`),
    // });

    //  this.subject.next(3);
    

    // this.observable$.subscribe(val => { console.log("Obs1 :" + val);  }); //423

    // this.observable$.subscribe(val => { console.log("Obs2 :" + val); });  //213
    // this.observable$.subscribe(val => { console.log("Obs3 :" + val); });

    // this.subject$.subscribe(val => { console.log("Sub1 " + val);  }); //47
    //  this.subject$.subscribe(val => {console.log("Sub2 " + val);});  //47
    // this.subject$.next(Math.floor(Math.random() * 200) + 1);
    
    

    // this.xyz.servicesubject$.subscribe((value:any) =>{console.log(value)})
    // this.xyz.servicesubject$.subscribe((value:any) =>{console.log(value)})



 

   // this.observablesTableNUmber.pipe(map(x => x*2)).subscribe((value: any) => console.log( value))

   // console.log("observable ", this.observablesnumber)


   // this.observablesnumber.subscribe(value => console.log(value))

    // this.secondsCounter.subscribe( x => {
    //   console.log(`message displayed after ${x+3} seconds`)
    // })


     //console.log(history.state)
    console.log(this.location.getState())

    // this.xyz.saveData().subscribe(res => {
    //   console.log("saved data",res)
    // })



}


  getlocationData(){

    this.xyz.getConfigData().subscribe((res:any) => {
      this.geoLoactions = res?.data;
      this.isshowTable = this.geoLoactions ? true : false
      this.geoLocationLinks = res?.links;
    
   
     console.log(this.geoLoactions)
    },(error)=>{
      console.log("Error object ",error)
      console.log("Error occured",error.message)
    })

  }

 

}
