import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MobNavComponent } from './navbar/mob-nav/mob-nav.component';
import { TestinomialComponent } from './testinomial/testinomial.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './footer/social-links/social-links.component';
import { NewsletterComponent } from './footer/newsletter/newsletter.component';
import { FooterLinkComponent } from './footer/footer-link/footer-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MobNavComponent,
    TestinomialComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    ProductCardComponent,
    FooterComponent,
    SocialLinksComponent,
    NewsletterComponent,
    FooterLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
