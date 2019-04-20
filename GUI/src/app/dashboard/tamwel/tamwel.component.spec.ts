import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamwelComponent } from './tamwel.component';

describe('TamwelComponent', () => {
  let component: TamwelComponent;
  let fixture: ComponentFixture<TamwelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamwelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamwelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
