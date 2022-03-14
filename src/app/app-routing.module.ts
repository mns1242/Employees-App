import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailsComponent } from './Components/contact-details/contact-details.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
 
  {path:'contact-list',component:ContactListComponent},
  {path:'contact-list/:id',component:ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
