import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHeadingComponent } from './faq-heading.component';

describe('FaqHeadingComponent', () => {
  let component: FaqHeadingComponent;
  let fixture: ComponentFixture<FaqHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
