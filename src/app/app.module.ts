import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
  MatListModule, MatCardModule, MatDividerModule, MatChipsModule } from '@angular/material';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArticleItemComponent } from './article-list/article-item/article-item.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ArticleService } from 'src/articles/article.service';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ArticleListComponent,
    AboutMeComponent,
    ArticleItemComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    InfiniteScrollModule 
  ],
  providers: [ArticleService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
