import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CafeMenuComponent } from './cafe-menu/cafe-menu.component';
import { CafeFinderComponent } from './cafe-finder/cafe-finder.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cafe-menu', component:CafeMenuComponent},
  {path:'cafe-finder', component:CafeFinderComponent},
  {path:'mobile-app', component:MobileAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
