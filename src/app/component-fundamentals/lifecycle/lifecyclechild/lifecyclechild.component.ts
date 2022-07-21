import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.scss']
})
export class LifecyclechildComponent implements  OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy  {

  @Input() message:string = "";

  constructor() {
  console.log("ChildComponent:Constructor");
  }

  ngOnChanges() {
    console.log("ChildComponent:OnChanges");
  }


  ngOnInit() {
    console.log("ChildComponent:OnInit");
  }

  ngDoCheck() {
    console.log("ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("ChildComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ChildComponent:OnDestroy");
  }

}
