import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  benefits = [
    {
      icon: '⚽', 
      title: 'Free Football Experiences',
      description: 'Attend our Wednesday and Sunday scrimmages at no cost and no obligation. Participate in team play and summer tournaments with no cost.'
    },
    {
      icon: '🏆', 
      title: 'Team Play and Tournaments',
      description: 'Enjoy competitive football opportunities without the financial burden. Join a team with minimal uniform costs and benefit from our efforts to keep expenses low.'
    },
    {
      icon: '🌟', 
      title: 'Community and Networking',
      description: 'Interact with like-minded individuals, develop long-term relationships, and be part of a supportive community. Build connections that enhance both personal and professional growth.'
    },
    {
      icon: '📚', 
      title: 'Educational Workshops',
      description: 'Join free workshops focused on developing life skills, career growth, and personal development. Enhance your skills and knowledge to support your future endeavors.'
    }
  ];
}
