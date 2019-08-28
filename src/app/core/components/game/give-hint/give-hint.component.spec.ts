import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveHintComponent } from './give-hint.component';

describe('GiveHintComponent', () => {
  let component: GiveHintComponent;
  let fixture: ComponentFixture<GiveHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
