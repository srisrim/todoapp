import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindStatesComponent } from './bind-states.component';

describe('BindStatesComponent', () => {
  let component: BindStatesComponent;
  let fixture: ComponentFixture<BindStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
