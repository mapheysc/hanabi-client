import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceActionComponent } from './piece-action.component';

describe('PieceActionComponent', () => {
  let component: PieceActionComponent;
  let fixture: ComponentFixture<PieceActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
