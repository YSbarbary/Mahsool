import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootomNavComponent } from './bootom-nav.component';

describe('BootomNavComponent', () => {
  let component: BootomNavComponent;
  let fixture: ComponentFixture<BootomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
