import { Component } from '@angular/core';
import { FaqHeadingComponent } from '../../components/faq/faq-heading/faq-heading.component';
import { FaqCoreComponent } from '../../components/faq/faq-core/faq-core.component';
import { FaqMissComponent } from '../../components/faq/faq-miss/faq-miss.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqHeadingComponent, FaqCoreComponent, FaqMissComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
