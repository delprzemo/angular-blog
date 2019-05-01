import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article, ArticleService } from 'src/articles/article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.less']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
  }

  onArticleClick() {
    this.router.navigate(['article', this.article.id]);
  }

  getImage(article: Article): string {
    if (article.image) return article.image;
    if (article.imageUrl) return article.imageUrl;
    return '';
  }
}
