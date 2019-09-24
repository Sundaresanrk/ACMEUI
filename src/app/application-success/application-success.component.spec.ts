import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSuccessComponent } from './application-success.component';

describe('ApplicationSuccessComponent', () => {
  let component: ApplicationSuccessComponent;
  let fixture: ComponentFixture<ApplicationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
