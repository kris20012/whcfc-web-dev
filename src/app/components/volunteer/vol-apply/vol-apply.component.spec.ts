import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolApplyComponent } from './vol-apply.component';

describe('VolApplyComponent', () => {
  let component: VolApplyComponent;
  let fixture: ComponentFixture<VolApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolApplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
