import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromtboxComponent } from './promtbox.component';

describe('PromtboxComponent', () => {
  let component: PromtboxComponent;
  let fixture: ComponentFixture<PromtboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromtboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromtboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
