import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { CafeMenuComponent } from './cafe-menu/cafe-menu.component';
import { CafeFinderComponent } from './cafe-finder/cafe-finder.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DemoHomeComponent,
    CafeMenuComponent,
    CafeFinderComponent,
    MobileAppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
