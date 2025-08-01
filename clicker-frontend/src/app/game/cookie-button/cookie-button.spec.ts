import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieButton } from './cookie-button';

describe('CookieButton', () => {
  let component: CookieButton;
  let fixture: ComponentFixture<CookieButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
