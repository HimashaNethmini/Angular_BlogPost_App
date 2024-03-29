import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'category', component:SingleCategoryComponent}, 
  {path: 'post', component:SinglePostComponent},

  {path: 'about', component:AboutComponent},
  {path: 'terms-conditions', component:TermsConditionsComponent},
  {path: 'contact', component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
