import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from 'src/articles/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  throttle = 10;
  scrollDistance = 1;
  scrollUpDistance = 2;
  articles: Array<Article>;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
   }

  ngOnInit() {
  }

  onScrollDown() {
    
  }

}
