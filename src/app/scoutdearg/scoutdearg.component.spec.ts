import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutdeargComponent } from './scoutdearg.component';

describe('ScoutdeargComponent', () => {
  let component: ScoutdeargComponent;
  let fixture: ComponentFixture<ScoutdeargComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutdeargComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoutdeargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
