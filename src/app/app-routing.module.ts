import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesLandingComponent } from './pages/services-landing/services-landing.component';
import { ServicesEdaaComponent } from './pages/services-edaa/services-edaa.component';
import { ServicesIaasComponent } from './pages/services-iaas/services-iaas.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ResearchComponent } from './pages/research/research.component';
import { BlogArticleComponent } from './pages/blog-article/blog-article.component';
import { TermOfUseComponent } from './pages/term-of-use/term-of-use.component';
import { TermAndPoliciesComponent } from './pages/term-and-policies/term-and-policies.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'services-landing', component: ServicesLandingComponent},
  { path: 'services-edaa', component: ServicesEdaaComponent},
  { path: 'services-iaas', component: ServicesIaasComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'solutions', component: SolutionsComponent},
  { path: 'research', component: ResearchComponent},
  { path: 'blog-article', component: BlogArticleComponent},
  { path: 'term-of-use', component: TermOfUseComponent},
  { path: 'term-and-policies', component: TermAndPoliciesComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
