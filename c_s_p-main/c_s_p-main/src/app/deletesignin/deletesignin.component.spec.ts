import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesigninComponent } from './deletesignin.component';

describe('DeletesigninComponent', () => {
  let component: DeletesigninComponent;
  let fixture: ComponentFixture<DeletesigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletesigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletesigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
