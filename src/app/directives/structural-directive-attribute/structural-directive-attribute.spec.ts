import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveAttribute } from './structural-directive-attribute';

describe('StructuralDirectiveAttribute', () => {
  let component: StructuralDirectiveAttribute;
  let fixture: ComponentFixture<StructuralDirectiveAttribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveAttribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveAttribute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
