import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HorseComponent } from './horse/horse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "horses/:idgi", component: HorseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//take rides list and add ride out of home
//Create nav in Home with links to horse names
//leave add horse in Home