import { Component, OnInit } from '@angular/core';
import { news } from '../../../data-entries/news';
import { CommonModule } from '@angular/common';
import { slidesHomepage } from '../../../data-entries/homepage'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  slides= slidesHomepage;

  newsDataArray: { key: string, value: any[] }[] = [];

  ngOnInit() {
    this.newsDataArray = Object.entries(news).map(([key, value]) => ({ key, value }));
  }
}
