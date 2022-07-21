import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofHerosComponent } from './listof-heros.component';

describe('ListofHerosComponent', () => {
  let component: ListofHerosComponent;
  let fixture: ComponentFixture<ListofHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
