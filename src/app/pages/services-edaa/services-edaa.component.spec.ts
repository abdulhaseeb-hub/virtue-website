import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEdaaComponent } from './services-edaa.component';

describe('ServicesEdaaComponent', () => {
  let component: ServicesEdaaComponent;
  let fixture: ComponentFixture<ServicesEdaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesEdaaComponent]
    });
    fixture = TestBed.createComponent(ServicesEdaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
