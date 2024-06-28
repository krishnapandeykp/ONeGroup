import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { journals, bookChapter, conferences, books, patents } from '../../../data-entries/publications';

interface Publication {
  title: string;
  authors: string;
  publisherName: string;
  year: string;
  link?: string;
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  currentTab: keyof typeof this.allPublications = 'journals'; // Keyof ensures type safety
  publicationTypes = ['journals', 'bookChapter', 'conferences', 'books', 'patents'] as const;

  allPublications = {
    journals, bookChapter, conferences, books, patents
  };

  get currentPublications(): Publication[] {
    return this.allPublications[this.currentTab]; // Now type-safe
  }

  switchTab(tab: keyof typeof this.allPublications): void {
    this.currentTab = tab;
  }

  tableHeaderText(): string {
    switch (this.currentTab) {
      case 'bookChapter':
        return 'Book Chapters';
      default:
        return this.currentTab.charAt(0).toUpperCase() + this.currentTab.slice(1);
    }
  }
}
