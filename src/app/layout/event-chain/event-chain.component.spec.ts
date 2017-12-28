import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChainComponent } from './event-chain.component';

describe('EventChainComponent', () => {
  let component: EventChainComponent;
  let fixture: ComponentFixture<EventChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
