import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page04Component } from './page04.component';

describe('Page04Component', () => {
  let component: Page04Component;
  let fixture: ComponentFixture<Page04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Page04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
