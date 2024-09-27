import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolTestimonialsComponent } from './vol-testimonials.component';

describe('VolTestimonialsComponent', () => {
  let component: VolTestimonialsComponent;
  let fixture: ComponentFixture<VolTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
