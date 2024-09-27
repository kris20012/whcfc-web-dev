import { Component } from '@angular/core';
import { VolHeadingComponent } from '../../components/volunteer/vol-heading/vol-heading.component';
import { VolOpportunitiesComponent } from '../../components/volunteer/vol-opportunities/vol-opportunities.component';
import { VolTestimonialsComponent } from '../../components/volunteer/vol-testimonials/vol-testimonials.component';
import { VolGetInvolvedComponent } from '../../components/volunteer/vol-get-involved/vol-get-involved.component';
import { VolApplyComponent } from '../../components/volunteer/vol-apply/vol-apply.component';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [VolHeadingComponent, VolOpportunitiesComponent, VolTestimonialsComponent, VolGetInvolvedComponent, VolApplyComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {

}
