import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from 'src/articles/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  throttle = 10;
  scrollDistance = 1;
  scrollUpDistance = 2;
  searchText: string;
  articles: Array<Article>;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticlesThrottle(this.throttle);
  }

  findArticleByText() {
    this.throttle = 10;
    this.articles = this.articleService.getArticlesByText(this.searchText, this.throttle);
  }

  ngOnInit() {
  }

  onScrollDown() {
    this.throttle = this.throttle + 10;
    if(this.searchText) {
      this.articles = this.articleService.getArticlesByText(this.searchText, this.throttle);
    } else {
      this.articles = this.articleService.getArticlesThrottle(this.throttle);
    }
  }

}
