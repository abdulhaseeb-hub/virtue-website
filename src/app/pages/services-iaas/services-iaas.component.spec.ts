import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIaasComponent } from './services-iaas.component';

describe('ServicesIaasComponent', () => {
  let component: ServicesIaasComponent;
  let fixture: ComponentFixture<ServicesIaasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesIaasComponent]
    });
    fixture = TestBed.createComponent(ServicesIaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
