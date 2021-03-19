import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylaoutComponent } from './lazylaout.component';

describe('LazylaoutComponent', () => {
  let component: LazylaoutComponent;
  let fixture: ComponentFixture<LazylaoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazylaoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazylaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
