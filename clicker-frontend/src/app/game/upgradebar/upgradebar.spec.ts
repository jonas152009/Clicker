import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upgradebar } from './upgradebar';

describe('Upgradebar', () => {
  let component: Upgradebar;
  let fixture: ComponentFixture<Upgradebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upgradebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upgradebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
