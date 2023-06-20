import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestPageComponent } from './add-test-page.component';

describe('AddTestPageComponent', () => {
  let component: AddTestPageComponent;
  let fixture: ComponentFixture<AddTestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTestPageComponent]
    });
    fixture = TestBed.createComponent(AddTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
