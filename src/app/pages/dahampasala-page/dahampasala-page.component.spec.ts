import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahampasalaPageComponent } from './dahampasala-page.component';

describe('DahampasalaPageComponent', () => {
  let component: DahampasalaPageComponent;
  let fixture: ComponentFixture<DahampasalaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahampasalaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahampasalaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
