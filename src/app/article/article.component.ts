import { Component, OnInit, ViewChild, ElementRef, Injector, TemplateRef, AfterContentInit, AfterViewInit, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements'
import { ShowCodeComponent } from '../show-code/show-code.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit, AfterViewInit {
  content: SafeHtml;

  constructor(private http: HttpClient, injector: Injector, domSanitizer: DomSanitizer) {
    this.http.get('articles/html/article1.html', { responseType: 'text' }).subscribe(data => {
      const ShowCodeElement = createCustomElement(ShowCodeComponent, {injector: injector});
      customElements.define('app-show-code', ShowCodeElement);
      this.content = domSanitizer.bypassSecurityTrustHtml(data);
    })
   }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }

  getSampleDate() {
    return new Date();
  }

}
