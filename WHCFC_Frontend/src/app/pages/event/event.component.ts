import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/event/calendar/calendar.component';
import { EventDetailComponent } from '../../components/event/event-detail/event-detail.component';
import { Events } from '../../../types';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, CalendarComponent, EventDetailComponent],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  eventList: Events[];

  constructor() {
    // For testing purposes
    this.eventList = [
      {
        title: 'Test data A',
        date: '2024-10-07',
        time: '17:00:00',
        category: 'match',
        description: '',
        location: '',
        team1: '',
        team2: '',
      },
      {
        title: 'Test data B',
        date: '2024-10-11',
        time: '17:00:00',
        category: 'match',
        description: '',
        location: '',
        team1: '',
        team2: '',
      },
      {
        title: 'Test data C',
        date: '2024-10-19',
        time: '17:00:00',
        category: 'match',
        description: '',
        location: '',
        team1: '',
        team2: '',
      },
    ];
  }
}
