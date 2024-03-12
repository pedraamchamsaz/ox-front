import { Component } from '@angular/core';
import { EventAddService } from '../services/event-add.service';

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css',
})
export class EventpageComponent {
  constructor(private eventAddService: EventAddService) {}

  ngOnInit() {
    this.eventAddService
      .getAllEvents('http://localhost:3000/', { page: 0, perPage: 1 })
      .subscribe((events: Event) => {
        console.log(events);
      });
  }
}
