import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestbooksComponent } from './bestbooks.component';

describe('BestbooksComponent', () => {
  let component: BestbooksComponent;
  let fixture: ComponentFixture<BestbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
