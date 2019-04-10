import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagInicioComponent } from './vistas/pag-inicio/pag-inicio.component';
import { PagAcercaMiComponent } from './vistas/pag-acerca-mi/pag-acerca-mi.component';
import { PagAcercaNosotrosComponent } from './vistas/pag-acerca-nosotros/pag-acerca-nosotros.component';
import { BlogStandardComponent } from './vistas/blog-standard/blog-standard.component';
import { BlogSingleComponent } from './vistas/blog-single/blog-single.component';
import { PortfolioFourColComponent } from './vistas/portfolio-four-col/portfolio-four-col.component';
import { PortfolioThreeColComponent } from './vistas/portfolio-three-col/portfolio-three-col.component';
import { PortfolioTwoColComponent } from './vistas/portfolio-two-col/portfolio-two-col.component';
import { JobComponent } from './vistas/job/job.component';
import { ClientsComponent } from './vistas/clients/clients.component';
import { FaqComponent } from './vistas/faq/faq.component';
import { TypographyComponent } from './vistas/typography/typography.component';
import { ContactComponent } from './vistas/contact/contact.component';

const routes: Routes = [
  {
    path: 'inicio', children: [
      { path: '', component: PagInicioComponent },
      { path: 'edit/:id', component: PagInicioComponent }
    ]
  },
  { path: 'acerca-de-nosotros', component: PagAcercaNosotrosComponent },
  { path: 'acerca-de-mi', component: PagAcercaMiComponent },
  { path: 'blog-standard', component: BlogStandardComponent },
  { path: 'blog-single', component: BlogSingleComponent },
  { path: 'portfolio-four', component: PortfolioFourColComponent },
  { path: 'portfolio-three', component: PortfolioThreeColComponent },
  { path: 'portfolio-two', component: PortfolioTwoColComponent },

  { path: 'job', component: JobComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
