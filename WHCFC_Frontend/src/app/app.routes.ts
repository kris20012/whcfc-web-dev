import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { NgModule } from '@angular/core';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'volunteer', component: VolunteerComponent},
    { path: 'faq', component: FaqComponent},
    {path: 'contact-us', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }