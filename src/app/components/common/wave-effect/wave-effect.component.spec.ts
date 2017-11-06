import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveEffectComponent } from './wave-effect.component';

describe('WaveEffectComponent', () => {
  let component: WaveEffectComponent;
  let fixture: ComponentFixture<WaveEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
