import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalWritable } from './signal-writable';

describe('SignalWritable', () => {
  let component: SignalWritable;
  let fixture: ComponentFixture<SignalWritable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalWritable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalWritable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
