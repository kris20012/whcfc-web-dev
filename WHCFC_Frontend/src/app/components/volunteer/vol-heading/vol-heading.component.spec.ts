import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolHeadingComponent } from './vol-heading.component';

describe('VolHeadingComponent', () => {
  let component: VolHeadingComponent;
  let fixture: ComponentFixture<VolHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
