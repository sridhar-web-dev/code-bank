import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonComponent } from './tutor/button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DynamicBtnComponent } from './pages/dynamic-btn/dynamic-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    ContactComponent,
    ButtonComponent,
    SidebarComponent,
    DynamicBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
