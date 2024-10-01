import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMissComponent } from './faq-miss.component';

describe('FaqMissComponent', () => {
  let component: FaqMissComponent;
  let fixture: ComponentFixture<FaqMissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqMissComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqMissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
