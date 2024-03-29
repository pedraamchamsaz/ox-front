import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprofileComponent } from './cardprofile.component';

describe('CardprofileComponent', () => {
  let component: CardprofileComponent;
  let fixture: ComponentFixture<CardprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
