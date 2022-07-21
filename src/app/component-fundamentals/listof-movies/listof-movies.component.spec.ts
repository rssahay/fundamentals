import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofMoviesComponent } from './listof-movies.component';

describe('ListofMoviesComponent', () => {
  let component: ListofMoviesComponent;
  let fixture: ComponentFixture<ListofMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
