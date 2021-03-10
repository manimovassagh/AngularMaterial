import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooternumsComponent } from './footernums.component';

describe('FooternumsComponent', () => {
  let component: FooternumsComponent;
  let fixture: ComponentFixture<FooternumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooternumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooternumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
