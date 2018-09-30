import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HomeModel } from './home';

@Component({
  selector: 'b-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: HomeModel;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService
      .getNews()
      .then(newsData => {
        this.news = newsData;
      })
      .catch(err => {
        console.error(err.message);
      });
  }
}
