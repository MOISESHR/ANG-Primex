import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagInicioComponent } from './vistas/pag-inicio/pag-inicio.component';
import { PagAcercaNosotrosComponent } from './vistas/pag-acerca-nosotros/pag-acerca-nosotros.component';
import { PagAcercaMiComponent } from './vistas/pag-acerca-mi/pag-acerca-mi.component';
import { SeccionPiePagComponent } from './vistas/seccion-pie-pag/seccion-pie-pag.component';
import { SeccionCabPagComponent } from './vistas/seccion-cab-pag/seccion-cab-pag.component';
import { BlogStandardComponent } from './vistas/blog-standard/blog-standard.component';
import { BlogSingleComponent } from './vistas/blog-single/blog-single.component';
import { SeccionCarouselComponent } from './vistas/seccion-carousel/seccion-carousel.component';
import { PortfolioFourColComponent } from './vistas/portfolio-four-col/portfolio-four-col.component';
import { PortfolioThreeColComponent } from './vistas/portfolio-three-col/portfolio-three-col.component';
import { PortfolioTwoColComponent } from './vistas/portfolio-two-col/portfolio-two-col.component';
import { FaqComponent } from './vistas/faq/faq.component';
import { ClientsComponent } from './vistas/clients/clients.component';
import { TypographyComponent } from './vistas/typography/typography.component';
import { ContactComponent } from './vistas/contact/contact.component';
import { JobComponent } from './vistas/job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    PagInicioComponent,
    PagAcercaNosotrosComponent,
    PagAcercaMiComponent,
    SeccionPiePagComponent,
    SeccionCabPagComponent,
    BlogStandardComponent,
    BlogSingleComponent,
    SeccionCarouselComponent,
    PortfolioFourColComponent,
    PortfolioThreeColComponent,
    PortfolioTwoColComponent,
    FaqComponent,
    ClientsComponent,
    TypographyComponent,
    ContactComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
