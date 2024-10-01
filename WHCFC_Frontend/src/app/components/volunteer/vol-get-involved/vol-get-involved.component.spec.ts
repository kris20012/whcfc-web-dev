import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolGetInvolvedComponent } from './vol-get-involved.component';

describe('VolGetInvolvedComponent', () => {
  let component: VolGetInvolvedComponent;
  let fixture: ComponentFixture<VolGetInvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolGetInvolvedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolGetInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
