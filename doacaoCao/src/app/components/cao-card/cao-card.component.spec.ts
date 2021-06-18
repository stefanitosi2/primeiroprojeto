import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaoCardComponent } from './cao-card.component';

describe('CaoCardComponent', () => {
  let component: CaoCardComponent;
  let fixture: ComponentFixture<CaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
