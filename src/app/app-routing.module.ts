import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
    { path: '', component: ArticleListComponent},
    { path: 'blog', component: ArticleListComponent},
    { path: 'about', component: AboutMeComponent},
    { path: 'article/:id', component: ArticleComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
