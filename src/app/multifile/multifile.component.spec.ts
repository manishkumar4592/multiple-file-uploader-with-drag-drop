import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifileComponent } from './multifile.component';

describe('MultifileComponent', () => {
  let component: MultifileComponent;
  let fixture: ComponentFixture<MultifileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultifileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultifileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
