import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-core',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-core.component.html',
  styleUrl: './faq-core.component.css'
})
export class FaqCoreComponent {
  faqs = [
    {
      question: 'What age groups does WHCFC support?',
      answer: 'As a not-for-profit community organization, we offer programs for adults ranging from ages 18 and up.',
      isOpen: false
    },
    {
      question: 'What equipment do I need to participate?',
      answer: 'Each player will need to bring their own shin guards and their size-fitting soccer cleats. We can provide the team jersey.',
      isOpen: false
    },
    {
      question: 'When do the practices and matches take place?',
      answer: 'Free scrimmages occur on Sunday evenings and Wednesday evenings during the summer. Depending on match availability, we may have matches any day of the week usually outside of working hours.',
      isOpen: false
    },
    {
      question: 'Where are the games played?',
      answer: 'Our free scrimmages and practices take place at our home field at White Haven Park. For friendly matches, locations can be anywhere across the GTA and team members are responsible for their own transportation.',
      isOpen: false
    },
    {
      question: 'What are fitness programs?',
      answer: 'Fitness programs are tailored plans to enhance physical fitness, typically including exercises and workouts.',
      isOpen: false
    },
    {
      question: 'What is coaching & training?',
      answer: 'Coaching & training involve preparing individuals for competitive sports by improving their skills and fitness.',
      isOpen: false
    },    
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  toggleAll(expand: boolean) {
    this.faqs.forEach(faq => faq.isOpen = expand);
  }

}
