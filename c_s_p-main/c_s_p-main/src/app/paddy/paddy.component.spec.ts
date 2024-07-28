import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddyComponent } from './paddy.component';

describe('PaddyComponent', () => {
  let component: PaddyComponent;
  let fixture: ComponentFixture<PaddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
