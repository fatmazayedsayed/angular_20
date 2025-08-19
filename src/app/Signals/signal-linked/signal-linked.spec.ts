import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLinked } from './signal-linked';

describe('SignalLinked', () => {
  let component: SignalLinked;
  let fixture: ComponentFixture<SignalLinked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLinked]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLinked);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
