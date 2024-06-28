import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { slides, sponsorsLogo } from '../../../data-entries/research'

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent {
  slides = slides;
  sponsorsLogo=sponsorsLogo;
}
