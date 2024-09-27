import { Component } from '@angular/core';

@Component({
  selector: 'app-vol-heading',
  standalone: true,
  imports: [],
  templateUrl: './vol-heading.component.html',
  styleUrl: './vol-heading.component.css'
})
export class VolHeadingComponent {

  scrollToBottom(): void {
    const scrollHeight = document.body.scrollHeight; 
    const offset = 1200; 
  
    window.scrollTo({ top: scrollHeight - offset, behavior: 'smooth' });
  }

}
