import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTrainingComponent } from './parent-training.component';

describe('ParentTrainingComponent', () => {
  let component: ParentTrainingComponent;
  let fixture: ComponentFixture<ParentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
