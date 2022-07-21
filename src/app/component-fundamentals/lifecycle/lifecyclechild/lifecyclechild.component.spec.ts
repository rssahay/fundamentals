import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclechildComponent } from './lifecyclechild.component';

describe('LifecyclechildComponent', () => {
  let component: LifecyclechildComponent;
  let fixture: ComponentFixture<LifecyclechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
