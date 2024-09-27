import { Component } from '@angular/core';

@Component({
  selector: 'app-vol-opportunities',
  standalone: true,
  imports: [],
  templateUrl: './vol-opportunities.component.html',
  styleUrl: './vol-opportunities.component.css'
})
export class VolOpportunitiesComponent {
  
  scrollToBottom(): void {
    const scrollHeight = document.body.scrollHeight; 
    const offset = 1200; 
  
    window.scrollTo({ top: scrollHeight - offset, behavior: 'smooth' });
  }

}
