import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


import { ArticleService, Article } from 'src/articles/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  content: SafeHtml;
  article: Article;

  constructor(private http: HttpClient, domSanitizer: DomSanitizer,
    private articleService: ArticleService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get("id");
    this.article = this.articleService.getArticleById(id);
    this.http.get('articles/html/' + this.article.html, { responseType: 'text' }).subscribe(data => {
      this.content = domSanitizer.bypassSecurityTrustHtml(data);
    })
  }

  ngOnInit() {

  }

  getImage(): string {
    if (this.article.image) return this.article.image;
    if (this.article.imageUrl) return this.article.imageUrl;
    return '';
  }

}
