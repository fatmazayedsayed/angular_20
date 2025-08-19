import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgSwitch } from './structural-directive-ng-switch';

describe('StructuralDirectiveNgSwitch', () => {
  let component: StructuralDirectiveNgSwitch;
  let fixture: ComponentFixture<StructuralDirectiveNgSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
