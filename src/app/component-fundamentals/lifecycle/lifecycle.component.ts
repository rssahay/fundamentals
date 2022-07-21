import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  
  displayChild: boolean = false;

  constructor() {
    console.log("LifecycleComponent: Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("LifecycleComponent: OnChanges");
  }

  ngOnInit() {
    console.log("LifecycleComponent: OnInit");
  }

  ngDoCheck() {
    console.log("LifecycleComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("LifecycleComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("LifecycleComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
  console.log("LifecycleComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("LifecycleComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("LifecycleComponentcheck:OnDestroy");
  }

}
