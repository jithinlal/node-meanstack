import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterNavbarComponent } from './after-navbar.component';

describe('AfterNavbarComponent', () => {
  let component: AfterNavbarComponent;
  let fixture: ComponentFixture<AfterNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
