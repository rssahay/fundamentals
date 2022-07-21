import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFundamentalsComponent } from './rxjs-fundamentals.component';

describe('RxjsFundamentalsComponent', () => {
  let component: RxjsFundamentalsComponent;
  let fixture: ComponentFixture<RxjsFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFundamentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
