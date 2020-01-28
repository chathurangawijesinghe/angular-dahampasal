import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahampasalComponent } from './dahampasal.component';

describe('DahampasalComponent', () => {
  let component: DahampasalComponent;
  let fixture: ComponentFixture<DahampasalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahampasalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahampasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
