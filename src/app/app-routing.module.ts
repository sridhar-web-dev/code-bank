import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { DynamicBtnComponent } from './pages/dynamic-btn/dynamic-btn.component';
import { ReactiveFormComponent } from './tutor/reactive-form/reactive-form.component';

const routes: Routes = [
  // For Router Examples
  {path:'', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path: 'service', component:ServiceComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'contact', component:ContactComponent},
  // For Concept
  {path: 'dynamic-button', component:DynamicBtnComponent},
  {path: 'reactive-form', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
