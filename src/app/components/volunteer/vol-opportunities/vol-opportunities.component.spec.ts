import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolOpportunitiesComponent } from './vol-opportunities.component';

describe('VolOpportunitiesComponent', () => {
  let component: VolOpportunitiesComponent;
  let fixture: ComponentFixture<VolOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolOpportunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
