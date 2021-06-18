import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaoPageComponent } from './cao-page.component';

describe('CaoPageComponent', () => {
  let component: CaoPageComponent;
  let fixture: ComponentFixture<CaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
