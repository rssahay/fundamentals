import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetDataService {
   tokenkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJlNDhlNDA4ZjNiNzFkOTRlNjlmMDgiLCJpYXQiOjE2NTY2Mzc2Njh9.BnukYoBbHv5pUkv8CbF9LOlLOD1sdJU6-WPusc1_qk8";
  headers = new HttpHeaders()
   .set('Content-Type'  ,  'application/json')
   .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJlNDhlNDA4ZjNiNzFkOTRlNjlmMDgiLCJpYXQiOjE2NTY2Mzc2Njh9.BnukYoBbHv5pUkv8CbF9LOlLOD1sdJU6-WPusc1_qk8')
   .set('Access-Control-Allow-Headers','*')
   .set('Access-Control-Allow-Origin', '*')

  servicesubject$ = new BehaviorSubject<any>(1);
  // servicesubject$ = this._servicesubject$.asObservable()

  serviceData: string = "default value unset";
  
   
  constructor(private http : HttpClient ) {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization: `Bearer ${this.tokenkey}` 
    //   })
    // };
  }

  sendDatatocomponent(data :any){
      this.servicesubject$.next(data)
  }

  getConfigData(){
    let urlpath = 'assets/APIJson/GeoLocation.json'

    return this.http.get(urlpath)

   }




   saveData(body :any){
     body={
       "user AccountName" :"neha",
       "password" : "456",
       "email":"@gmail"
     }
     let urlpath = 'http://localhost:3000/createuser'
     return this.http.post(urlpath,body)

   }

   getcountries(){
     let countryurl = ''
     return this.http.get(countryurl)
   }


  getData(): string {
    return this.serviceData;
  }

  setData(value: string) {
    
    this.serviceData = value.toUpperCase();
  }



}



