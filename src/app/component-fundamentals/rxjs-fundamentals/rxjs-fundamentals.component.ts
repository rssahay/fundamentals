import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-fundamentals',
  templateUrl: './rxjs-fundamentals.component.html',
  styleUrls: ['./rxjs-fundamentals.component.scss']
})
export class RxjsFundamentalsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) { }
   secondsCounter = interval(1000);
  ngOnInit(): void {

    this.route.paramMap.subscribe(el => {
console.log(el.get('name'))
    })

    // this.secondsCounter.subscribe(item => {
    //   console.log(`hello ${item + 1} times`)
    // })
  }

}
