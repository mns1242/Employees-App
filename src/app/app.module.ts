import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './Components/contact-details/contact-details.component';












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    NavbarComponent,
    ContactListComponent,
    ContactDetailsComponent,

   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
