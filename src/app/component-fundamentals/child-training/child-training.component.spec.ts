import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTrainingComponent } from './child-training.component';

describe('ChildTrainingComponent', () => {
  let component: ChildTrainingComponent;
  let fixture: ComponentFixture<ChildTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
