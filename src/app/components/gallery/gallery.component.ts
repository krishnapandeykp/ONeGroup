import { Component } from '@angular/core';
import { gallery } from '../../../data-entries/gallery';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  gallery = gallery;

  selectedImage: string | null = null;

  onImageClick(image: string) {
    this.selectedImage = image;
  }

  onBackgroundClick() {
    this.selectedImage = null;
  }
}

