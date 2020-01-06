import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSLCompomentComponent } from './vslcompoment.component';

describe('VSLCompomentComponent', () => {
  let component: VSLCompomentComponent;
  let fixture: ComponentFixture<VSLCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSLCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSLCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
