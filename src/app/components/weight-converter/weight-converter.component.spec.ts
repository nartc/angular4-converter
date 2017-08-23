import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightConverterComponent } from './weight-converter.component';

describe('WeightConverterComponent', () => {
  let component: WeightConverterComponent;
  let fixture: ComponentFixture<WeightConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
