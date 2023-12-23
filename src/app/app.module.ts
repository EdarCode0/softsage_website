import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestimonialsComponent } from './testimonials/testimonials.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    NgbDropdown,
    HttpClientModule,

    TranslateModule.forRoot({

      defaultLanguage: 'al',

      loader: {

        provide: TranslateLoader,

        useFactory: HttpLoaderFactory,

        deps: [HttpClient]

      }

    }),
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

