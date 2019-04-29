import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Article } from 'src/articles/article.service';



@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.less']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onArticleClick() {
    this.router.navigate(['article']);
  }

  getImage(article: Article): string {
    if (article.image) return article.image;
    if (article.imageUrl) return article.imageUrl;
    return '';
  }
}
