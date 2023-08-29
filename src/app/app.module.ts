import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesLandingComponent } from './pages/services-landing/services-landing.component';
import { ServicesEdaaComponent } from './pages/services-edaa/services-edaa.component';
import { ServicesIaasComponent } from './pages/services-iaas/services-iaas.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ResearchComponent } from './pages/research/research.component';
import { BlogArticleComponent } from './pages/blog-article/blog-article.component';
import { TermOfUseComponent } from './pages/term-of-use/term-of-use.component';
import { TermAndPoliciesComponent } from './pages/term-and-policies/term-and-policies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesLandingComponent,
    ServicesEdaaComponent,
    ServicesIaasComponent,
    BlogComponent,
    SolutionsComponent,
    ResearchComponent,
    BlogArticleComponent,
    TermOfUseComponent,
    TermAndPoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
