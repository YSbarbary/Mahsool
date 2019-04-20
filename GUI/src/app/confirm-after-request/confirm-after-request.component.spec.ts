import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAfterRequestComponent } from './confirm-after-request.component';

describe('ConfirmAfterRequestComponent', () => {
  let component: ConfirmAfterRequestComponent;
  let fixture: ComponentFixture<ConfirmAfterRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAfterRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAfterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
