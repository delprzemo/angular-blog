import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';



@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.less']
})
export class ArticleItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onArticleClick() {
    this.router.navigate(['article']);
  }

}
