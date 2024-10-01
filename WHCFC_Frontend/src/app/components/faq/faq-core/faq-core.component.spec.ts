import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCoreComponent } from './faq-core.component';

describe('FaqCoreComponent', () => {
  let component: FaqCoreComponent;
  let fixture: ComponentFixture<FaqCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqCoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
