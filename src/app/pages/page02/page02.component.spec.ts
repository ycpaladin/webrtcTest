import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page02Component } from './page02.component';

describe('Page02Component', () => {
  let component: Page02Component;
  let fixture: ComponentFixture<Page02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Page02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
