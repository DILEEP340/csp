import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestusComponent } from './suggestus.component';

describe('SuggestusComponent', () => {
  let component: SuggestusComponent;
  let fixture: ComponentFixture<SuggestusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
