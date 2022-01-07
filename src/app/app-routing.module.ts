import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RegisterComponent } from './components/register/register.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'faqs', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
