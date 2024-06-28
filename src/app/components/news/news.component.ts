import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { news } from '../../../data-entries/news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  newsDataArray: { key: string, value: any[] }[] = [];

  ngOnInit() {
    this.newsDataArray = Object.entries(news).map(([key, value]) => ({ key, value }));
  }
}
