import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CafeMenuComponent } from './cafe-menu/cafe-menu.component';
import { CafeFinderComponent } from './cafe-finder/cafe-finder.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { EShopComponent } from './e-shop/e-shop.component';
import { CoffeeAndTeaComponent } from './coffee-and-tea/coffee-and-tea.component';
import { MugsAndGiftsComponent } from './mugs-and-gifts/mugs-and-gifts.component';
import { MunchiesComponent } from './munchies/munchies.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { AllTimeChillersComponent } from './all-time-chillers/all-time-chillers.component';
import { AllTimeChillersTwoComponent } from './all-time-chillers-two/all-time-chillers-two.component';
import { AllDayDelightsComponent } from './all-day-delights/all-day-delights.component';
import { SweetToothX32Component } from './sweet-tooth-x32/sweet-tooth-x32.component';
import { NutritionalInfoComponent } from './nutritional-info/nutritional-info.component';
import { GiftComponent } from './gift/gift.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { LeaseEnquiryComponent } from './lease-enquiry/lease-enquiry.component';
import { AdvertiseWithUsComponent } from './advertise-with-us/advertise-with-us.component';
import { CateringServiceComponent } from './catering-service/catering-service.component';
import { BulkOrderComponent } from './bulk-order/bulk-order.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cafe-menu', component:CafeMenuComponent},
  {path:'cafe-finder', component:CafeFinderComponent},
  {path:'mobile-app', component:MobileAppComponent},
  {path:'e-shop', component:EShopComponent},
  {path:'coffee-and-tea', component:CoffeeAndTeaComponent},
  {path:'mugs-and-gifts', component:MugsAndGiftsComponent},
  {path:'munchines', component:MunchiesComponent},
  {path:'beverages', component:BeveragesComponent},
  {path:'hotels', component:HotelsComponent},
  {path:'all-time-chillers', component:AllTimeChillersComponent},
  {path:'all-time-chillers-two', component:AllTimeChillersTwoComponent},
  {path:'all-day-delights', component:AllDayDelightsComponent},
  {path:'sweet-tooth', component:SweetToothX32Component},
  {path:'nutritiionalInfo', component:NutritionalInfoComponent},
  {path:'gift', component:GiftComponent},
  {path:'customerCare', component:CustomerCareComponent},
  {path:'lease-enquiry', component:LeaseEnquiryComponent},
  {path:'advertise-with-us', component:AdvertiseWithUsComponent},
  {path:'catering-services', component:CateringServiceComponent},
  {path:'bulk-order', component:BulkOrderComponent},
  {path:'vending-machine', component:VendingMachineComponent},
  {path:'contact-us', component:ContactUsComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
