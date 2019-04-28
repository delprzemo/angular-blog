import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
    { path: '', component: ArticleListComponent},
    { path: 'blog', component: ArticleListComponent},
    { path: 'about', component: AboutMeComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
