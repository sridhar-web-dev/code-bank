import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBtnComponent } from './code-bank.component';

describe('DynamicBtnComponent', () => {
  let component: DynamicBtnComponent;
  let fixture: ComponentFixture<DynamicBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicBtnComponent]
    });
    fixture = TestBed.createComponent(DynamicBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
