import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdetComponent } from './signupdet.component';

describe('SignupdetComponent', () => {
  let component: SignupdetComponent;
  let fixture: ComponentFixture<SignupdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
