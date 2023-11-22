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
import { EShopComponent } from './e-shop/e-shop.component';
import { EshopHeaderComponent } from './eshop-header/eshop-header.component';
import { EshopFooterComponent } from './eshop-footer/eshop-footer.component';
import { CoffeeAndTeaComponent } from './coffee-and-tea/coffee-and-tea.component';
import { MugsAndGiftsComponent } from './mugs-and-gifts/mugs-and-gifts.component';
import { MunchiesComponent } from './munchies/munchies.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { AllTimeChillersComponent } from './all-time-chillers/all-time-chillers.component';
import { AllDayDelightsComponent } from './all-day-delights/all-day-delights.component';
import { SweetToothX32Component } from './sweet-tooth-x32/sweet-tooth-x32.component';
import { NutritionalInfoComponent } from './nutritional-info/nutritional-info.component';
import { AllTimeChillersTwoComponent } from './all-time-chillers-two/all-time-chillers-two.component';
import { GiftComponent } from './gift/gift.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaseEnquiryComponent } from './lease-enquiry/lease-enquiry.component';
import { AdvertiseWithUsComponent } from './advertise-with-us/advertise-with-us.component';
import { CateringServiceComponent } from './catering-service/catering-service.component';
import { BulkOrderComponent } from './bulk-order/bulk-order.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DemoHomeComponent,
    CafeMenuComponent,
    CafeFinderComponent,
    MobileAppComponent,
    EShopComponent,
    EshopHeaderComponent,
    EshopFooterComponent,
    CoffeeAndTeaComponent,
    MugsAndGiftsComponent,
    MunchiesComponent,
    HotelsComponent,
    BeveragesComponent,
    AllTimeChillersComponent,
    AllDayDelightsComponent,
    SweetToothX32Component,
    NutritionalInfoComponent,
    AllTimeChillersTwoComponent,
    GiftComponent,
    CustomerCareComponent,
    LeaseEnquiryComponent,
    AdvertiseWithUsComponent,
    CateringServiceComponent,
    BulkOrderComponent,
    VendingMachineComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
