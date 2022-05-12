import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRideComponent } from './single-ride.component';

describe('SingleRideComponent', () => {
  let component: SingleRideComponent;
  let fixture: ComponentFixture<SingleRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
