import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-card.component';

describe('AddToCardComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
