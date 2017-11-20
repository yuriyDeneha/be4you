import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGridStructureComponent } from './select-grid-structure.component';

describe('SelectGridStructureComponent', () => {
  let component: SelectGridStructureComponent;
  let fixture: ComponentFixture<SelectGridStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGridStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGridStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
