import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/event/calendar/calendar.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {}
