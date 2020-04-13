import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnetProgressComponent } from './spinnet-progress.component';

describe('SpinnetProgressComponent', () => {
  let component: SpinnetProgressComponent;
  let fixture: ComponentFixture<SpinnetProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnetProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnetProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
