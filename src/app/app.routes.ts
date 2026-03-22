// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/:id', component: TeamDetailsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', component: PortfolioDetailsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: '**', redirectTo: '' },
];
