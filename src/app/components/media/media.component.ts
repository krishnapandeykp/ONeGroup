import { Component } from '@angular/core';
import { media } from '../../../data-entries/media';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  gallery = media;

  selectedImage: string | null = null;

  onImageClick(image: string) {
    this.selectedImage = image;
  }

  onBackgroundClick() {
    this.selectedImage = null;
  }
}
