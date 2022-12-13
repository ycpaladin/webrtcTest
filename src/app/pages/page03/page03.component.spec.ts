import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page03Component } from './page03.component';

describe('Page03Component', () => {
  let component: Page03Component;
  let fixture: ComponentFixture<Page03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Page03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});