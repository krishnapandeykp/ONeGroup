import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { journals } from '../../../data-entries/publications';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  journals=journals;
}
