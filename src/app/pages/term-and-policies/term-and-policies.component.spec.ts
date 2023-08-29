import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermAndPoliciesComponent } from './term-and-policies.component';

describe('TermAndPoliciesComponent', () => {
  let component: TermAndPoliciesComponent;
  let fixture: ComponentFixture<TermAndPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermAndPoliciesComponent]
    });
    fixture = TestBed.createComponent(TermAndPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
