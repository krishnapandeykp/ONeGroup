import { Component } from '@angular/core';
import { mentor, coreGroup } from '../../../data-entries/people';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  mentorData=mentor[0];
  coreGroup= coreGroup;

}
